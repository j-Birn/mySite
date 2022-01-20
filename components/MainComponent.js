import Head from "next/head";
import Avatar from "./Avatar";
import Nav from "./Nav";
import { IoLogoGithub } from "react-icons/io5";
import { IoMailOpen } from "react-icons/io5";
import { motion } from "framer-motion";

function MainComponent({ children, title }) {
  return (
    <div className=" flex flex-col min-h-screen font-sans bg-[#0a0713] text-white">
      <Head>
        <title>{title}</title>
        <meta name="description" content="Frontend developer portfolio site" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="shortcut icon" href="/IMG_20256.jpg" />
      </Head>

      <header className="flex justify-between px-16 items-center my-4 ">
        <Avatar />
        <Nav />
      </header>

      <main className=" flex-grow border-t border-gray-800">
        <motion.div
          initial="pageInitial"
          animate="pageAnimate"
          variants={{
            pageInitial: {
              y: 40,
              opacity: 0,
            },
            pageAnimate: {
              y: 0,
              opacity: 1,
              transition: {
                duration: 0.3,
                ease: "easeInOut",
              },
            },
          }}
        >
          {children}
        </motion.div>
      </main>

      <footer>
        <div className="flex justify-between items-center px-16 py-3 border-t border-gray-800 font-[Buyan]">
          <div>
            <p className="text-gray-300 text-base">© 2022 </p>
            <p className="text-gray-300 text-base">Илья Мамедов</p>
          </div>
          <div className="flex space-x-3">
            <a href="https://github.com/CurlyFury" target="_blank">
              <IoLogoGithub className="w-8 h-8 hover:text-indigo-500" />
            </a>
            <a href="mailto:nukawanderer@gmail.com">
              <IoMailOpen className="w-8 h-8 hover:text-indigo-500" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default MainComponent;
