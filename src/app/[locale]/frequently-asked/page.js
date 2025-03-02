import Title from "@/components/Layout/Title";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import { freq_aps, plus } from "../../../../public/images";
import DwMethods from "@/components/Layout/DwMethods";
const questions = [
  "What is INZO?",
  "How can I open an account on the platform?",
  "How can I change the client portal password?",
  "Why does the account show 'read-only' and I can't trade?",
  "What types of accounts are available?",
  "Why does login to the platform fail with an authorization error?",
  "How can I change the trading platform password?",
];

const page = () => {
  return (
    <div className="w-full  relative h-full bg-primary">
      <div className="w-full pt-4 bg-banner  bg-cover bg-center bg-no-repeat z-[100]">
        <div className="w-full pt-32 bg-tutorial_Gr  h-full flex justify-start items-center gap-4 flex-col">
          <Title
            title1={`Frequently`}
            title2={`Asked Questions`}
            classNameImg={`hidden`}
          />
          <div className="flex flex-col gap-4 mt-24">
            <div className="flex  gap-8 ">
              <Button className="button-border font-medium text-lg !rounded-2xl">
                Bonus
              </Button>
              <Button className="button-border font-medium text-lg !rounded-2xl">
                Trading
              </Button>
              <Button className="button-border font-medium text-lg !rounded-2xl">
                Verification
              </Button>
              <Button className="bg-main_button font-medium text-lg !rounded-2xl">
                Support
              </Button>
            </div>
            <div className="flex  gap-8 justify-center">
              <Button className="button-border font-medium text-lg !rounded-2xl">
                Finance
              </Button>
              <Button className="button-border font-medium text-lg !rounded-2xl">
                Agents
              </Button>
              <Button className="button-border  font-medium text-lg !rounded-2xl">
                Deposit Bonus
              </Button>
            </div>
          </div>
        </div>
      </div>
   
      <div className="w-full   bg-frequantly_bg  bg-cover bg-center bg-no-repeat z-[100]">
        <div className="w-full pt-16 pb-32 relative bg-frequantly_Gr  h-full flex justify-start items-center gap-4 flex-col">
          <Image
            src={freq_aps}
            alt=""
            className="absolute top-[5%] start-0 w-[400px] h-full"
          />
          <div className="grid grid-cols-2 gap-4">
            {questions.map((qu, idx) => (
              <div key={idx}  className="input-border !rounded-xl">
                <div className="bg-frequantly_card_bg gap-4 bg-center w-full bg-cover rounded-xl items-center flex justify-between p-4">
                <h1 className="text-white text-xl">{qu}</h1>
                <Image src={plus} alt="" width={25} height={25}/>
              </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <DwMethods/>
      </div>
    

  );
};

export default page;
