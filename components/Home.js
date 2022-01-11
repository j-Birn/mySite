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

      <h2>Мои навыки</h2>

      <div className="m-4 grid grid-cols-3 gap-4">
        <div className="w-25 h-10 bg-sky-400">HTML/CSS</div>
        <div className="w-25 h-10 bg-indigo-900">Responsive,Flex,Grid</div>
        <div className="w-25 h-10 bg-gray-500">ECMAScript 6</div>
        <div className="w-25 h-10 bg-lime-400">React / Next JS </div>
        <div className="w-25 h-10 bg-green-800"> Vue Vue X</div>
        <div className="w-25 h-10 bg-pink-500">Git</div>
      </div>
    </div>
  );
}

export default Home;
