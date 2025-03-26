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
    <div className=" bg-optimizer_banner bg-cover bg-center bg-no-repeat">
      <div className="w-full pt-4 h-[110vh] z-[100] relative overflow-visible bg-banner bg-cover bg-center bg-no-repeat">
        <div className="bg-gradient-to-t from-[#0F2147] from-5% to-transparent to-30%">
          <div className="h-[90vh]">
            <div className="absolute inset-0 w-full flex bg-gradient-to-b from-[#030B1D] from-5% to-transparent to-25%">
              <div className="w-1/2 h-full bg-gradient-to-br from-[#030B1D] from-20% via-[#051B7300] via-70% to-transparent"></div>
              <div
                className="w-1/2 h-full"
                style={{
                  backgroundImage: `linear-gradient(70deg, transparent 65%, #030D22 80%)`,
                }}
              ></div>
            </div>
            <div className="flex justify-between relative w-full mt-[70px] max-md:flex-col max-md:gap-8">
              <div className="w-full flex justify-start max-md:justify-center text-white pt-20  px-16 ">
                <div className="flex flex-col gap-4 ">
                  <h1 className="text-[4rem] leading-[0.6] font-[600] -mb-2 ml-1 max-md:text-5xl">
                    Trade Like A{" "}
                  </h1>
                  <h1 className="text-[5.7rem] leading-[1] font-bold text-secondary max-md:!text-[5xl]">
                    Legend
                  </h1>
                  <div>
                    <p className="text-2xl max-md:text-lg">
                      Trade over 400 Global Instruments from FX,
                    </p>
                    <p className="text-2xl max-md:text-lg">
                      Metals Shares, and Indices with
                      <span className="font-semibold">INZO</span>.
                    </p>
                  </div>
                  <div className="flex gap-4 items-center">
                    <Button className="bg-main_button  transition-all duration-800">
                      Open Real Account
                      <FaCaretRight />
                    </Button>
                    <Button className="button-border">
                      Open Demo Account <FaCaretRight />
                    </Button>
                  </div>
                </div>
              </div>
              <VerticalSotial />
            </div>
          </div>
          <div className="h-[20vh] mb-4">
            <BannerSwiper />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
