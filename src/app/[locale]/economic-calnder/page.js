"use client";
import React from "react";

import SwiperCard from "@/components/Layout/SwiperCard";
import { cardLogo, cardLogo1 } from "../../../../public/images";
import DwMethods from "@/components/Layout/DwMethods";

const page = () => {
  return (
    <>
      <div className="w-full h-full bg-[#0F2147] pb-20">
      <div className="w-full  bg-optimizer_ourTeamBg   bg-cover bg-top bg-no-repeat  ">
      <div className="w-full pt-[15rem] bg-ourTeamBg   bg-cover bg-top bg-no-repeat  z-[100]">
            <div className="w-full   h-[30vh] flex flex-col justify-center items-end max-sm:items-center  pb-8">
              <div className="flex flex-col gap-2 text-center w-full ">
                <div className="flex gap-2 text-5xl max-md:text-3xl font-semibold text-center justify-center">
                  <h1 className={`text-secondary `}>{`Economic`}</h1>
                  <h1 className={`text-white `}>{` Calendar`}</h1>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-[1000px] h-[800px] mx-auto">
          <iframe
            title="economic calendar"
            className="calendar w-full h-full"
            scrolling="no"
            allowtransparency="true"
            frameBorder="0"
            src="https://www.tradingview-widget.com/embed-widget/events/?locale=in#%7B%22colorTheme%22%3A%22dark%22%2C%22isTransparent%22%3Atrue%2C%22width%22%3A%22700%22%2C%22height%22%3A%22700%22%2C%22importanceFilter%22%3A%22-1%2C0%2C1%22%2C%22utm_source%22%3A%22inzo.co%22%2C%22utm_medium%22%3A%22widget%22%2C%22utm_campaign%22%3A%22events%22%7D"
          />
        </div>
        <DwMethods />
      </div>
    </>
  );
};

export default page;
