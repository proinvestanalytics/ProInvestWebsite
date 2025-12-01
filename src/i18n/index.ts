import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Import English translations
import enCommon from './locales/en/common.json';
import enHome from './locales/en/home.json';
import enTeamops from './locales/en/teamops.json';
import enProducts from './locales/en/products.json';
import enAbout from './locales/en/about.json';
import enContact from './locales/en/contact.json';

// Import French translations
import frCommon from './locales/fr/common.json';
import frHome from './locales/fr/home.json';
import frTeamops from './locales/fr/teamops.json';
import frProducts from './locales/fr/products.json';
import frAbout from './locales/fr/about.json';
import frContact from './locales/fr/contact.json';

const resources = {
  en: {
    common: enCommon,
    home: enHome,
    teamops: enTeamops,
    products: enProducts,
    about: enAbout,
    contact: enContact,
  },
  fr: {
    common: frCommon,
    home: frHome,
    teamops: frTeamops,
    products: frProducts,
    about: frAbout,
    contact: frContact,
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    defaultNS: 'common',
    ns: ['common', 'home', 'teamops', 'products', 'about', 'contact'],
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
      lookupLocalStorage: 'proinvest-language',
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
