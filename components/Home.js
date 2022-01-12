import { IoLogoJavascript } from "react-icons/io5";
import { IoCodeSlash } from "react-icons/io5";
import { IoLogoReact } from "react-icons/io5";
import { IoGitBranchOutline } from "react-icons/io5";
import { HiOutlineTemplate } from "react-icons/hi";
import { FaVuejs } from "react-icons/fa";

function Home() {
  return (
    <div>
      <div className="mt-10">
        <p>Привет, меня зовут Илья</p>
        <h1>Я WEB-разработчик</h1>
        <p>
          На данный момент, я Junior JS Developer, или просто джун. Более года
          вовсю изучаю javascipt, пишу код и стараюсь стать профессионалом в
          сфере веба. Хоть и новичек, зато толковый и со знанием дела.
        </p>
      </div>

      <h2 className="text-center my-4">Мои навыки</h2>

      <div className="m-4 grid grid-cols-2 tablet:grid-cols-3 gap-x-4 gap-y-3 font-[Buyan]">
        <div className="bg-gray-800 p-2 text-sm rounded-md">
          <IoCodeSlash className="w-4 h-4" />
          <p>HTML / CSS</p>
        </div>
        <div className="bg-gray-800 p-2 text-sm rounded-md">
          <HiOutlineTemplate className="w-4 h-4" />
          <p>Flex / Grid</p>
        </div>
        <div className="bg-gray-800 p-2 text-sm rounded-md">
          <IoLogoJavascript className="w-4 h-4" />
          <p>ECMAScript 6</p>
        </div>
        <div className="bg-gray-800 p-2 text-sm rounded-md">
          <IoLogoReact className="w-4 h-4" />
          React / Next JS
        </div>
        <div className="bg-gray-800 p-2 text-sm rounded-md">
          <FaVuejs className="w-4 h-4" />
          <p>Vue / Vue X</p>
        </div>
        <div className="bg-gray-800 p-2 text-sm rounded-md">
          <IoGitBranchOutline className="w-4 h-4" />
          <p>Git</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
