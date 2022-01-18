import Image from "next/image";
import MainComponent from "../components/MainComponent";
import leME from "../public/leME.jpeg";

function About() {
  return (
    <MainComponent title="Обо мне">
      <div className="my-14 space-x-4 space-y-4 pl-6 pr-10 grid grid-rows-2 tablet:grid-cols-2 tablet:grid-rows-1">
        <div className="flex justify-center items-center tablet:justify-end">
          <Image
            src={leME}
            width="250px"
            height="250px"
            className="rounded-xl"
            layout="fixed"
          />
        </div>
        <div className="text-[10px] sm:text-[14px] space-y-2 font-[Raleway300]">
          <h1>Меня зовут Илья.</h1>
          <p>
            Уже более года изучаю JavaScript и всё что с ним связано. Стремлюсь
            стать профессиональным разработчиком и мастером своего дела.
            Постоянно учусь новому, пытаюсь писать код по-разному, развиваюсь. В
            общем, не стою на месте (потому что лежу).
          </p>
          <p>
            В разработке отдаю предпочтение относительно простым и понятным, но
            при этом удобным и красивым дизайнам интерфейсов. Пользуюсь
            проверенными временем решениями в связке с новыми технологиями.
          </p>
          <p>
            Пока не учусь / не кодю, увлекаюсь видеоиграми, читаю всё от
            комиксов до классиков философии, готовлю вкусняхи&#127856;
          </p>
        </div>
      </div>
    </MainComponent>
  );
}

export default About;
