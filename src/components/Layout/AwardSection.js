"use client";
import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import {
  Explore,
  Apps,
  mobileInzo,
  gift,
  square_left,
  square_rigtht,
  arrwos,
  award_card1,
  award_card2,
  award_card3,
  award_card4,
  award_card5,
} from "../../../public/images";
import Image from "next/image";
import Title from "./Title";
import Switch from "./Switch";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import useLanguageDirection from "@/i18n/useLanguageDirection";

const AwardSection = ({ isExplore }) => {
  const cards = [
    {
      title:
        " Top 100 Most Trusted Financial Institutionsin  in the Middle East ",
      img: award_card5,
      className: "  w-[20%] h-[220px] mt-6 ",
    },
    {
      title: " The Fastest Growing Broker in the Middle ",
      img: award_card4,
      className: "  w-[65%] h-[170px] mt-16 pt-4 ",
    },

    {
      title: "Best STP Broker in the Middle East",
      img: award_card3,
      className: " w-[40%] h-[180px] mt-12",
    },
    {
      title: "Lowest Spread Broker in the Middle East ",
      img: award_card2,
      className: " w-1/2 h-[200px] mt-8 ",
    },
  ];
  const [dir, setDir] = useState("ltr");
  const [swiperKey, setSwiperKey] = useState(0);
  useEffect(() => {
    if (typeof window !== "undefined") {
      setDir(localStorage.getItem("dir") || "ltr");
    }
  }, []);
  useLanguageDirection();
  useEffect(() => {
    setSwiperKey((prevKey) => prevKey + 1);
  }, [dir]);
  return (
    <div
      className={`bg-award_back1  max-sm:pt-4 bg-top bg-no-repeat to-white md:mt-16    relative    `}
    >
      <div className="bg-award_title_Bg absolute opacity-80 blur-[87px] top-0 end-[45%]"></div>

      <div className="bg-award_back h-full relative">
        <div className="md:hidden absolute -top-5 left-0 right-0 mx-auto h-[50px] rounded-full w-[75%] bg-gradient-to-l from-[#3f9ce9] to-[#00C0FF] blur-[70px] z-30"></div>

        <Title title1={`Legendary`} title2={`Awards`} />

        <div className="grid max-sm:hidden grid-cols-4 pb-16 max-md:grid-cols-2 max-sm:grid-cols-1 gap-8 mt-24 p-4 px-24">
          {cards.map((d, idx) => (
            <div key={idx}>
              <Card d={d} />
            </div>
          ))}
        </div>
        <Swiper
          key={swiperKey}
          modules={[Autoplay]}
          pagination={{
            el: ".custom-pagination3",
            clickable: true,
          }}
          dir={dir}
          spaceBetween={10}
          slidesPerView={1.4}
          autoplay={{ delay: 15000 }}
          className="p-8 mt-16 ms-4 max-md:p-4 mb-12 !hidden max-md:!block"
        >
          {cards.map((d, index) => (
            <SwiperSlide
              key={index}
              className={`${index === 0 && "ms-4"} me-8`}
            >
              <Card d={d} />
            </SwiperSlide>
          ))}
        </Swiper>
        <div
          className="md:hidden absolute -bottom-[3.75rem] left-0 right-0 mx-auto h-[45px] rounded-full
         w-[100%] bg-gradient-to-l from-[#3f9ce9] to-[#00C0FF] blur-[45px] z-30"
        ></div>
      </div>

      {isExplore && (
        <>
          <div
            className="pb-6  relative overflow-hidden z-[1000] 
           bg-trend_platform_bg bg-center bg-cover bg-no-repeat  
            h-full text-white mt-4 max-md:pt-8 "
          >
            <div className="relative w-full bg-transparent flex justify-center items-center text-center pt-8">
              <Image
                src={Explore}
                className="w-[200px] h-[50px] md:w-[300px] md:h-[50px]"
                alt="inzo"
              />
              <div className="absolute top-[65px] md:top-[75px] flex gap-2 text-5xl max-md:text-3xl font-bold">
                <h1 className="text-white">{`Our`}</h1>
                <h1 className="text-secondary">{`Trading Platforms`}</h1>
              </div>
              <div className="absolute top-[110px] end-[35%] hidden md:block">
                <Image
                  src={arrwos}
                  width={200}
                  height={50}
                  className=""
                  alt="inzo"
                />
              </div>
            </div>
            <div
              className="flex px-4
             md:px-32 pt-10 justify-center gap-16 max-md:flex-col"
            >
              <Image
                src={mobileInzo}
                width={550}
                height={50}
                className="max-md:hidden"
                alt="inzo"
              />
              <div className="flex flex-col items-center gap-4  pt-[8rem] max-md:pt-0">
                <div className="flex flex-col text-center gap-1 text-white text-2xl  max-md:text-sm font-semibold">
                  <h1>
                    Download our app <br className="hidden md:block" /> for all
                    type of your devices.
                  </h1>
                </div>
                <Switch className2={`!text-white`} />
                <Image
                  src={Apps}
                  alt=""
                  className="w-[400px] max-md:max-w-[300px] max-md:w-[300px] my-4"
                />
              </div>
            </div>

            <div className="w-full flex justify-center pb-0 mt-8">
              <div className="flex gap-4 max-md:gap-1 ">
                <div className="bg-social_gradiant rounded-xl p-4 md:p-4   ">
                  <div className="flex justify-between ">
                    <h1 className="text-secondary  text-5xl max-md:text-4xl font-semibold">
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

                <div className="bg-social_gradiant rounded-xl p-4 md:p-4 ">
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

          <div className="flex justify-between absolute bottom-[-50px] md:bottom-[-70px] w-full">
            <Image
              src={square_left}
              className="w-[200px] md:w-[400px]"
              alt="inzo"
            />
            <Image
              src={square_rigtht}
              className="w-[200px] md:w-[400px]"
              alt="inzo"
            />
          </div>
        </>
      )}
    </div>
  );
};

export default AwardSection;

const Card = ({ d, idx }) => {
  return (
    <div
      key={idx}
      className=" flex flex-col h-[370px] bg-[#0e254e] 
      !p-0 justify-center items-center relative 
      border border-secondary rounded-[30px]"
    >
      <div className="relative h-full w-full rounded-t-[30px] overflow-hidden ">
        <div
          className="absolute inset-0 bg-award_card1 bg-center bg-cover"
          style={{ mixBlendMode: "luminosity" }}
        ></div>
        <Image
          src={d.img}
          alt=""
          className={`relative z-10  mx-auto ${d.className}`}
        />
      </div>

      <div
        className={` bg-awarc_card_back mt-[-5px] py-4 px-3 text-center rounded-b-[30px] ${
          d.img === award_card5 && "!py-1"
        }`}
      >
        <h1 className="text-white text-lg font-semibold">{d.title}</h1>
      </div>
    </div>
  );
};
