import { useTranslation } from "react-i18next";
import MainComponent from "../components/MainComponent";

function About() {
  const { t } = useTranslation();

  return (
    <MainComponent title={t("nav.about")}>
      <div className="px-8 pt-16 pb-10 md:space-x-6 space-y-6 md:flex justify-center items-center">
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
          <p>
            Уже более года я разрабатываю сайты и приложения на JavaScript. И
            пусть это только начало моего профессионального пути в сфере IT, с
            уверенностью могу сказать, что я нашёл дело по душе. Код для меня не
            только хобби и способ заработка, но и путь творческого
            самовыражения.
          </p>
          <p>
            Как и в любом деле, очень важно не останавливаться на достигнутом и
            двигаться вперёд. Поэтому я стараюсь приобретать много ценного опыта
            и знаний как от коллег по цеху, так и из различных источников
            информации. Постоянно учусь новому, пробую писать код по-разному,
            развиваюсь. В общем, вовсю стремлюсь стать крутым разработчиком и
            мастером своего дела.
          </p>
          <p>
            В разработке отдаю предпочтение относительно простым и понятным, но
            при этом искусным и технологичным решениям. Создаю код лаконичным и
            производительным, а дизайн интерфейса стильным и удобным для
            пользователя. Как говорится, keep it simple stupid.
          </p>
          <p>
            В свободное от кода время, увлекаюсь видеоиграми, читаю всё от
            комиксов до классиков философии, готовлю вкусняхи&#127856;
          </p>
        </div>
      </div>
    </MainComponent>
  );
}

export default About;
