import { IoLogoJavascript } from "react-icons/io5";
import { IoCodeSlash } from "react-icons/io5";
import { IoLogoReact } from "react-icons/io5";
import { IoGitBranchOutline } from "react-icons/io5";
import { HiOutlineTemplate } from "react-icons/hi";
import { FaVuejs } from "react-icons/fa";

function Home() {
  return (
    <div className="px-12">
      <div className="mt-10">
        <h1 className="font-[RimmaSans] text-lg sm:text-2xl md:text-4xl text-center">
          WEB-разработчик
        </h1>
        <p className="mt-1 text-center text-indigo-500 text-sm sm:text-base md:text-xl font-[FiraCode]">
          Junior JS Developer
        </p>
      </div>

      <h2 className="text-center text-lg sm:text-xl md:text-3xl mt-12 mb-8 font-[FiraCode]">
        Development Skills
      </h2>

      <div className="m-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-3 ">
        <div className="bg-gray-800 px-4 py-2 rounded-md">
          <div className="flex space-x-2 items-center pb-1 text-base sm:text-lg">
            <IoCodeSlash className="w-4 h-4" />
            <p className="font-[Buyan]">HTML / CSS</p>
          </div>
          <p className="font-[Raleway300] text-[10px] sm:text-xs">
            Понимание структуры WEB-страниц и функций HTML тэгов. Стилизация
            элементов с помощью CSS параметров, в том числе с использованием
            препроцессоров.
          </p>
        </div>
        <div className="bg-gray-800 px-4 py-2 rounded-md">
          <div className="flex space-x-2 items-center pb-1 text-base sm:text-lg">
            <HiOutlineTemplate className="w-4 h-4" />
            <p className="font-[Buyan]">Flex / Grid</p>
          </div>
          <p className="font-[Raleway300] text-[10px] sm:text-xs">
            Построение структуры приложения в соответствии с принципами
            responsive дизайна и адаптивной вёрстки.
          </p>
        </div>
        <div className="bg-gray-800 px-4 py-2 rounded-md">
          <div className="flex space-x-2 items-center pb-1 text-base sm:text-lg">
            <IoLogoJavascript className="w-4 h-4" />
            <p className="font-[Buyan]">JavaScript 6, 7+</p>
          </div>
          <p className="font-[Raleway300] text-[10px] sm:text-xs">
            Знание современного JavaScript и применение новшеств различных
            версий ECMAScript при написании кода.
          </p>
        </div>
        <div className="bg-gray-800 px-4 py-2 rounded-md">
          <div className="flex space-x-2 items-center pb-1 text-base sm:text-lg">
            <IoLogoReact className="w-4 h-4" />
            <p className="font-[Buyan]">React / Next JS</p>
          </div>
          <p className="font-[Raleway300] text-[10px] sm:text-xs">
            Разработка приложений на базе фреймворка Next и библиотеки React.
            Применение технологии SSR.
          </p>
        </div>
        <div className="bg-gray-800 px-4 py-2 rounded-md">
          <div className="flex space-x-2 items-center pb-1 text-base sm:text-lg">
            <FaVuejs className="w-4 h-4" />
            <p className="font-[Buyan]">Vue / VueX</p>
          </div>
          <p className="font-[Raleway300] text-[10px] sm:text-xs">
            Разработка с помощью фреймворка Vue. Работа с хранилищем данных
            VueX.
          </p>
        </div>
        <div className="bg-gray-800 px-4 py-2 rounded-md">
          <div className="flex space-x-2 items-center pb-1 text-base sm:text-lg">
            <IoGitBranchOutline className="w-4 h-4" />
            <p className="font-[Buyan]">Git</p>
          </div>
          <p className="font-[Raleway300] text-[10px] sm:text-xs">
            Использование в процессе разработки системы контроля версий.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
