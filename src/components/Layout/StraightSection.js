import Image from "next/image";
import React from "react";
import { Straight1 , Straight2 } from "../../../public/images";
import Title from "./Title";
const StraightSection = () => {
  return (
    <div className="h-screen bg-Straight_Bg bg-no-repeat  bg-center">
      <Title
        title1={`Straight through`}
        title2={`processing`}
        title1Color={'text-secondary'}
        title2Color={'!text-primary'}
      />
      
      <div className="flex justify-between gap-8 mt-14">
        <div className=" w-full h-full flex flex-col ps-10 justify-center gap-4">
          <h3 className="text-xl">
            It is a system adopted by companies that direct clients’ trades to a
            group of liquidity providers. This system works according to tools
            that are not used by the trading platform provider, but rather by a
            third party that connects a group of liquidity providers with a
            system called (Aggregation), where this system works to purify the
            received prices from liquidity providers and obtain the best price
            for buying and the best price for selling, for example, as the
            purchase price can be from the X liquidity provider, and the selling
            price from the Y liquidity provider.
          </h3>
          <h3 className="text-xl">
            Companies prefer this system to obtain the best price differences to
            provide to their customers, as this system provides price
            differences up to (- 3) Inzo adopts this system through the
            (Aggregation) system provided by OneZero and Centroid, which are
            software companies (third parties) that provide solutions to link
            trades between the trading platform provided by the brokerage
            company and liquidity providers.
          </h3>
        </div>
        <div className=" w-full h-full flex justify-center   relative">
          <Image  className="rtl:rotate-180" src={Straight2} alt="" />
          <Image
            className="absolute  top-[10%] start-[10%]"
            src={Straight1}
            alt=""
            width={480}
          />
        </div>
      </div>
    </div>
  );
};

export default StraightSection;
