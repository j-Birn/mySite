import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { english } from "./locales/eng";
import { russian } from "./locales/ru";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: english,
    },
    ru: {
      translation: russian,
    },
  },
  lng: "ru",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
