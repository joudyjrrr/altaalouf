"use client";
import React from "react";

import Switch from "@/components/Layout/Switch";
import DwMethods from "@/components/Layout/DwMethods";

import SwiperCard from "@/components/Layout/SwiperCard";
import {
  cardLogo,
  cardLogo1,
  cardLogo2,
  cardLogo3,
  cardLogo4,
  cardLogo5,
} from "../../../../public/images";
const cryptoData = [
  {
    title: "Standard",
    logo: cardLogo,
    features: [
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
    title: "INZO Vip",
    logo: cardLogo1,
    features: [
      "Spread From 0.8 Pip",
      "STP Execution",
      "Leverage Up to 1:50",
      "Minimum Lot size 0.01",
      "Access to Automated Trading",
      "Minimum Deposit $50,000",
      "Commission $4 per 1 Lot",
      "More than 400 instruments",
      "No Bonus on Deposit",
    ],
  },
  {
    title: "Zero",
    logo: cardLogo2,
    features: [
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
    title: "Stocks",
    logo: cardLogo3,
    features: [
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
    title: "Crypto",
    logo: cardLogo4,
    features: [
      "Spread From 0.8 Pip",
      "STP Execution",
      "Leverage Up to 1:50",
      "Minimum Lot size 0.01",
      "Access to Automated Trading",
      "Minimum Deposit $50,000",
      "Commission $4 per 1 Lot",
      "More than 400 instruments",
      "No Bonus on Deposit",
    ],
  },
  {
    title: "Zero Standard",
    logo: cardLogo5,
    features: [
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

const page = () => {
  return (
    <>
      <div className="w-full h-full bg-[#0F2147] pb-20">
      <div className="w-full  bg-optimizer_ourTeamBg   bg-cover bg-top bg-no-repeat  "> 
          <div className="w-full pt-[15rem] bg-ourTeamBg   bg-cover bg-top bg-no-repeat  z-[100]">
            <div className="w-full   h-full flex flex-col justify-center items-end max-sm:items-center  pb-8">
              <div className="flex flex-col gap-2 text-center w-full ">
                <div className="flex gap-2 text-5xl max-md:text-3xl font-semibold text-center justify-center">
                  <h1 className={`text-secondary `}>{`INZO Real`}</h1>
                  <h1 className={`text-white `}>{`Accounts Types`}</h1>
                </div>
                <div className="flex flex-col gap-2 text-white justify-center items-center text-[28px] ">
                  <p>
                    INZO offer several types of accounts that are suitable for
                    different trading environments
                  </p>
                  <Switch className={"darkBg"} className2={"text-white"} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-auto">
          <div className="grid grid-cols-[repeat(3,minmax(0,400px))] place-content-center gap-y-10 bg-inzoReal_Bg">
            {cryptoData.map((cardData, index) => (
              <SwiperCard
                key={index}
                cardData={cardData}
                className="card-border"
              />
            ))}
          </div>
        </div>
      </div>
      <DwMethods />
    </>
  );
};

export default page;
