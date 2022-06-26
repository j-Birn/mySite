import i18next from "i18next";
import { useTranslation } from "react-i18next";
import { ruInfoBlocks } from "../store/store";

function Home() {
  const { t } = useTranslation();
  let infoBlocks = i18next.t("infoBlocks", { returnObjects: true });

  return (
    <div className="px-12 py-8">
      <div className="mt-10">
        <h1 className="font-[RimmaSans] text-3xl md:text-6xl lg:text-7xl text-center">
          {t("titles.dev")}
        </h1>
        <p className="mt-2 text-center text-indigo-500 text-2xl md:text-3xl lg:text-4xl font-[FiraCode]">
          {t("titles.spec")}
        </p>
      </div>

      <h2 className="text-center text-4xl md:text-5xl lg:text-6xl mt-12 mb-8 font-[FiraCode]">
        {t("titles.skilz")}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-3 ">
        {infoBlocks.map((item, index) => (
          <div key={index} className="bg-gray-800 px-5 py-4 rounded-md">
            <div className="flex space-x-2 items-center pb-1 text-2xl sm:text-4xl">
              {ruInfoBlocks[index].icon}
              <p className="font-[Buyan]">{item.title}</p>
            </div>
            <p className="font-[Raleway300] text-base sm:text-xl">
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
