import MainComponent from "../components/MainComponent";

function Projects() {
  return (
    <MainComponent title="Проекты">
      <div className="flex flex-col space-y-16 justify-center items-center pt-16">
        <h1 className="text-2xl lg:text-4xl underline underline-offset-4 decoration-indigo-500">
          Мои пэты:
        </h1>

        <div className="flex flex-col items-start space-y-6">
          {/* container */}
          <div className="flex md:flex-row flex-col space-x-6 space-y-6 justify-center items-center px-4">
            <img
              width="350"
              height="350"
              className="md:w-auto md:h-[250px] mx-auto rounded-xl"
              src="/weather.webp"
              alt="#"
            />
            <p className="text-xl">
              Приложение погоды. Есть смена темы и выбор города. Подгрузка
              данных о погоде реализована с помощью API. Тема хранится в local
              storage.
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
              Приложение наподобие hulu или IMDB. Показывает популярные фильмы и
              сериалы по категориям. Все данные,в том числе превью-картинки,
              приходят с API. Реализован SSR. <br /> <br /> source:{" "}
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

        <h2 className="text-base lg:text-2xl pb-6">
          А что-то по-серьёзнее, пока в процессе разработки &#128568;
        </h2>
      </div>
    </MainComponent>
  );
}

export default Projects;
