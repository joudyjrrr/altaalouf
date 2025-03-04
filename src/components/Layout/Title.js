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
  img
}) => {
  return (
    <div className={`relative w-full bg-transparent flex justify-center items-center text-center pt-8 ${className}`}>
      <Image
        src={img ? img : Inzo}
        width={140}
        height={50}
        className={`image-mask ${classNameImg}`}
        alt="inzo"
      />
      <div className="absolute top-[65px] max-sm:!top-[75px] flex gap-2 text-5xl max-md:text-4xl  max-sm:!text-2xl  font-bold">  
        <h1 className={`text-secondary    ${title1Color}`}>{title1}</h1>
        <h1 className={`text-white  ${title2Color}`}>{title2}</h1>
      </div>
    </div>
  );
};

export default Title;
