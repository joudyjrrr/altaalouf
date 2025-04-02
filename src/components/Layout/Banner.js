"use client";
import React from "react";
import { useTranslations } from "next-intl";
import { Button } from "../ui/button";
import { FaCaretRight } from "react-icons/fa";
import VerticalSotial from "./VerticalSotial";
import BannerSwiper from "./BannerSwiper";

const Banner = () => {
  const t = useTranslations();
  return (
    <div className="bg-cover bg-center bg-no-repeat bg-optimizer_banner">
      <div
        className="w-full pt-4 h-[110vh] md:h-[110vh] z-[100] relative overflow-visible bg-mobBanner md:bg-banner 
    bg-cover bg-center bg-no-repeat"
      >
        <div className="bg-gradient-to-t from-[#0F2147] from-5% to-transparent to-30%">
          <div className="h-[90vh] ">
            <div
              className="hidden md:absolute inset-0 w-full md:flex bg-gradient-to-b
           from-[#030B1D] from-5% to-transparent to-25%"
            >
              <div
                className="w-1/2 h-full bg-gradient-to-br from-[#030B1D]
             from-20% via-[#051B7300] via-70% to-transparent"
              ></div>
              <div
                className="w-1/2 h-full"
                style={{
                  backgroundImage: `linear-gradient(70deg, transparent 65%, #030D22 80%)`,
                }}
              ></div>
            </div>
            <div
              className="flex justify-between relative w-full mt-[70px]
           max-md:flex-col max-md:gap-8 max-md:hidden"
            >
              <div
                className="w-full flex justify-start max-md:justify-center
             text-white pt-20 px-5 md:px-16 "
              >
                <div className="flex flex-col gap-4 ">
                  <h1
                    className="text-center md:text-start text-[2.35rem] 
                md:text-[4rem] leading-[0.6] font-[600]  md:-mb-2 ml-1 md:max-md:text-5xl"
                  >
                    Trade Like A
                  </h1>
                  <h1
                    className="text-center md:text-start 
                text-[4rem] md:text-[5.7rem] leading-[1] font-bold
                 text-secondary max-md:!text-[5xl] mt-4 md:mt-0"
                  >
                    Legend
                  </h1>
                  <div className="mt-7 md:mt-0">
                    <p className="text-[1.1rem] text-center md:text-start ">
                      Trade over 400 Global Instruments from FX,
                    </p>
                    <p className="text-[1.1rem] text-center md:text-start md:max-md:text-lg">
                      Metals Shares, and Indices with
                      <span className="font-semibold ps-1"> INZO</span>.
                    </p>
                  </div>
                  <div className="flex-col md:flex-row flex gap-4 items-center mt-5">
                    <Button className="bg-main_button  transition-all duration-800 max-md:py-7 max-md:px-5 max-md:text-[1rem] max-md:font-medium">
                      Open Real Account
                      <FaCaretRight />
                    </Button>
                    <Button className="button-border-transparent2 relative bg-[#04061396]  hover:bg-[#04061359] max-md:py-7 max-md:px-4 max-md:mt-3 max-md:text-[1rem] max-md:font-medium rounded-md ">
                      Open Demo Account <FaCaretRight />
                    </Button>
                  </div>
                </div>
              </div>
              <div className="hidden md:block">
                <VerticalSotial />
              </div>
            </div>
          </div>

          <div
            className="flex justify-between relative w-full mt-[115px]
       max-md:flex-col max-md:gap-8 md:hidden bg-[#0F2147] "
          >
            <div
              className="w-full flex justify-start max-md:justify-center
         text-white -mt-16 px-5 md:px-16 pb-[40px]"
            >
              <div className="flex flex-col gap-4 ">
                <h1
                  className="text-center md:text-start text-[2.35rem] 
            md:text-[4rem] leading-[0.6] font-[600]  md:-mb-2 ml-1 md:max-md:text-5xl"
                >
                  Trade Like A
                </h1>
                <h1
                  className="text-center md:text-start 
            text-[4rem] md:text-[5.7rem] leading-[1] font-bold
             text-secondary max-md:!text-[5xl] mt-4 md:mt-0"
                >
                  Legend
                </h1>
                <div className="mt-7 md:mt-0">
                  <p className="text-[1.1rem] text-center md:text-start ">
                    Trade over 400 Global Instruments from FX,
                  </p>
                  <p className="text-[1.1rem] text-center md:text-start md:max-md:text-lg">
                    Metals Shares, and Indices with
                    <span className="font-semibold ps-1"> INZO</span>.
                  </p>
                </div>
                <div className="flex-col md:flex-row flex gap-4 items-center mt-5">
                  <Button className="bg-main_button  transition-all duration-800 max-md:py-7 max-md:px-5 max-md:text-[1rem] max-md:font-medium">
                    Open Real Account
                    <FaCaretRight />
                  </Button>
                  <Button className="button-border-transparent2 relative   bg-[#04061396]  hover:bg-[#04061359] max-md:py-7 max-md:px-4 max-md:mt-3 max-md:text-[1rem] max-md:font-medium rounded-md ">
                    Open Demo Account <FaCaretRight />
                  </Button>
                </div>
              </div>
            </div>
            <div className="hidden md:block">
              <VerticalSotial />
            </div>
          </div>
          <div className=" h-[17vh]  md:h-[20vh]  md:mb-4 bg-[#0F2147]">
            <BannerSwiper />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
