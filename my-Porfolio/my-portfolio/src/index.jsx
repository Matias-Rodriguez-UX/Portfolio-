import React from 'react';
import ReactDOM from 'react-dom/client';
import i18next from 'i18next';
import { I18nextProvider } from 'react-i18next';

/* Las tres familias del sistema, servidas desde node_modules: sin request a
   un CDN y sin salto de fuente al cargar. Solo los pesos que se usan. */
import '@fontsource/space-grotesk/500.css';
import '@fontsource/space-grotesk/700.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/jetbrains-mono/400.css';
import '@fontsource/jetbrains-mono/500.css';

import './styles/index.css';
import App from './App';
import global_es from './translates/es/global.json';
import global_en from './translates/en/global.json';

i18next.init({
  interpolation: { escapeValue: false },
  lng: 'es',
  fallbackLng: 'es',
  resources: {
    es: { global: global_es },
    en: { global: global_en },
  },
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <App />
    </I18nextProvider>
  </React.StrictMode>,
);
