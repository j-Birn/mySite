import { IoGitBranchOutline, IoLogoReact } from "react-icons/io5";
import { SiTypescript, SiJavascript, SiRedux } from "react-icons/si";
import { CgTemplate } from "react-icons/cg";

export const ruInfoBlocks = [
  {
    icon: <SiJavascript className="w-12 h-12" />,
    title: "JavaScript (ES6+)",
    text: "Пишу качественный код, применяя различные новшества языка и современные подходы к разработке. ",
  },
  {
    icon: <SiTypescript className="w-12 h-12" />,
    title: "TypeScript",
    text: "Использую преимущества статической типизации для избежания ошибок и упрощения взаимодействия с кодом.",
  },
  {
    icon: <IoLogoReact className="w-12 h-12" />,
    title: "React",
    text: "Веду разработку на базе фреймворка реакт, с применением хуков и фунциональных компонентов. ",
  },
  {
    icon: <SiRedux className="w-12 h-12" />,
    title: "Redux (Toolkit)",
    text: "Для больших проектов, а так же для приложений с большим объёмом данных использую продвинутый стейт-менеджер.",
  },
  {
    icon: <CgTemplate className="w-12 h-12" />,
    title: "Responsive design",
    text: "Делаю вёрстку адаптивной и отзывчивой, так чтобы каждый пользователь мог комфортно взаимодействовать с интерфейсом.",
  },
  {
    icon: <IoGitBranchOutline className="w-12 h-12" />,
    title: "Git",
    text: "Использую в процессе разработки систему контроля версий.",
  },
];

export const engInfoBlocks = [
  {
    icon: <SiJavascript className="w-12 h-12" />,
    title: "JavaScript (ES6+)",
    text: "I write quality code using various language innovations and modern development approaches. ",
  },
  {
    icon: <SiTypescript className="w-12 h-12" />,
    title: "Typescript",
    text: "I take advantage of static typing to avoid bugs and make code easier to interact with.",
  },
  {
    icon: <IoLogoReact className="w-12 h-12" />,
    title: "React",
    text: "I am developing on the basis of the React framework, using hooks and functional components. ",
  },
  {
    icon: <SiRedux className="w-12 h-12" />,
    title: "Redux (Toolkit)",
    text: "For large projects, as well as for applications with a large amount of data, I use an advanced state manager.",
  },
  {
    icon: <CgTemplate className="w-12 h-12" />,
    title: "Responsive design",
    text: "I make the layout adaptive and responsive so that each user can comfortably interact with the interface.",
  },
  {
    icon: <IoGitBranchOutline className="w-12 h-12" />,
    title: "Git",
    text: "Using a version control system during development.",
  },
];

export const ruAboutMe = {
  header: "Меня зовут Илья",
  text: {
    part1: `Уже более года я разрабатываю сайты и приложения на JavaScript. И
      пусть это только начало моего профессионального пути в сфере IT, с
      уверенностью могу сказать, что я нашёл дело по душе. Код для меня не
      только хобби и способ заработка, но и путь творческого
      самовыражения.`,

    part2: `Как и в любом деле, очень важно не останавливаться на достигнутом и
      двигаться вперёд. Поэтому я стараюсь приобретать много ценного опыта
      и знаний как от коллег по цеху, так и из различных источников
      информации. Постоянно учусь новому, пробую писать код по-разному,
      развиваюсь. В общем, вовсю стремлюсь стать крутым разработчиком и
      мастером своего дела.`,

    part3: `В разработке отдаю предпочтение относительно простым и понятным, но
      при этом искусным и технологичным решениям. Создаю код лаконичным и
      производительным, а дизайн интерфейса стильным и удобным для
      пользователя. Как говорится, keep it simple stupid.`,

    part4: `В свободное от кода время, увлекаюсь видеоиграми, читаю всё от
      комиксов до классиков философии, готовлю вкусняхи`,
  },
};

export const engAboutMe = {
  header: "My name is Ilija",
  text: {
    part1: `For more than a year I have been developing websites and applications in JavaScript. And
      even though this is only the beginning of my professional path in IT,
      I can confidently say that I found something to my liking. Code for me is not
      only a hobby and a way of earning money, but also a way of using my creativity and
      self-expression.`,

    part2: `As in any business, it is very important not to stop and
      move forward. Therefore, I try to gain a lot of valuable experience
      and knowledge both from colleagues and from various sources of
      information. I constantly learn new things, trying to write code in different ways,
      self-develop. In general, with might and main I strive to become a cool developer and
      a master of his craft.`,

    part3: `In development, I prefer relatively simple and understandable, but
      at the same time skillful and technological solutions. I create code concise and
      productive, and the interface design is stylish and user-friendly. As they say, keep it simple stupid.`,

    part4: `In my free time, I am fond of video games, read everything from
      comics to the classics of philosophy, cook yummies`,
  },
};

export const ruProjects = {
  weather: {
    text: ` Приложение погоды. Есть смена темы и выбор города. Подгрузка
    данных о погоде реализована с помощью API. Тема хранится в local
    storage.`,
  },
  agency: {
    text: `Сайт-лендинг агентства разработки digital решений. Написан на React и SCSS с разделением на компоненты.`,
  },
  movies: {
    text: `Приложение информации о фильмах. Информация берется из бесплатной базы OMDB. На каждый поисковый запрос приходит до 10 фильмов или сериалов. По клику можно открыть подробную информацию.`,
  },
};
export const engProjects = {
  weather: {
    text: `Weather app. There are a change of the theme and a choice of city. Loading
    weather data is implemented using the API. The theme is stored in local
    storage.`,
  },
  agency: {
    text: `Landing page of a digital solutions development agency. Written in React and SCSS with component separation.`,
  },
  movies: {
    text: `
    Movie information app. The information is taken from the free OMDB database. Up to 10 films or series come up for each search query. Click to open detailed information.`,
  },
};
