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
    <div className="bg-white w-full  relative curved-section">
      <div className="bg-optimizer_start w-full h-full bg-center bg-cover py-12">
        <div className="bg-gradient-to-b from-[#0F2147] from-45% to-transparent to-200% text-center text-white py-12">
          <Title title1={`Copy Best `} title2={`Traders`} />
          <p className="text-lg mt-10 max-md:text-sm">
            INZO offer several types of accounts that are suitable for different
            trading environments.
          </p>
        </div>
        <div className="flex justify-between px-32 pb-16">
          <div className="flex flex-col gap-4 justify-center items-center text-center">
            <Image
              src={copy1}
              alt=""
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAA..."
            />
            <div className="flex flex-col gap-1">
              <h1 className="text-white text-4xl font-extrabold">
                Download our App Now
              </h1>
              <h1 className="text-secondary text-5xl font-extrabold">MT5</h1>
            </div>
            <Button variant={`gradiant`}>Invest</Button>
          </div>
          <div
            className={`w-[2px] h-[350px] rounded-t rounded-xl bg-gradient-to-b from-primary to-secondary max-md:hidden`}
          ></div>
          <div className="flex flex-col gap-4 justify-center items-center text-center">
            <Image
              src={copy2}
              alt=""
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAA..."
            />
            <div className="flex flex-col gap-1">
              <h1 className="text-white text-4xl font-extrabold">
                Download our App Now
              </h1>
              <h1 className="text-secondary text-5xl font-extrabold">
                cTrader
              </h1>
            </div>
            <Button variant={`gradiant`}>Invest</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamSection;
