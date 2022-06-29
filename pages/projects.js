import { useTranslation } from "react-i18next";
import MainComponent from "../components/MainComponent";

function Projects() {
  const { t } = useTranslation();

  return (
    <MainComponent title={t("nav.prj")}>
      <div className="flex flex-col space-y-16 justify-center items-center pt-16 px-4">
        <h1 className="text-2xl lg:text-4xl underline underline-offset-4 decoration-indigo-500">
          {t("projects.petz")}
        </h1>

        <div className="flex flex-col items-start space-y-6">
          <div className="flex md:flex-row flex-col space-x-6 space-y-6 justify-center items-center px-4">
            <img
              width="350"
              height="350"
              className="md:w-auto md:h-[250px] mx-auto rounded-xl"
              src="/weather.webp"
              alt="#"
            />
            <p className="text-xl">
              <span>{t("projects.Prj.weather.text")}</span>
              <br /> <br />
              source:{" "}
              <a
                className="text-indigo-500"
                href="https://github.com/j-Birn/weather"
                target="_blank"
              >
                https://github.com/j-Birn/weather
              </a>
            </p>
          </div>
          <div className="flex md:flex-row flex-col space-x-6 space-y-6 justify-center items-center px-4">
            <img
              width="350"
              height="350"
              className="md:w-auto md:h-[250px] mx-auto rounded-xl"
              src="/hulu.webp"
              alt="#"
            />
            <p className="text-xl">
              <span>{t("projects.Prj.hulu.text")}</span> <br /> <br /> source:{" "}
              <a
                className="text-indigo-500"
                href="https://github.com/j-Birn/Hulu-clone"
                target="_blank"
              >
                https://github.com/j-Birn/Hulu-clone
              </a>
            </p>
          </div>
        </div>

        <h2 className="text-sm lg:text-2xl pb-6">
          {t("projects.moSiris")} &#128568;
        </h2>
      </div>
    </MainComponent>
  );
}

export default Projects;
