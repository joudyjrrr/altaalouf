"use client";
import Select from "@/components/ui/select";
import React from "react";
import { US, qusation } from "../../../../public/images";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FaCaretRight } from "react-icons/fa6";
import MainCurrencies from "@/components/Layout/MainCurrencies";
const page = () => {
  return (
    <div className="bg-[#0c1E44]">
        <div className="w-full pt-[16rem] pb-10 bg-ourTeamBg   bg-cover bg-top bg-no-repeat  z-[100]">
          <div className="w-full text-center text-white flex flex-col justify-center items-center">
            <div className="flex gap-2 text-5xl max-md:text-3xl font-semibold text-center justify-center">
              <h1 className={`text-secondary font-extrabold`}>{`Profit  `}</h1>
              <h1 className={`text-white font-extrabold`}>{`Calculators`}</h1>
            </div>
            <p className="mt-4">
              Calculate potential gains, set precise profit targets, and manage
              losses before trading.
            </p>
          </div>
        </div>
        <div className="w-full h-full bg-caluclatour_bg ">
          <div className="w-[70%]  relative mx-auto">
            <div className="absolute w-[35%] z-[10]  start-[35%] top-[65px] h-[25%] opacity-90 blur-[384px] bg-toutorial_gr_img"></div>

            <div className="absolute w-[112%] z-[10]  start-[-80px] top-[250px] h-[25%] opacity-90 blur-[384px] bg-toutorial_gr_img"></div>
            <div className="w-[100%] mx-auto rounded-md bg-primary  z-[100] relative shadow-md">
              <div className="grid p-8 grid-cols-2 gap-12">
                <Select icon={qusation} label={`Currency Pair`} />
                <Select icon={qusation} label={`Buy or Sell`} />
                <Input
                  label={`Open Price`}
                  icon={qusation}
                  classNameParent={`w-full`}
                />
                <Input
                  label={`Close Price`}
                  icon={qusation}
                  classNameParent={`w-full`}
                />
                <Input
                  label={`Trade Size (lots)`}
                  icon={qusation}
                  classNameParent={`w-full`}
                />
                <Input
                  label={`Deposit Currency`}
                  icon={qusation}
                  classNameParent={`w-full`}
                />
                <div className="flex gap-4">
                  <Button className="bg-main_button w-fit px-8">
                    Calculate <FaCaretRight />
                  </Button>
                  <Button className="button-border-transparent text-white  before:!rounded-md  !bg-transparent before:!bg-white !rounded-md text-base !px-6 !py-4">
                    Reset <FaCaretRight />
                  </Button>
                </div>
              </div>
              <div className="bg-[#0C1B3C] w-[90%] rounded-md mx-auto h-[200px]  flex justify-center items-center text-center">
                <h1 className="text-[#FFFFFF] opacity-50 text-7xl font-bold">
                  $ 00.00
                </h1>
              </div>
              <MainCurrencies />
            </div>
          </div>
        </div>
      </div>
   
  );
};

export default page;
