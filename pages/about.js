import MainComponent from "../components/MainComponent";

function About() {
  return (
    <MainComponent title="Обо мне">
      <div className="flex flex-col tablet:flex-row p-8 space-x-4">
        <img
          className="w-24 h-24 mx-auto rounded-xl"
          src="/IMG_20256.jpg"
          alt="le me"
          width="250"
          height="250"
        />
        <p className="text-[10px] sm:text-[14px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
          sapiente totam quae sequi, ab blanditiis inventore modi cum
          laudantium? Porro error delectus natus sequi facere quibusdam rerum
          officiis reiciendis labore?
        </p>
      </div>
    </MainComponent>
  );
}

export default About;
