import Title from "@/components/Layout/Title";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import { plus } from "../../../../public/images";
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
      <div className="w-full  bg-optimizer_ourTeamBg   bg-cover bg-top bg-no-repeat  ">
        <div className="w-full pt-28 max-xsLg:pt-12 max-mdd:pt-0 max-xs:bg-banner_page_mobile max-xs:!pt-20 max-xs:bg-auto bg-ourTeamBg  bg-cover bg-top bg-no-repeat z-[100]">
          <div className="w-full pt-44 max-xs:pt-40  h-full flex justify-start items-center gap-4 flex-col">
            <div className="flex  max-xs:flex-col gap-2 text-5xl max-md:text-3xl max-sm:text-3xl font-semibold text-center justify-center">
              <h1
                className={`text-secondary font-extrabold`}
              >{`Frequently `}</h1>
              <h1
                className={`text-white  font-extrabold`}
              >{`Asked Questions`}</h1>
            </div>
            <div className="flex flex-col gap-4 mt-8 max-xs:mt-4">
              <div className="flex  gap-8 max-xs:gap-2">
                <Button className="button-border-transparent  bg-[#04061380] !px-12 max-sm:!px-4 max-sm:text-sm !py-4 font-medium text-lg !rounded-2xl">
                  Bonus
                </Button>
                <Button className="button-border-transparent bg-[#04061380] !px-12 max-sm:!px-4 max-sm:text-sm !py-4 font-medium text-lg !rounded-2xl">
                  Trading
                </Button>
                <Button className="button-border-transparent bg-[#04061380] !px-12 max-sm:!px-4 max-sm:text-sm !py-4 font-medium text-lg !rounded-2xl">
                  Verification
                </Button>
                <Button className="bg-main_button  px-10 font-medium text-lg max-sm:text-sm max-sm:px-2 !rounded-2xl">
                  Support
                </Button>
              </div>
              <div className="flex  gap-8 justify-center max-xs:gap-2">
                <Button className="button-border-transparent bg-[#04061380] !px-12 max-sm:!px-4 max-sm:text-sm !py-4 font-medium text-lg !rounded-2xl">
                  Finance
                </Button>
                <Button className="button-border-transparent bg-[#04061380] !px-12 max-sm:!px-4 max-sm:text-sm !py-4 font-medium text-lg !rounded-2xl">
                  Agents
                </Button>
                <Button className="button-border-transparent bg-[#04061380] !px-12 max-sm:!px-4 max-sm:text-sm !py-4 font-medium text-lg !rounded-2xl">
                  Deposit Bonus
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full  bg-optimizer_frequantly_bg   bg-cover bg-top bg-no-repeat  ">
        <div className="w-full   bg-frequantly_bg  bg-cover bg-top pb-16 bg-no-repeat z-[100]">
          <div className="w-full pt-16 pb-32 relative bg-frequantly_Gr  h-full flex justify-start items-center gap-4 flex-col">
            <div className="absolute w-[400px] z-[10]  start-[-200px] top-[5%] h-[85%] opacity-80 blur-[384px] bg-toutorial_gr_img"></div>

            <div className="grid grid-cols-2 max-mdd:grid-cols-1 max-sm:px-4 gap-8 relative z-[100] px-16">
              {questions.map((qu, idx) => (
                <div key={idx} className="input-border  !h-fit !rounded-xl">
                  <div className="bg-frequantly_card_bg h-fit gap-4 bg-center w-full bg-cover rounded-xl items-center flex justify-between p-4">
                    <h1 className="text-white text-xl max-sm:text-sm ">{qu}</h1>
                    <Image src={plus} alt="" width={25} height={25} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <DwMethods />
    </div>
  );
};

export default page;
