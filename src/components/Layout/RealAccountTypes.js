"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useTranslations } from "next-intl";
import { Button } from "../ui/button";
import Image from "next/image";
import {
  FaCaretRight,
  FaFacebookF,
  FaInstagram,
  FaTelegramPlane,
  FaYoutube,
} from "react-icons/fa";
import {arrowIcon, syrcleGlass} from "../../../public/images";

import { FaXTwitter } from "react-icons/fa6";

const cryptoData = [
  {
    0: "Standard",
    1: [
      "Spread From 0.8 Pip",
      "STP Execution",
      "Leverage Up to 1:500",
      "Minimum Lot size 0.01",
      "Access to Automated Trading",
      "Minimum Deposit $100",
      "Zero Commission $0.0",
      "Swap-Free Islamic Account",
      "30% Deposit Bonus",
    ],
  },
  {
    0: "Standard",
    1: [
      "Spread From 0.8 Pip",
      "STP Execution",
      "Leverage Up to 1:500",
      "Minimum Lot size 0.01",
      "Access to Automated Trading",
      "Minimum Deposit $100",
      "Zero Commission $0.0",
      "Swap-Free Islamic Account",
      "30% Deposit Bonus",
    ],
  },
  {
    0: "Standard",
    1: [
      "Spread From 0.8 Pip",
      "STP Execution",
      "Leverage Up to 1:500",
      "Minimum Lot size 0.01",
      "Access to Automated Trading",
      "Minimum Deposit $100",
      "Zero Commission $0.0",
      "Swap-Free Islamic Account",
      "30% Deposit Bonus",
    ],
  },
  {
    0: "Standard",
    1: [
      "Spread From 0.8 Pip",
      "STP Execution",
      "Leverage Up to 1:500",
      "Minimum Lot size 0.01",
      "Access to Automated Trading",
      "Minimum Deposit $100",
      "Zero Commission $0.0",
      "Swap-Free Islamic Account",
      "30% Deposit Bonus",
    ],
  },
];

const RealAccountTypes = () => {
  return (
    <div className="w-full bg-[#fff] pt-[100px] h-screen flex gap-[50px] relative -z-2">
    <Image
      src={syrcleGlass}
      alt="icon"
      width={190}
      height={190}
      className="me-4 absolute -z-3 -top-[100px]"
    />  
    <div className=" flex-col ps-[50px] pt-8 w-[350px] bg-transparent relative z-1">
       
        <div className=" text-white bg-gray-950">dsfasdf</div>
        <p className="leading-[50px] text-[26px] font-semibold pt-5 text-[#030613]">
        INZO offer several types of accounts that are suitable for different trading environments.
        </p>
      </div>

      <div className="w-[70%] ">
        <Swiper
          modules={[Autoplay, Navigation, Pagination]}
          spaceBetween={10}
          slidesPerView={2}
          autoplay={{ delay: 3000 }}
          navigation
          pagination
         
          className="!p-8"
        >
          {cryptoData.map((crypto, index) => (
            <SwiperSlide key={index}>
              
                <div className="p-6 bg-card_Bg bg-cover bg-center h-[450px] w-[350px] custom-shadow
                 rounded-xl text-white flex flex-col items-center">
                  <div className="w-full flex gap-4">
                    <div className="w-full flex flex-col ps-5">
                      <h3 className="text-[41px] font-bold ">
                        {crypto[0]}
                      </h3>
                      <div className="mt-3">
                      {crypto[1].map((item, index) => (
                        <p
                          key={index}
                          className="text-[16.5px] font-medium mt-[.4rem] flex items-center "
                        >
                        <Image
                        src={arrowIcon}
                        alt="icon"
                        width={12}
                        height={12}
                        className="me-4"
                      />   
                      {item}
                        </p>
                      ))}
                      </div>
                      <Button className="button-border hover:bg-main_button  p-[21px_18px] max-w-[235px] m-auto mt-4">
                        Open Demo Account <FaCaretRight />
                      </Button>
                    </div>
                  </div>
                </div>
           
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default RealAccountTypes;
