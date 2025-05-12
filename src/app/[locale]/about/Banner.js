import React from "react";
import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";
import { aboutBanner } from "../../../../public/images";

const Banner = () => {
  const t = useTranslations("about");
  const locale = useLocale();
  const isEnglish = locale === "en";

  return (
    <div className="w-full h-screen relative overflow-hidden pt-20 mt-[80px]">
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <Image
          src={aboutBanner}
          alt={""}
          fill
          className={`object-cover transition-opacity duration-1000 ease-in-out  ${
            isEnglish ? "scale-x-[-1]" : ""
          }`}
        />

        <div className="absolute top-0 z-[10] left-0 w-full h-full bg-gradient-to-b from-black/60 to-transparent" />
      </div>
      <div className="relative z-20 flex flex-col justify-center items-center h-full">
        <div className="flex items-start text-9xl max-sm:text-5xl max-md:text-6xl  font-semibold max-w-full  justify-center  h-full  px-6 max-md:px-16 text-white">
       {t("title2")}
        </div>
      </div>
    </div>
  );
};

export default Banner;
