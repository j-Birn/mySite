import { useTranslation } from "react-i18next";
import MainComponent from "../components/MainComponent";

function About() {
  const { t } = useTranslation();

  return (
    <MainComponent title={t("nav.about")}>
      <div className="px-8 pt-36 pb-10 md:space-x-6 space-y-6 md:flex justify-center items-center">
        <img
          src="/leME.webp"
          className="md:w-auto md:h-[400px] mx-auto rounded-full"
          alt="my pic"
          width="450"
          height="450"
        />

        <div className="space-y-2 text-base lg:text-lg xl:text-xl font-[Raleway300]">
          <h1 className="underline underline-offset-4 decoration-indigo-500">
            {t("about.header")}
          </h1>
          <p>{t("about.text.part1")}</p>
          <p>{t("about.text.part2")}</p>
          <p>{t("about.text.part3")}</p>
          <p>{t("about.text.part4")}&#127856;</p>
        </div>
      </div>
    </MainComponent>
  );
}

export default About;
