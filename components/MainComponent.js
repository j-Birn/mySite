import Head from "next/head";
import Avatar from "./Avatar";
import Nav from "./Nav";

function MainComponent({ children, title }) {
  return (
    <div className=" flex flex-col min-h-screen font-sans bg-[#0e141b] text-white">
      <Head>
        <title>{title}</title>
        <meta name="description" content="Frontend developer portfolio site" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <header className="container flex justify-between items-center mx-auto mt-4">
        <Avatar />
        <Nav />
      </header>

      <main className=" flex-grow">{children}</main>

      <footer>
        <div className="px-[45px] py-1 border-t border-gray-600 font-[Buyan]">
          <p className="text-gray-300 text-[9px]">© 2022 </p>
          <p className="text-gray-300 text-[9px]">Илья Мамедов</p>
        </div>
      </footer>
    </div>
  );
}

export default MainComponent;
