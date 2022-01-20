import Image from "next/image";
import MainComponent from "../components/MainComponent";
import leME from "../public/leME.jpeg";

function About() {
  return (
    <MainComponent title="Обо мне">
      <div className="p-6 lg:p-16 space-x-6 space-y-4 flex flex-col lg:flex-row ">
        <div className="flex items-center justify-center">
          <Image
            src={leME}
            width="450px"
            height="450px"
            className="rounded-xl"
            layout="fixed"
          />
        </div>
        <div className="text-xl xl:text-2xl space-y-4 font-[Raleway300]">
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
