import React from "react";
import { Inzo } from "../../../public/images"
import Image from "next/image";
const Title = ({ title1, title2, className = "" }) => {
  return (
    <div className="relative w-full bg-transparent flex justify-center items-center text-center pt-8">
      <Image src={Inzo} width={150} height={50} className="" alt="inzo" />
      <div className="absolute top-[55px] flex gap-2 text-5xl font-bold">  <h1 className="text-secondary">{title1}</h1><h1 className="text-white">{title2}</h1></div>
    </div>
  );
};

export default Title;
