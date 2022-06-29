import Link from "next/link";
import { IoMenuOutline, IoCloseOutline } from "react-icons/io5";
import { motion, useCycle } from "framer-motion";
import { useTranslation } from "react-i18next";

function Resp_nav() {
  const { t } = useTranslation();
  const [menu, setMenu] = useCycle(false, true);
  const variants = {
    closed: {
      opacity: 0,
    },
    open: {
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.div initial={false} animate={menu ? "open" : "closed"}>
      <motion.button
        onClick={() => setMenu()}
        className="md:hidden absolute top-5 right-6 hover:text-indigo-500"
        whileTap={{ scale: 0.9 }}
      >
        {menu ? (
          <IoCloseOutline className="w-11 h-11" />
        ) : (
          <IoMenuOutline className="w-11 h-11" />
        )}
      </motion.button>

      <motion.div
        variants={variants}
        className={"absolute top-16 right-8 md:hidden"}
      >
        <ul className=" bg-gray-900 rounded-md font-[Buyan] text-3xl z-10">
          <li className="hover:bg-indigo-500 px-2 py-1 rounded-md transition-colors ease-in-out duration-500">
            <Link href="/">
              <a>{t("nav.mainPage")}</a>
            </Link>
          </li>
          <li className="hover:bg-indigo-500 px-2 py-1 rounded-md transition-colors ease-in-out duration-500">
            <Link href="/projects">
              <a>{t("nav.prj")}</a>
            </Link>
          </li>
          <li className="hover:bg-indigo-500 px-2 py-1 rounded-md transition-colors ease-in-out duration-500">
            <Link href="/about">
              <a>{t("nav.about")}</a>
            </Link>
          </li>
        </ul>
      </motion.div>
    </motion.div>
  );
}

export default Resp_nav;
