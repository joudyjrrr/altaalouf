import React from "react";
import Title from "./Title";
import {
  copy1,
  copy2,
  team1,
  team2,
  team3,
  team4,
} from "../../../public/images";
import Image from "next/image";
import { Button } from "../ui/button";
import Switch from "./Switch";

const TeamSection = () => {
  return (
    <div className="bg-white w-full  relative curved-section max-md:mt-[400px]">
      <div className="bg-star_background2 w-full h-full bg-center bg-cover py-12">
        <div className="bg-gradient-to-b from-[#0F2147] from-45% to-transparent to-200% text-center text-white py-12">
          <Title title1={`Copy Best `} title2={`Traders`} />
          <p className="text-lg mt-10 max-md:text-sm max-md:px-3">
            INZO offer several types of accounts that are suitable for different
            trading environments.
          </p>
        </div>
        <div className="max-md:flex-col flex justify-between px-5 md:px-32 pb-16 max-md:gap-y-10">
          <div className="max-md:flex-row flex flex-col gap-4 justify-center items-center text-center">
            <Image src={copy1} alt="" className="max-md:w-[50%] " />
            <div className="max-md:flex-col max-md:flex max-md:justify-between">
              <div className="flex flex-col gap-1">
                <h1 className="text-white text-[1rem] md:text-4xl font-bold md:font-extrabold">
                  Download our App Now
                </h1>
                <h1 className="text-secondary text-3xl md:text-5xl font-bold md:font-extrabold">
                  MT5
                </h1>
              </div>
              <Button
                className="!py-5 px-14 max-md:!px-3 max-md:w-[60%]
               max-md:!py-6 max-md:mx-auto  button-border-transparent2 relative  
                bg-[#0406139c]  hover:bg-[#04061359] mt-5 md:mt-7  "
              >
                Invest
              </Button>
            </div>
          </div>

          <div
            className={`w-[2px] h-[350px] rounded-t rounded-xl bg-gradient-to-b from-primary to-secondary max-md:hidden`}
          ></div>

          <div className="max-md:flex-row flex flex-col gap-4 justify-center items-center text-center">
            <Image
              src={copy2}
              alt=""
              className="max-md:w-[50%] max-md:order-2"
            />
            <div className="max-md:flex-col max-md:flex max-md:justify-between">
              <div className="flex flex-col gap-1">
                <h1 className="text-white text-[1rem]  md:text-4xl font-bold md:font-extrabold">
                  Download our App Now
                </h1>
                <h1 className="text-secondary text-3xl md:text-5xl font-bold md:font-extrabold">
                  cTrader
                </h1>
              </div>
              <Button
                className="!py-5 px-14 max-md:!px-3 max-md:w-[60%]
               max-md:!py-6 max-md:mx-auto  button-border-transparent2 relative  
                bg-[#0406139c]  hover:bg-[#04061359] mt-5 md:mt-7 "
              >
                Invest
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamSection;
