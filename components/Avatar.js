import Image from "next/image";

function Avatar() {
  return (
    <div className="flex items-center space-x-2 p-1">
      <Image
        src="/IMG_20256.jpg"
        width={30}
        height={30}
        layout="fixed"
        className="rounded-full"
      />
      <span className="text-sm font-[Buyan]">Илья Мамедов</span>
    </div>
  );
}

export default Avatar;
