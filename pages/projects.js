import { useTranslation } from "react-i18next";
import MainComponent from "../components/MainComponent";

function Projects() {
  const { t } = useTranslation();

  return (
    <MainComponent title={t("nav.prj")}>
      <div className="flex flex-col space-y-16 justify-center items-start pt-16 px-4">
        <h1 className="self-center text-2xl lg:text-4xl underline underline-offset-4 decoration-indigo-500">
          {t("projects.petz")}
        </h1>

        <div className="flex flex-col items-start space-y-6">
          <div className="flex md:flex-row flex-col space-x-6 space-y-6 justify-center items-center px-4">
            <img
              width="350"
              height="350"
              className="md:w-auto md:h-[250px] mx-auto rounded-xl"
              src="/weather.png"
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
              <br /> <br />
              site:{" "}
              <a
                className="text-indigo-500"
                href="https://weather-vercel-five.vercel.app/"
                target="_blank"
              >
                https://weather-vercel-five.vercel.app/
              </a>
            </p>
          </div>
        </div>

        <div className="flex flex-col items-start space-y-6">
          <div className="flex md:flex-row flex-col space-x-6 space-y-6 justify-center items-center px-4">
            <img
              width="350"
              height="350"
              className="md:w-auto md:h-[250px] mx-auto rounded-xl"
              src="/agency.png"
              alt="#"
            />
            <p className="text-xl">
              <span>{t("projects.Prj.agency.text")}</span>
              <br /> <br />
              source:{" "}
              <a
                className="text-indigo-500"
                href="https://github.com/j-Birn/agency-website"
                target="_blank"
              >
                https://github.com/j-Birn/agency-website
              </a>
              <br /> <br />
              site:{" "}
              <a
                className="text-indigo-500"
                href="https://agency-website-vercel.vercel.app/"
                target="_blank"
              >
                https://agency-website-vercel.vercel.app/
              </a>
            </p>
          </div>
        </div>

        <h2 className="self-center text-sm text-center lg:text-2xl pb-6">
          {t("projects.moSiris")} &#128568;
        </h2>
      </div>
    </MainComponent>
  );
}

export default Projects;
