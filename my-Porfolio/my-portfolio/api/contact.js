/* Función serverless del formulario de contacto (Vercel, runtime Node).
 *
 * Recibe el POST del formulario, valida del lado del servidor y manda el mail
 * con Resend. La validación del cliente es para que la persona no se frustre;
 * esta es la que importa, porque a este endpoint se le puede pegar sin pasar
 * por el formulario.
 *
 * Variables de entorno necesarias:
 *   RESEND_API_KEY   clave de https://resend.com
 *   CONTACT_TO       dirección donde recibís los mensajes
 *   CONTACT_FROM     remitente verificado en Resend
 *                    (ej. "Portfolio <contacto@tudominio.com>")
 */

const MAX = { nombre: 120, email: 200, motivo: 30, mensaje: 4000 };
const MOTIVOS = new Set(['posicion', 'proyecto', 'otro']);

/* Límite por IP, best-effort: en serverless la instancia se recicla, así que
 * frena ráfagas pero no es una defensa fuerte. Para eso haría falta un store
 * externo (KV, Upstash). Alcanza para el volumen de un portfolio. */
const hits = new Map();
const RATE = { windowMs: 60_000, max: 3 };

function rateLimited(ip) {
  const now = Date.now();
  const list = (hits.get(ip) || []).filter((t) => now - t < RATE.windowMs);
  list.push(now);
  hits.set(ip, list);
  if (hits.size > 500) hits.clear();     // techo de memoria
  return list.length > RATE.max;
}

const clean = (v, max) => String(v ?? '').trim().slice(0, max);
const isEmail = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v);
const escape = (s) => s.replace(/[&<>"']/g, (c) => (
  { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]
));

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'method_not_allowed' });
  }

  const ip = (req.headers['x-forwarded-for'] || '').split(',')[0].trim() || 'unknown';
  if (rateLimited(ip)) return res.status(429).json({ error: 'rate_limited' });

  const body = typeof req.body === 'string' ? JSON.parse(req.body || '{}') : (req.body || {});

  /* Campo trampa: invisible para las personas, irresistible para los bots.
     Si viene lleno respondemos 200 para no darle señal al bot. */
  if (clean(body.website, 100)) return res.status(200).json({ ok: true });

  const nombre = clean(body.nombre, MAX.nombre);
  const email = clean(body.email, MAX.email);
  const motivo = clean(body.motivo, MAX.motivo);
  const mensaje = clean(body.mensaje, MAX.mensaje);

  const errores = {};
  if (nombre.length < 2) errores.nombre = true;
  if (!isEmail(email)) errores.email = true;
  if (!MOTIVOS.has(motivo)) errores.motivo = true;
  if (mensaje.length < 10) errores.mensaje = true;
  if (Object.keys(errores).length) {
    return res.status(400).json({ error: 'validation', errores });
  }

  const { RESEND_API_KEY, CONTACT_TO, CONTACT_FROM } = process.env;
  if (!RESEND_API_KEY || !CONTACT_TO || !CONTACT_FROM) {
    console.error('Faltan variables de entorno del formulario de contacto');
    return res.status(503).json({ error: 'not_configured' });
  }

  const asunto = `Portfolio · ${motivo} · ${nombre}`;
  const html = `
    <h2 style="font-family:system-ui;margin:0 0 12px">Mensaje desde el portfolio</h2>
    <table style="font-family:system-ui;font-size:14px;border-collapse:collapse">
      <tr><td style="padding:4px 12px 4px 0"><b>Nombre</b></td><td>${escape(nombre)}</td></tr>
      <tr><td style="padding:4px 12px 4px 0"><b>Email</b></td><td>${escape(email)}</td></tr>
      <tr><td style="padding:4px 12px 4px 0"><b>Motivo</b></td><td>${escape(motivo)}</td></tr>
    </table>
    <p style="font-family:system-ui;font-size:14px;white-space:pre-wrap;margin-top:16px">${escape(mensaje)}</p>
  `;

  try {
    const r = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: CONTACT_FROM,
        to: [CONTACT_TO],
        // Así "Responder" en el cliente de mail va directo a la persona.
        reply_to: email,
        subject: asunto,
        html,
      }),
    });

    if (!r.ok) {
      console.error('Resend respondió', r.status, await r.text());
      return res.status(502).json({ error: 'send_failed' });
    }
    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error('Error enviando el mail:', err);
    return res.status(502).json({ error: 'send_failed' });
  }
}
