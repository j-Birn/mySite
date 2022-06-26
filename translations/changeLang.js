import i18n from "./translation";

const changeLang = () => {
  if (i18n.language === "ru") {
    i18n.changeLanguage("en");
  } else {
    i18n.changeLanguage("ru");
  }
};

export default changeLang;
