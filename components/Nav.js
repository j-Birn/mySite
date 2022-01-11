import Link from "next/link";
import { useRouter } from "next/router";
import Resp_nav from "./Resp_nav";

function Nav() {
  const router = useRouter();

  return (
    <>
      <Resp_nav />

      <div className="hidden w-full tablet:block tablet:w-auto font-[Buyan]">
        <ul className="flex ">
          <li>
            <Link href="/">
              <a
                className={
                  "px-2 underline underline-offset-[6px] hover:decoration-indigo-500 transition-color ease-in-out duration-700 " +
                  (router.pathname == "/"
                    ? "decoration-indigo-500"
                    : "decoration-transparent")
                }
              >
                Главная
              </a>
            </Link>
          </li>
          <li>
            <Link href="/projects">
              <a
                className={
                  "px-2 underline underline-offset-[6px] hover:decoration-indigo-500 transition-color ease-in-out duration-700 " +
                  (router.pathname == "/projects"
                    ? "decoration-indigo-500"
                    : "decoration-transparent")
                }
              >
                Проекты
              </a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a
                className={
                  "px-2 underline underline-offset-[6px] hover:decoration-indigo-500 transition-color ease-in-out duration-700 " +
                  (router.pathname == "/about"
                    ? "decoration-indigo-500"
                    : "decoration-transparent")
                }
              >
                Обо мне
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Nav;
