import Switch from "@/components/Layout/Switch";
import Image from "next/image";
import React from "react";
import { Apps, gift, mobileInzo, plus } from "../../../../public/images";
const faqItems = [
  { question: "What is MetaTrader 5 (MT5)?" },
  { question: "Advantages of MT5 in Online Trading." },
  { question: "Mobile Trading on MT5" },
  { question: "Mobile Trading on MT5" },
];

const page = () => {
  return (
    <div className="w-full h-full bg-primary pb-20 relative">
      <div className="w-full pt-[17rem] bg-ourTeamBg   bg-cover bg-top bg-no-repeat  z-[100]">
        <div className="w-full    bg-trend_platform_Gr2 h-full">
          <div className="w-full    text-center h-full flex justify-start items-center gap-2 flex-col">
            <div className="flex gap-2 text-5xl max-md:text-3xl font-semibold text-center justify-center">
              <h1 className={`text-secondary font-extrabold`}>{`Trading `}</h1>
              <h1 className={`text-white font-extrabold`}>{`Platforms`}</h1>
            </div>
            <p className="text-2xl text-white mt-4">
              Download our app for all type of your devices.
            </p>
            <Switch className2={`!text-white`} />
          </div>
        </div>
      </div>
      <div className="bg-trend_platform_bg  relative z-[1000] w-full   bg-cover bg-top bg-no-repeat  ">
        <div className=" h-full relative z-[1000]  w-full  bg-cover bg-top bg-no-repeat">
          <div className="absolute w-full h-[75%] bg-trend_platform_Gr top-0 start-0 z-[10]"></div>
          <div className="flex flex-col relative z-[10] w-full justify-center items-center">

            <div className="flex px-16   items-center gap-8 justify-between max-md:flex-col">
              <Image
                src={mobileInzo}
                width={600}
                height={600}
                className="max-md:hidden"
                alt="inzo"
              />
              <div className=" pt-36 max-md:pt-0 ">
                <Image
                  src={Apps}
                  alt=""
                  className="w-[450px] max-md:max-w-[300px] max-mdw-[300px] my-4"
                />
              </div>
            </div>
            <div className="w-full flex justify-center ">
              <div className="flex gap-6 pt-32 max-md:gap-1">
                <div className="bg-social_gradiant rounded-xl p-4  max-md:p-2 ">
                  <div className="flex justify-between ">
                    <h1 className="text-secondary  text-5xl max-md:text-4xl font-bold">
                      {" "}
                      <span>$</span>30
                    </h1>
                    <Image
                      src={gift}
                      alt=""
                      className="w-[60px] max-md:w-[40px]"
                    />
                  </div>
                  <h1 className="text-2xl  text-white max-md:text-lg">
                    Welcome Bonus
                  </h1>
                  <p className="text-lg max-md:text-sm  text-white">
                    Open real trading account and get .
                  </p>
                  <p className=" max-md:text-xs  text-white">
                    $30 welcome bonus
                  </p>
                </div>

                <div className="bg-social_gradiant rounded-t-xl p-4 max-md:p-1 pb-8">
                  <div className="flex justify-between ">
                    <h1 className="text-secondary  text-5xl max-md:text-4xl font-bold">
                      30<span>%</span>
                    </h1>
                    <Image
                      src={gift}
                      alt=""
                      className="w-[60px] max-md:w-[40px]"
                    />
                  </div>
                  <h1 className="text-2xl mb-2 max-md:text-lg  text-white">
                    Deposit Bonus
                  </h1>
                  <p className="text-lg max-md:text-sm  text-white">
                    Deposit money for 30% bonuses.
                  </p>
                  <p className=" max-md:text-xs  text-white">on your account</p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
      <div className="absolute w-full z-[10]  start-0 top-[71%] h-[100px] opacity-80 blur-[384px] bg-toutorial_gr_img"></div>

      <div className="w-full  mt-24    text-center h-full flex justify-start items-center gap-2 flex-col">
        <div className="flex gap-2 text-5xl max-md:text-3xl font-semibold text-center justify-center">
          <h1 className={`text-secondary font-extrabold`}>{`About `}</h1>
          <h1 className={`text-white font-extrabold`}>{`Meta Trader (MT5)`}</h1>
        </div>
        <div className="grid grid-cols-2 gap-8 mt-8 w-full px-32">
          {faqItems.map((qu, idx) => (
            <div key={idx} className="input-border !rounded-xl">
              <div className="bg-frequantly_card_bg gap-4 bg-center w-full bg-cover rounded-xl items-center flex justify-between p-4">
                <h1 className="text-white text-xl">{qu.question}</h1>
                <Image src={plus} alt="" width={25} height={25} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
