import React from "react";

import Switch from "@/components/Layout/Switch";
import Image from "next/image";

import { pdIcon } from "../../../../public/images";

const termData = [
  {
    title: "General Terms Of Use",
    desc: "What you agree to when registering to use INZO.",
  },
  {
    title: "Trading Terms",
    desc: "Rules for conducting trades on any INZO trading platform.",
  },
  {
    title: "Funds & Transfers",
    desc: "Terms governing the holding and transfer of funds in INZO, including bonuses you may receive.",
  },
  {
    title: "Security & Privacy",
    desc: "How we use and protect the information you provide us.",
  },

  {
    title: "Risk Disclosure",
    desc: "Notice to help you understand the risks associated with trading on INZO.",
  },

  {
    title: "Anti-Money Laundering",
    desc: "Learn about your Anti-Money Laundering (AML) & Know Your Customer (KYC) policy.",
  },
];
const page = () => {
  return (
    <>
      <div className="w-full h-full bg-[#0F2147] pb-20">
        <div className="w-full  bg-optimizer_ourTeamBg   bg-cover bg-top bg-no-repeat  ">
          <div className="w-full pt-[15rem] bg-ourTeamBg   bg-cover bg-top bg-no-repeat  z-[100]">
            <div className="w-full   h-full flex flex-col justify-center items-end max-sm:items-center  ">
              <div className="flex flex-col gap-2 text-center w-full ">
                <div className="flex gap-2 text-5xl max-md:text-3xl font-semibold text-center justify-center">
                  <h1 className={`text-secondary `}>{`Terms &`}</h1>
                  <h1 className={`text-white `}>{`Conditions`}</h1>
                </div>
                <div className="flex flex-col gap-2 text-white justify-center items-center text-[22px] px-[5rem] pt-5">
                  <p>
                    This is where you will find information about our legal
                    policies and how they apply to you. The documents linked
                    below collectively constitute our standard terms of use
                    (“Terms”). It is important that you familiarize yourself
                    with these terms and agree to them before using any of our
                    websites, products, or services.
                  </p>
                  <Switch
                    className={"darkBg !p-1.5"}
                    className1={"pa22 text-xl "}
                    className2={"text-white pa22 text-xl "}
                    title1="Clients"
                    title2="Partners"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-auto bg-terms_Bg pb-[100px] ">
          <div className="grid grid-cols-[repeat(3,minmax(0,400px))] place-content-center gap-y-10  ">
            {termData.map((item, index) => (
              <div
                className={`flex flex-col items-center justify-center w-[300px]
                 h-[150px] text-white min-card-border mx-auto ps-6 pe-1 py-2 rounded-xl ${
                   index == 1 && "translate-y-16"
                 } ${index == 4 && "translate-y-16"} `}
                key={index}
              >
                <div className="ps-6 ">
                  <p className="text-xl font-bold ">{item.title}</p>
                  <p className="text-[1rem]  pt-2">{item.desc}</p>
                </div>
                <Image
                  src={pdIcon}
                  width={65}
                  height={60}
                  className="absolute top-[30%] -left-7"
                  alt="inzo"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
