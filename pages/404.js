import Head from "next/head";
import Link from "next/link";

function NotFound() {
  return (
    <>
      <Head>
        <title>Error-404</title>
      </Head>
      <div className="text-white min-h-screen py-16 bg-[#0a0713] ">
        <h1 className="text-center text-4xl lg:text-7xl font-[RimmaSans] mt-10">
          404 - Page not found
        </h1>
        <div className="flex flex-col lg:flex-row justify-center items-center space-x-10 space-y-10 mt-14 px-16">
          <div className="font-[FiraCode] text-2xl lg:text-5xl space-y-3">
            <p>Go to</p>
            <p>
              <Link href="/">
                <a className="text-indigo-500">main page</a>
              </Link>
            </p>
          </div>
          <img className="w-[300px] lg:w-[500px]" src="/alert.svg" alt="404" />
        </div>
      </div>
    </>
  );
}

export default NotFound;
