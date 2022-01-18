import Head from "next/head";
import Link from "next/link";

function NotFound() {
  return (
    <>
      <Head>
        <title>Error-404</title>
      </Head>
      <div className="text-white min-h-screen py-16 bg-[#0a0713] ">
        <h1 className="text-center text-2xl font-[RimmaSans] mt-10">
          404 - Page not found
        </h1>
        <div className="flex justify-center items-center space-x-10 mt-10">
          <div className="font-[FiraCode]">
            <p>Эмм...</p>
            <p>Вы явно ошиблись адресом</p>
            <p>
              Идите-ка Вы
              <Link href="/">
                <a className="text-indigo-500"> на главную</a>
              </Link>
            </p>
          </div>
          <img
            className="w-[150px] tablet:w-[300px]"
            src="/alert.svg"
            alt="404"
          />
        </div>
      </div>
    </>
  );
}

export default NotFound;
