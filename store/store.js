import { IoGitBranchOutline, IoImages, IoLogoReact } from "react-icons/io5";
import { SiTypescript, SiJavascript, SiRedux, SiSass } from "react-icons/si";
import { CgTemplate } from "react-icons/cg";

export const infoIcons = [
  <SiJavascript className="w-12 h-12" />,
  <SiTypescript className="w-12 h-12" />,
  <IoLogoReact className="w-12 h-12" />,
  <SiRedux className="w-12 h-12" />,
  <CgTemplate className="w-12 h-12" />,
  <IoImages className="w-12 h-12" />,
  <SiSass className="w-12 h-12" />,
  <IoGitBranchOutline className="w-12 h-12" />,
];

export const ruInfoBlocks = [
  {
    title: "JavaScript (ES6+)",
    text: "Пишу качественный код, применяя различные новшества языка и современные подходы к разработке. ",
  },
  {
    title: "TypeScript",
    text: "Использую преимущества статической типизации для избежания ошибок и упрощения взаимодействия с кодом.",
  },
  {
    title: "React | Next JS",
    text: "Веду разработку на базе фреймворков реакт и некст, с применением хуков, фунциональных компонентов и серверного рендеринга. ",
  },
  {
    title: "Стейт-менеджеры",
    text: "Для приложений с большим объёмом клиентских данных использую продвинутые стейт-менеджеры.",
  },
  {
    title: "Responsive design",
    text: "Делаю вёрстку адаптивной и отзывчивой, так чтобы каждый пользователь мог комфортно взаимодействовать с интерфейсом.",
  },
  {
    title: "UI библиотеки",
    text: "Применяю в работе различные ui-библиотеки и дизайн-системы, чтобы пользовательский интерфейс был современным и технологичным.",
  },
  {
    title: "SCSS | Tailwind Css",
    text: "В зависимости от стека, пишу стили с помощью продвинутого синтаксиса стилей или препроцессора.",
  },
  {
    title: "Git",
    text: "Как в личной, так и в командной работе использую в процессе разработки систему контроля версий.",
  },
];

export const engInfoBlocks = [
  {
    title: "JavaScript (ES6+)",
    text: "I write quality code using various language innovations and modern development approaches. ",
  },
  {
    title: "Typescript",
    text: "I take advantage of static typing to avoid bugs and make code easier to interact with.",
  },
  {
    title: "React | Next JS",
    text: "I am developing on the basis of the React and Next JS frameworks, using hooks, functional components and server-side rendering. ",
  },
  {
    title: "State managers",
    text: "For applications with a large amount of client data, I use advanced state managers.",
  },
  {
    title: "Responsive design",
    text: "I make the layout adaptive and responsive so that each user can comfortably interact with the interface.",
  },
  {
    title: "UI Libraries",
    text: "I use various ui-libraries and design systems in my work to make the user interface modern and technologically advanced.",
  },
  {
    title: "SCSS | Tailwind Css",
    text: "Depending on the stack, I style using advanced style syntax or a preprocessor.",
  },
  {
    title: "Git",
    text: "In both personal and team work, I use version control during development.",
  },
];

export const ruAboutMe = {
  header: "Меня зовут Илья",
  text: {
    part1: `Уже более двух лет я разрабатываю сайты и приложения на React и Next JS. И
      пусть я не так давно работаю в сфере IT, с
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
    part1: `For more than two years I have been developing websites and applications using React and Next JS.
      Even though I haven’t been working in the IT field for very long,
      I can confidently say that I found a job to my liking. Сode for me is not
      only a hobby and a way to earn money, but also a creative path of
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
