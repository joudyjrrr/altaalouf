import Image from "next/image";
import React from "react";
import { Straight1, Straight2 } from "../../../public/images";
import Title from "./Title";
const StraightSection = () => {
  return (
    <div className=" bg-Straight_Bg bg-no-repeat  bg-bottom pb-10 max-md:mt-14">
      <Title
        title1={`Straight through`}
        title2={`processing`}
        title1Color={"text-secondary"}
        title2Color={"!text-primary"}
      />

      <div className="flex justify-between gap-16 mt-10 md:mt-24 max-md:flex-col">
        <div className=" w-full h-full flex flex-col max-md:ps-4 max-md:pe-2 px-4 md:ps-10 justify-center gap-8">
          <h3 className="text-[0.9rem] md:text-lg leading-6 md:leading-8">
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
          <h3 className="text-[0.9rem] md:text-lg leading-6 md:leading-8">
            Companies prefer this system to obtain the best price differences to
            provide to their customers, as this system provides price
            differences up to (- 3) Inzo adopts this system through the
            (Aggregation) system provided by OneZero and Centroid, which are
            software companies (third parties) that provide solutions to link
            trades between the trading platform provided by the brokerage
            company and liquidity providers.
          </h3>
        </div>
        <div className=" w-full h-full flex justify-center   relative max-md:hidden">
          <Image
            width={700}
            height={400}
            className="rtl:rotate-180 absolute  top-0 end-0"
            src={Straight2}
            alt=""
          />
          <Image
            className="relative z-[100] mt-16"
            src={Straight1}
            alt=""
            width={550}
            height={400}
          />
        </div>
      </div>
    </div>
  );
};

export default StraightSection;
