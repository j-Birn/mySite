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
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
            ></path>
          </svg>
          <p>HTML / CSS</p>
        </div>
        <div className="bg-gray-800 p-2 text-sm rounded-md">
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
            ></path>
          </svg>
          <p>Flex / Grid</p>
        </div>
        <div className="bg-gray-800 p-2 text-sm rounded-md">
          <p>ECMAScript 6</p>
        </div>
        <div className="bg-gray-800 p-2 text-sm rounded-md">
          React / Next JS
        </div>
        <div className="bg-gray-800 p-2 text-sm rounded-md"> Vue / Vue X</div>
        <div className="bg-gray-800 p-2 text-sm rounded-md">Git</div>
      </div>
    </div>
  );
}

export default Home;
