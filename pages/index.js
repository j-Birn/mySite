import { useTranslation } from "react-i18next";
import Home from "../components/Home";
import MainComponent from "../components/MainComponent";

export default function Main() {
  const { t } = useTranslation();
  return (
    <MainComponent title={t("nav.mainPage")}>
      <Home />
    </MainComponent>
  );
}
