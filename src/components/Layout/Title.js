import React from "react";
import { Inzo } from "../../../public/images";
import Image from "next/image";
const Title = ({
  title1,
  title2,
  className = "",
  title1Color,
  title2Color,
  classNameImg,
  img,
}) => {
  return (
    <div
      className={`relative w-full bg-transparent flex justify-center items-center text-center pt-8 ${className}`}
    >
      <Image
        src={img ? img : Inzo}
        className={`image-mask w-[140px] h-[50px] max-sm:w-[100px] max-sm:h-[35px] ${classNameImg}`}
        alt="inzo"
      />
      <div className="absolute top-[65px] max-sm:!top-[55px] flex gap-2 text-5xl max-md:text-4xl  max-sm:!text-2xl  font-bold">
        <h1 className={`text-secondary font-extrabold   ${title1Color}`}>
          {title1}
        </h1>
        <h1 className={`text-white font-extrabold  ${title2Color}`}>
          {title2}
        </h1>
      </div>
    </div>
  );
};

export default Title;
