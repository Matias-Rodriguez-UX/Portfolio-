import React from "react";
import { Button, Modal } from "react-bootstrap";
import './ModalProject.css'
import { useTranslation } from 'react-i18next'

// Normalize images: support both legacy strings and { src, caption } objects.
function normalizeImages(images) {
    return (images || []).map((im) =>
        typeof im === "string" ? { src: im, caption: null } : im
    );
}

function hostnameOf(url) {
    try {
        return new URL(url).hostname.replace(/^www\./, "");
    } catch {
        return url;
    }
}

export default function ModalProject({ data, show, onHide }) {
    const [t] = useTranslation("global")

    const images = normalizeImages(data.images);
    const links = data.links || [];

    // Map both new case-study fields and legacy fields into one unified layout,
    // so every project modal looks the same. Missing sections simply don't render.
    const overview = data.context || data.description;
    const processSteps = data.process && data.process.length ? data.process : null;
    const processText = !processSteps ? data.whatIdo : null;
    const extraLinks = links.slice(1); // first link becomes the header "View live" CTA

    return (
        <Modal show={show} onHide={onHide} dialogClassName="modal-project"
            aria-labelledby="example-custom-modal-styling-title">
            <Modal.Header closeButton>
                <Modal.Title id="example-custom-modal-styling-title">{data.name}</Modal.Title>
            </Modal.Header>

            <Modal.Body className="show-grid">
                <article className="case-study">
                    <header className="case-head">
                        {data.tecnologies && data.tecnologies.length > 0 && (
                            <ul className="case-chips" aria-label={t("projectsModal.tech")}>
                                {data.tecnologies.map((el, index) => (
                                    <li key={index} className="case-chip">{el}</li>
                                ))}
                            </ul>
                        )}
                        <div className="case-head__meta">
                            {data.date && <span className="case-date">{data.date}</span>}
                            {links.length > 0 && (
                                <a className="case-live" href={links[0]} target="_blank" rel="noreferrer">
                                    {t("projectsModal.viewLive")} ↗
                                </a>
                            )}
                        </div>
                    </header>

                    <div className="case-body">
                        {overview && (
                            <section className="case-section">
                                <h3>{t("projectsModal.context")}</h3>
                                <p>{overview}</p>
                            </section>
                        )}
                        {data.challenge && (
                            <section className="case-section">
                                <h3>{t("projectsModal.challenge")}</h3>
                                <p>{data.challenge}</p>
                            </section>
                        )}
                        {processSteps && (
                            <section className="case-section">
                                <h3>{t("projectsModal.process")}</h3>
                                <ul className="case-list">
                                    {processSteps.map((step, index) => (
                                        <li key={index}>{step}</li>
                                    ))}
                                </ul>
                            </section>
                        )}
                        {processText && (
                            <section className="case-section">
                                <h3>{t("projectsModal.process")}</h3>
                                <p>{processText}</p>
                            </section>
                        )}
                    </div>

                    {images.length > 0 && (
                        <div className="case-gallery">
                            {images.map((im, index) => (
                                <figure className="case-shot" key={index}>
                                    <a href={im.src} target="_blank" rel="noreferrer"
                                        aria-label={im.caption || t("a11y.screenshot", { name: data.name, index: index + 1 })}>
                                        <img
                                            src={im.src}
                                            alt={im.caption || t("a11y.screenshot", { name: data.name, index: index + 1 })}
                                            loading="lazy"
                                            decoding="async"
                                        />
                                    </a>
                                    {im.caption && <figcaption>{im.caption}</figcaption>}
                                </figure>
                            ))}
                        </div>
                    )}

                    {(data.result || extraLinks.length > 0) && (
                        <section className="case-section case-result">
                            {data.result && (
                                <>
                                    <h3>{t("projectsModal.result")}</h3>
                                    <p>{data.result}</p>
                                </>
                            )}
                            {extraLinks.length > 0 && (
                                <ul className="list-links">
                                    {extraLinks.map((el, index) => (
                                        <li key={index}>
                                            <a href={el} target="_blank" rel="noreferrer">{hostnameOf(el)} ↗</a>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </section>
                    )}
                </article>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary" onClick={onHide}>
                    {t("projectsModal.close")}
                </Button>
            </Modal.Footer>
        </Modal>
    )
}
