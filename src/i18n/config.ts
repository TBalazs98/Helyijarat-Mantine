import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslation from './locales/en/translation.json';
import huTranslation from './locales/hu/translation.json';

i18n
    .use(initReactI18next)
    .init({
        lng: 'hu', // if you're using a language detector, do not define the lng option
        debug: true,
        fallbackLng: 'hu',
        initImmediate: false,
        resources: {
            en: {
                translation: enTranslation,
            },
            hu: {
                translation: huTranslation,
            },
        }
    });

export  default i18n;
