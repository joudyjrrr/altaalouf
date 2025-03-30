"use client";
import React, { useRef } from "react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Image from "next/image";
import {
  western,
  voucherry,
  visa,
  transferByEx,
  tether,
  pmony,
  payeer,
  masterCard,
  bitcoine,
  ethereum,
  MobDwMethods,
} from "../../../public/images";
import Title from "./Title";

let payArr = [
  [tether, western, "md:mb-20", "md:ms-10"],
  [payeer, ethereum, "md:mt-16", "md:mt-10"],
  [transferByEx, voucherry, "", " md:mt-5 md:mb-5 md:me-5 md:-translate-x-7"],
  [visa, pmony, "md:mt-8", "md:mt-6 md:me-5 md:-translate-x-14"],
  [bitcoine, masterCard, "md:mb-24", "md:mt-3 md:-translate-x-10"],
];
const DwMethods = () => {
  return (
    <div className="relative pt-12  bg-DwMethods_Bg bg-center h-fit md:h-screen  max-md:pb-8">
      <Title
        title1={`Deposit & Withdrawal`}
        title2={`Methods`}
        title1Color={"secondary"}
        title2Color={"white"}
      />

      <div className="relative w-[85%] md:w-[80%] h-[90%] md:h-[70%] bg-contain bg-no-repeat mt-10 mx-auto">
        <div className="hidden  md:grid grid-cols-1 md:grid-cols-5 gap-3 md:gap-6 md:ps-14">
          {payArr.map(([img1, img2, containerClass, img2Class], index) => (
            <div
              key={index}
              className={`flex md:flex-col justify-around md:justify-center ${containerClass}`}
            >
              <Image
                src={img1}
                alt=""
                className={` 
                   hover:shadow-[0_0_15px_1px_#00BEFE] w-32 h-32  hover:scale-105 transition-all duration-500 rounded-full `}
              />
              <Image
                src={img2}

                alt=""
                className={`w-32 h-32 mt-8 rounded-full hover:shadow-[0_0_15px_1px_#00BEFE] hover:scale-105 transition-all duration-500 ${img2Class}`}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="md:hidden bg-MobDwMethods_Bg bg-contain bg-center bg-no-repeat w-full h-[335px] mx-auto"></div>
      <div className="md:hidden absolute -bottom-20 left-0 right-0 mx-auto h-[40px] w-[1000px] bg-gradient-to-l from-[#3f9ce9] to-[#00C0FF] blur-[95px] z-30"></div>
    </div>
  );
};

export default DwMethods;
