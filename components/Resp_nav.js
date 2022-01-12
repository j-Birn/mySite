import Link from "next/link";
import { useState } from "react";

function Resp_nav() {
  const [menu, setMenu] = useState(false);

  return (
    <div>
      <button
        onClick={() => setMenu(!menu)}
        className="tablet:hidden px-4 py-2"
      >
        {menu ? (
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
        ) : (
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </div>
        )}
      </button>

      <div
        className={
          "absolute top-12 right-4 tablet:hidden " +
          (menu ? "fadeIn" : "fadeOut")
        }
      >
        <ul className=" bg-gray-800 rounded-md font-[Buyan]">
          <li className="hover:bg-gray-600 px-2 rounded-md transition-colors ease-in-out duration-500">
            <Link href="/">
              <a>Главная</a>
            </Link>
          </li>
          <li className="hover:bg-gray-600 px-2 rounded-md transition-colors ease-in-out duration-500">
            <Link href="/projects">
              <a>Проекты</a>
            </Link>
          </li>
          <li className="hover:bg-gray-600 px-2 rounded-md transition-colors ease-in-out duration-500">
            <Link href="/about">
              <a>Обо мне</a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Resp_nav;
