import MainComponent from "../components/MainComponent";

function Projects() {
  return (
    <MainComponent title="Проекты">
      <div className="flex flex-col space-y-16 justify-center items-center pt-16">
        <h1 className="text-xl lg:text-4xl">
          Пока что, в процессе разработки &#128568;
        </h1>
        <h3 className="text-xl lg:text-2xl">*п.с. Этот сайт - мой проект )</h3>
      </div>
    </MainComponent>
  );
}

export default Projects;
