import Link from "next/link";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";
import Resp_nav from "./Resp_nav";

function Nav() {
  const router = useRouter();
  const { t } = useTranslation();

  return (
    <>
      <Resp_nav />

      <div className="hidden w-full md:block md:w-auto font-[Buyan]">
        <ul className="flex">
          <li>
            <Link href="/">
              <a
                className={
                  "px-2 text-3xl underline underline-offset-8 hover:decoration-indigo-500 transition-color ease-in-out duration-700 " +
                  (router.pathname == "/"
                    ? "decoration-indigo-500"
                    : "decoration-transparent")
                }
              >
                {t("nav.mainPage")}
              </a>
            </Link>
          </li>
          <li>
            <Link href="/projects">
              <a
                className={
                  "px-2 text-3xl underline underline-offset-8 hover:decoration-indigo-500 transition-color ease-in-out duration-700 " +
                  (router.pathname == "/projects"
                    ? "decoration-indigo-500"
                    : "decoration-transparent")
                }
              >
                {t("nav.prj")}
              </a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a
                className={
                  "px-2 text-3xl underline underline-offset-8 hover:decoration-indigo-500 transition-color ease-in-out duration-700 " +
                  (router.pathname == "/about"
                    ? "decoration-indigo-500"
                    : "decoration-transparent")
                }
              >
                {t("nav.about")}
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Nav;
