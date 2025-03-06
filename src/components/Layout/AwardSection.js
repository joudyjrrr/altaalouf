import React from "react";
import { Button } from "../ui/button";
import {
  award1,
  award2,
  award3,
  award4,
  Explore,
  Apps,
  mobileInzo,
  gift,
  square_left,
  square_rigtht,
  arrwos,
} from "../../../public/images";
import Image from "next/image";
import Title from "./Title";
import Switch from "./Switch";
const AwardSection = ({ isExplore }) => {
  const cards = [
    {
      title: "Top 100 Most Truste Financial Institution in the Middle East",
      img: award1,
    },
    { title: "The Fastest Growing Broker in the Middle East", img: award2 },
    { title: "Best STP Broker in the Middle East", img: award3 },
    { title: "Lowest Spread Broker in the Middle East", img: award4 },
  ];
  return (
    <div className={`relative   mt-16 bg-awardBack bg-top bg-no-repeat `}>
      <div className="h-full  ">
        <Title title1={`Legendary`} title2={`Awards`} />

        <div className="grid grid-cols-4 max-md:grid-cols-2 max-sm:grid-cols-1 gap-4 mt-24 p-4">
          {cards.map((d, idx) => (
            <div
              key={idx}
              className="flex flex-col justify-center items-center relative "
            >
              <Image src={d.img} alt="" className="w-full h-full " />
              <div className="bg-awarc_card_back py-8 text-center absolute rounded-b-xl bottom-[1px] h-[28%] end-[-3px] w-full z-[10000]">
                <h1 className="text-white text-xl  font-semibold">{d.title}</h1>
              </div>
            </div>
          ))}
        </div>
      </div>
      {isExplore && (
        <>
          <div className="py-6   h-full w-full">
            <div className="pb-6  relative overflow-hidden z-[1000] bg-trend_platform_bg bg-center bg-cover bg-no-repeat   h-full text-white  max-md:pt-8 ">
              <div className="relative w-full bg-transparent flex justify-center items-center text-center pt-8">
                <Image
                  src={Explore}
                  width={300}
                  height={50}
                  className=""
                  alt="inzo"
                />
                <div className="absolute top-[75px] flex gap-2 text-5xl max-md:text-4xl font-bold">
                  {" "}
                  <h1 className="text-white">{`Our`}</h1>
                  <h1 className="text-secondary">{`Trading Platforms`}</h1>
                </div>
                <div className="absolute top-[110px] end-[35%]">
                  <Image
                    src={arrwos}
                    width={200}
                    height={50}
                    className=""
                    alt="inzo"
                  />
                </div>
              </div>
              <div className="flex px-32 pt-10 justify-center gap-16 max-md:flex-col">
                <Image
                  src={mobileInzo}
                  width={550}
                  height={50}
                  className="max-md:hidden"
                  alt="inzo"
                />
                <div className="flex flex-col items-center gap-4  pt-[8rem] max-md:pt-0">
                  <div className="flex flex-col text-center gap-1 text-white text-2xl  max-md:text-sm font-semibold">
                    <h1>Download our app</h1>
                    <h1>for all type of your devices.</h1>
                  </div>
                  <Switch className2={`!text-white`} />
                  <Image
                    src={Apps}
                    alt=""
                    className="w-[400px] max-md:max-w-[300px] max-mdw-[300px] my-4"
                  />
                </div>
              </div>

              <div className="w-full flex justify-center pb-0 mt-8">
                <div className="flex gap-4 max-md:gap-1">
                  <div className="bg-social_gradiant rounded-xl p-4  max-md:p-2 ">
                    <div className="flex justify-between ">
                      <h1 className="text-secondary  text-5xl max-md:text-4xl font-semibold">
                        {" "}
                        <span>$</span>30
                      </h1>
                      <Image
                        src={gift}
                        alt=""
                        className="w-[60px] max-md:w-[40px]"
                      />
                    </div>
                    <h1 className="text-2xl  max-md:text-lg">Welcome Bonus</h1>
                    <p className="text-lg max-md:text-sm">
                      Open real trading account and get .
                    </p>
                    <p className=" max-md:text-xs">$30 welcome bonus</p>
                  </div>

                  <div className="bg-social_gradiant rounded-xl p-4 max-md:p-1 pb-8">
                    <div className="flex justify-between ">
                      <h1 className="text-secondary  text-5xl max-md:text-4xl font-semibold">
                        30 <span>%</span>
                      </h1>
                      <Image
                        src={gift}
                        alt=""
                        className="w-[60px] max-md:w-[40px]"
                      />
                    </div>
                    <h1 className="text-2xl mb-2 max-md:text-lg">
                      Deposit Bonus
                    </h1>
                    <p className="text-lg max-md:text-sm">
                      Deposit money for 30% bonuses.
                    </p>
                    <p className=" max-md:text-xs">on your account</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-between absolute bottom-[-70px] w-full">
            <Image
              src={square_left}
              width={400}
              height={400}
              className=""
              alt="inzo"
            />
            <Image
              src={square_rigtht}
              width={400}
              height={400}
              className=""
              alt="inzo"
            />
          </div>
        </>
      )}
    </div>
  );
};

export default AwardSection;

<div className="w-full flex justify-center pb-6 relative overflow-hidden">
  {/* تغطية النصف العلوي */}
  <div className="absolute top-0 end-0 w-full h-1/2 ">
    <div className="flex gap-4 max-md:gap-1 relative z-10">
      <div className="bg-social_gradiant rounded-xl p-4  max-md:p-2 ">
        <div className="flex justify-between ">
          <h1 className="text-secondary  text-5xl max-md:text-4xl font-semibold">
            <span>$</span>30
          </h1>
          <Image src={gift} alt="" className="w-[60px] max-md:w-[40px]" />
        </div>
        <h1 className="text-2xl  max-md:text-lg">Welcome Bonus</h1>
        <p className="text-lg max-md:text-sm">
          Open real trading account and get.
        </p>
        <p className="max-md:text-xs">$30 welcome bonus</p>
      </div>

      <div className="bg-social_gradiant rounded-t-xl p-4 max-md:p-1 pb-8">
        <div className="flex justify-between ">
          <h1 className="text-secondary  text-5xl max-md:text-4xl font-semibold">
            30 <span>%</span>
          </h1>
          <Image src={gift} alt="" className="w-[60px] max-md:w-[40px]" />
        </div>
        <h1 className="text-2xl mb-2 max-md:text-lg">Deposit Bonus</h1>
        <p className="text-lg max-md:text-sm">Deposit money for 30% bonuses.</p>
        <p className="max-md:text-xs">on your account</p>
      </div>
    </div>
  </div>
</div>;
