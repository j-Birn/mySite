import Image from "next/image";

function Avatar() {
  return (
    <div className="flex items-center space-x-3 ">
      <Image
        src="/IMG_20256.jpg"
        width={55}
        height={55}
        layout="fixed"
        className="rounded-full"
      />
      <span className="text-3xl font-[Buyan]">Илья Мамедов</span>
    </div>
  );
}

export default Avatar;
