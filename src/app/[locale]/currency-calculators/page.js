"use client";
import Select from "@/components/ui/select";
import React from "react";
import { US, circule_arrwos, qusation } from "../../../../public/images";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FaCaretRight } from "react-icons/fa6";
import Image from "next/image";
import MainCurrencies from "@/components/Layout/MainCurrencies";

const page = () => {
  return (
    <div className="w-full h-full bg-[#0c1E44] pb-20 relative">
      <div className="w-full pt-[16rem] pb-8 bg-ourTeamBg   bg-cover bg-top bg-no-repeat  z-[100]">
        <div className="w-full text-center text-white flex flex-col justify-center items-center">
          <div className="flex gap-2 text-5xl max-md:text-3xl font-semibold text-center justify-center">
            <h1 className={`text-secondary font-extrabold`}>{`Currency `}</h1>
            <h1 className={`text-white font-extrabold`}>{`Calculators`}</h1>
          </div>
          <p className="mt-4">
            Calculate potential gains, set precise profit targets, and manage
            losses before trading.
          </p>
        </div>
      </div>
      <div className="w-[70%]  relative mx-auto ">
        <div className="absolute w-[35%] z-[10]  start-[25%] top-[65px] h-[25%] opacity-90 blur-[384px] bg-toutorial_gr_img"></div>

        <div className="absolute w-[112%] z-[10]  start-[-80px] top-[200px] h-[25%] opacity-90 blur-[384px] bg-toutorial_gr_img"></div>
        <div className="w-[100%] mx-auto rounded-md bg-primary  z-[100] relative shadow-md">
          <div className="flex flex-col items-center gap-8 p-8 w-full">
            <Input
              label={`Amount`}
              icon={qusation}
              classNameParent={`w-full`}
            />
            <div className="flex gap-4 w-full items-center justify-between">
              <Input
                label={`From`}
                icon={qusation}
                classNameParent={`w-full`}
              />
              <Image
                src={circule_arrwos}
                className="mt-8"
                width={50}
                height={50}
                alt=""
              />
              <Input label={`To`} icon={qusation} classNameParent={`w-full`} />
            </div>
          </div>

          <div className="bg-[#0C1B3C] w-[90%] rounded-md mx-auto h-[200px]  flex justify-center items-center text-center">
            <h1 className="text-[#FFFFFF] opacity-50 text-7xl font-bold">
              € 00.00
            </h1>
          </div>
          <MainCurrencies />
        </div>
      </div>
    </div>
  );
};

export default page;
