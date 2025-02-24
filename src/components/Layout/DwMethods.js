"use client";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Button } from "../ui/button";
import Image from "next/image";
import { FaChevronRight } from "react-icons/fa";
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
} from "../../../public/images";
import Title from "./Title";
import Switch from "./Switch";

const RealAccountTypes = () => {
  return (
    <div className=" pt-12 bg-DwMethods_Bg h-screen ">
      <Title
        title1={`Deposit & Withdrawal`}
        title2={`Methods`}
        title1Color={"secondary"}
        title2Color={"white"}
      />

      <div className="relative w-[70%] h-[70%] bg-DwIcons_Bg bg-contain bg-no-repeat mt-10 mx-auto">
        {/* 
        <div
          className="absolute bottom-5 right-[20%] flex
          flex-col items-center justify-center w-28 h-28 "
        >
          <Image src={bitcoine} alt="" />
        </div>

        <div
          className="absolute bottom-12 left-[30%] flex
flex-col items-center justify-center w-28 h-28 "
        >
          <Image src={masterCard} alt="" />
        </div>
        <div
          className="absolute top-4 left-[40%] flex flex-col items-center
       justify-center w-28 h-28"
        >
          <Image src={western} alt="" />
        </div>
        <div
          className="absolute top-[25%] right-[-10px] flex flex-col
       items-center justify-center w-28 h-28 "
        >
          <Image src={voucherry} alt="" />
        </div>
        <div
          className="absolute bottom-[7rem] left-
      [1rem] flex flex-col items-center justify-center w-28 h-28 "
        >
          <Image src={transferByEx} alt="" />
        </div>
        <div
          className="absolute bottom-12 right-[30%] flex
       flex-col items-center justify-center w-28 h-28 "
        >
          <Image src={tether} alt="" />
        </div>
        <div
          className="absolute bottom-12 right-[30%] flex
     flex-col items-center justify-center w-28 h-28 "
        >
          <Image src={pmony} alt="" />
        </div>
        <div
          className="absolute bottom-12 top-[50%] flex
   flex-col items-center justify-center w-28 h-28 "
        >
          <Image src={payeer} alt="" />
        </div>
        <div
          className="absolute bottom-12 right-[90%] flex
 flex-col items-center justify-center w-28 h-28 "
        >
          <Image src={ethereum} alt="" />
        </div>
        <div
          className="absolute bottom-12 top-[30%] flex
flex-col items-center justify-center w-28 h-28 "
        >
          <Image src={visa} alt="" />
        </div> 
        */}
      </div>
    </div>
  );
};

export default RealAccountTypes;
