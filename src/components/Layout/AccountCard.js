import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";

const AccountCard = ({ img, dataArr }) => {
  const t = useTranslations()
  return (
    <div
      className="accounts-types-container w-fit mx-auto rounded-[40px] px-4 pt-0 pb-4 
     md:py-5 border border-gray-400 transition-all duration-600 ease-in-out md:h-[850px] h-[100vh]"
    >
      <div className="flex flex-col justify-center items-center ">
        {/* Render the image */}
        <Image
          placeholder="blur"
          alt=""
          src={img}
          className="max-w-none w-[275px] h-[275px] md:w-[350px] md:h-[350px] scale-125"
        />

        {/* Render the data array */}
        <div className="flex flex-col gap-2 text-[18px] leading-6 md:text-2xl justify-center items-center">
          {Object.entries(dataArr).map(([key, value], index, array) => (
            <div
              key={key}
              className={`flex items-center gap-2 pb-2 ${
                index !== array.length - 1 ? "border-b border-gray-50" : ""
              }`}
            >
              <p className="text-center">{t(value)}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AccountCard;
