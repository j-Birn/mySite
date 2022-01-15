import Link from "next/link";

function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-between py-24 bg-gray-600">
      <div className="px-2">
        <h1 className="text-center">404 - Page not found</h1>
        <p>Эмм..</p>
        <p>Вы явно ошиблись адресом</p>
        <p>
          Идите-ка Вы
          <Link href="/">
            <a className="text-indigo-500"> на главную</a>
          </Link>
        </p>
      </div>
      <img className="w-[150px] tablet:w-[300px]" src="/alert.svg" alt="404" />
    </div>
  );
}

export default NotFound;
