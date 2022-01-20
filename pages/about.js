import MainComponent from "../components/MainComponent";

function About() {
  return (
    <MainComponent title="Обо мне">
      <div className="px-8 pt-16 pb-10 md:space-x-6 space-y-6 md:flex ">
        <img
          src="/leME.webp"
          className="md:w-auto md:h-[400px] mx-auto rounded-xl"
          alt="my pic"
          width="450"
          height="450"
        />

        <div className="space-y-2 text-base lg:text-lg xl:text-xl font-[Raleway300]">
          <h1>Меня зовут Илья.</h1>
          <p>
            Уже более года изучаю JavaScript и всё что с ним связано. Стремлюсь
            стать профессиональным разработчиком и мастером своего дела.
            Постоянно учусь новому, пытаюсь писать код по-разному, развиваюсь. В
            общем, не стою на месте.
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
