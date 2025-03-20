"use client";
import Select from "@/components/ui/select";
import React from "react";
import { US, close, qusation } from "../../../../public/images";
import Image from "next/image";
import Table from "@/components/ui/table";

const page = () => {
  const cols = [

    {
      name: "Instrument",
      selector: (row) => (
        <div className="flex items-center px-4 ">
          <Image src={close} alt="" width={15} height={15} />
          <span className="bg-[#1A2A48] p-1 rounded-lg mx-2">{row.sub_name}</span>{" "}
        </div>
      ),
    },
    {
      name: "Rate",
      selector: (row) => <span>{row.rate}</span>,
    },
    {
      name: "Size",
      selector: (row) => <span>{row.size}</span>,
    },
    {
      name: "Value",
      selector: (row) => <span>{row.value}</span>,
    },
    {
      name: "Margin",
      selector: (row) => <span>{row.margin}</span>,
    },
  ];
  const data = [
    {
      sub_name: "AUDUSD",
      rate: "0.6275",
      size: 1,
      value: "$0.6275",
      margin: "$35.738"

    },
    {
      sub_name: "AUDUSD",
      rate: "0.6275",
      size: 1,
      value: "$0.6275",
      margin: "$125.738"

    },
  ];
  return (
    <div className="bg-[#0c1E44]">
      <div className="w-full pt-[16rem] pb-10 bg-ourTeamBg   bg-cover bg-top bg-no-repeat  z-[100]">
        <div className="w-full text-center text-white flex flex-col justify-center items-center">
          <div className="flex gap-2 text-5xl max-md:text-3xl font-semibold text-center justify-center">
            <h1 className={`text-secondary font-extrabold`}>{`Margin   `}</h1>
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
          <div className="absolute w-[35%] z-[10]  start-[35%] top-[55px] h-[25%] opacity-90 blur-[384px] bg-toutorial_gr_img"></div>

          <div className="absolute w-[112%] z-[10]  start-[-80px] top-[250px] h-[25%] opacity-90 blur-[384px] bg-toutorial_gr_img"></div>
          <div className="w-[100%] mx-auto rounded-md bg-primary   z-[100] relative shadow-lg text-white">
            <div className="bg-[#0f2147] pb-8 w-full   rounded-md flex flex-col  text-start">
              <div className="w-full p-8   flex text-nowrap justify-between items-center">
                <div className="flex gap-4 items-center">
                  <h2 className="text-white ">Account currency</h2>
                  <Select placeholder={`USD `} />
                </div>
                <div className="flex gap-4 items-center">
                  <h2>GROUB</h2>
                  <Select placeholder={`FX Majors `} />
                  <Select placeholder={`FX Minors `} />
                  <Select placeholder={`FX Exotics `} />
                  <Select placeholder={`Spot Metals `} />
                </div>
              </div>
              <Table
                table={{
                  columns: cols,
                  data: data,
                }}
              />
              <div className="bg-[#0C1B3C] w-[70%] mt-24 rounded-md mx-auto h-[200px]  flex justify-center items-center text-center">
                <h1 className="text-[#FFFFFF] opacity-50 text-7xl font-bold">
                  $ 00.00
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
