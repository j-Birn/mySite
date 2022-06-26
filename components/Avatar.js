import Image from "next/image";
import { useTranslation } from "react-i18next";

function Avatar() {
  const { t } = useTranslation();
  return (
    <div className="flex items-center space-x-3 ">
      <Image
        src="/IMG_20256.jpg"
        width={55}
        height={55}
        layout="fixed"
        className="rounded-full"
      />
      <span className="text-3xl font-[Buyan]">{t("name")}</span>
    </div>
  );
}

export default Avatar;
