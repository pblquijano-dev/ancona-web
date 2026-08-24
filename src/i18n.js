import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import esTranslation from './locales/es.json';
import enTranslation from './locales/en.json';

const resources = {
  es: {
    translation: esTranslation
  },
  en: {
    translation: enTranslation
  }
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'es',
  fallbackLng: 'es',
  interpolation: {
    escapeValue: false
  }
});

// Keep the html lang attribute in sync with current i18next language
if (typeof document !== 'undefined') {
  document.documentElement.lang = i18n.language || 'es';
  i18n.on('languageChanged', (lng) => {
    document.documentElement.lang = lng;
  });
}

export default i18n;
