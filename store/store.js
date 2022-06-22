import { IoGitBranchOutline, IoLogoReact } from "react-icons/io5";
import { SiTypescript, SiJavascript, SiRedux } from "react-icons/si";
import { CgTemplate } from "react-icons/cg";

export const infoBlocks = [
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
