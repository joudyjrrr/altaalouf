import Title from "@/components/Layout/Title";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import { freq_aps, plus } from "../../../../public/images";

const questions = [
  "What are Spreads?",
  "What is a Currency Pair?",
  "What are Contracts for Difference?",
  "What is Leverage?",
  "What is a Margin Call?",
  "What is Margin Level and How Does It Affect Your Trading?",
  "What are Swap Points?",
  "What are Pending Deals?",
  "What is Stop Loss?",
  "What is Price Slippage?",
  "What are PIPs?",
  "What is Bid?",
];
const page = () => {
  return (
    <div className="w-full  relative h-full bg-primary">
      <div className="w-full  bg-optimizer_ourTeamBg   bg-cover bg-top bg-no-repeat  ">
        <div className="w-full pt-4 bg-ourTeamBg  bg-cover bg-top bg-no-repeat z-[100]">
          <div className="w-full pt-44 pb-24  h-full flex justify-start items-center gap-4 flex-col">
            <div className="flex gap-2 text-5xl max-md:text-3xl font-semibold text-center justify-center">
              <h1 className={`text-secondary `}>{`Forex  `}</h1>
              <h1 className={`text-white `}>{`Terminology`}</h1>
            </div>
            <p className="text-xl text-white">
              There are many important terms that forex traders should know.
            </p>
          </div>
        </div>
      </div>
      <div className="w-full   bg-frequantly_bg  bg-cover bg-center bg-no-repeat z-[100]">
        <div className="w-full pt-2 pb-32 relative bg-frequantly_Gr  h-full flex justify-start items-center gap-4 flex-col">
          <Image
            src={freq_aps}
            alt=""
            className="absolute top-[5%] start-0 w-[400px] h-full"
          />
          <div className="grid grid-cols-2 gap-8">
            {questions.map((qu, idx) => (
              <div key={idx} className="input-border !rounded-xl">
                <div className="bg-frequantly_card_bg gap-4 bg-center w-full bg-cover rounded-xl items-center flex justify-between p-4">
                  <h1 className="text-white text-xl">{qu}</h1>
                  <Image src={plus} alt="" width={25} height={25} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
