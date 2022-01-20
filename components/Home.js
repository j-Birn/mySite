import {
  IoLogoJavascript,
  IoGitBranchOutline,
  IoLogoReact,
  IoCodeSlash,
} from "react-icons/io5";

import { HiOutlineTemplate } from "react-icons/hi";
import { SiNextdotjs } from "react-icons/si";

function Home() {
  return (
    <div className="px-12">
      <div className="mt-10">
        <h1 className="font-[RimmaSans] text-3xl md:text-6xl lg:text-7xl text-center">
          WEB-разработчик
        </h1>
        <p className="mt-2 text-center text-indigo-500 text-2xl md:text-3xl lg:text-4xl font-[FiraCode]">
          Junior JS Developer
        </p>
      </div>

      <h2 className="text-center text-4xl md:text-5xl lg:text-6xl mt-12 mb-8 font-[FiraCode]">
        Development Skills
      </h2>

      <div className="m-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-3 ">
        <div className="bg-gray-800 px-5 py-4 rounded-md">
          <div className="flex space-x-2 items-center pb-1 text-2xl sm:text-4xl">
            <IoCodeSlash className="w-12 h-12" />
            <p className="font-[Buyan]">HTML / CSS</p>
          </div>
          <p className="font-[Raleway300] text-base sm:text-xl">
            Понимание структуры WEB-страниц и функций HTML тэгов. Стилизация
            элементов с помощью CSS параметров, в том числе с использованием
            препроцессоров.
          </p>
        </div>
        <div className="bg-gray-800 px-5 py-4 rounded-md">
          <div className="flex space-x-2 items-center pb-1 text-2xl sm:text-4xl">
            <HiOutlineTemplate className="w-12 h-12" />
            <p className="font-[Buyan]">Flex / Grid</p>
          </div>
          <p className="font-[Raleway300] text-base sm:text-xl">
            Построение структуры приложения в соответствии с принципами
            responsive дизайна и адаптивной вёрстки.
          </p>
        </div>
        <div className="bg-gray-800 px-5 py-4 rounded-md">
          <div className="flex space-x-2 items-center pb-1 text-2xl sm:text-4xl">
            <IoLogoJavascript className="w-12 h-12" />
            <p className="font-[Buyan]">JavaScript 6, 7+</p>
          </div>
          <p className="font-[Raleway300] text-base sm:text-xl">
            Знание современного JavaScript и применение новшеств различных
            версий ECMAScript при написании кода.
          </p>
        </div>
        <div className="bg-gray-800 px-5 py-4 rounded-md">
          <div className="flex space-x-2 items-center pb-1 text-2xl sm:text-4xl">
            <IoLogoReact className="w-12 h-12" />
            <p className="font-[Buyan]">React</p>
          </div>
          <p className="font-[Raleway300] text-base sm:text-xl">
            Разработка приложений на базе фреймворка React.
          </p>
        </div>
        <div className="bg-gray-800 px-5 py-4 rounded-md">
          <div className="flex space-x-2 items-center pb-1 text-2xl sm:text-4xl">
            <SiNextdotjs className="w-12 h-12" />
            <p className="font-[Buyan]">Next JS</p>
          </div>
          <p className="font-[Raleway300] text-base sm:text-xl">
            Оптимизация разработки. Применение технологии SSR.
          </p>
        </div>
        <div className="bg-gray-800 px-5 py-4 rounded-md">
          <div className="flex space-x-2 items-center pb-1 text-2xl sm:text-4xl">
            <IoGitBranchOutline className="w-12 h-12" />
            <p className="font-[Buyan]">Git</p>
          </div>
          <p className="font-[Raleway300] text-base sm:text-xl">
            Использование в процессе разработки системы контроля версий.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
