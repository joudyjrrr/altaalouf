"use client";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Button } from "../ui/button";
import SwiperCard from "./SwiperCard";
import Image from "next/image";
import { FaCaretRight } from "react-icons/fa";
import {
  arrowRight,
  arrowLeft,
  arrowIcon,
  cardLogo,
} from "../../../public/images";
import Title from "./Title";
import Switch from "./Switch";

const cryptoData = [
  {
    title: "Standard",
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

const RealAccountTypes = () => {
  const swiperRef = useRef(null);

  return (
    <div className="bg-white ps-12">
      <Title
        title1={`Real Accounts`}
        title2={`Types`}
        title1Color={"secondary"}
        title2Color={"primary"}
      />
      <div className="w-full  flex  relative mt-7">
        {/* Custom Pagination Container */}
        <div className="flex-col gap-4 ">
          <Switch />
          <p className="leading-[40px] md:w-[360px] text-[24px] font-semibold pt-5 text-[#030613]">
            INZO offer several types of accounts that are suitable for different
            trading environments.
          </p>
          <div className="flex  items-center justify-between gap-x-5  pt-20 w-[200px]">
            <button
              onClick={() => swiperRef.current?.slidePrev()}
              className="transform "
            >
              <Image
                src={arrowLeft}
                alt="icon"
                width={22}
                height={22}
                className="me-4  "
              />
            </button>

            <div
              className=" transform 
           z-10 text-black bg-white h-fit w-fit mx-auto flex justify-center"
              id="custom-pagination"
            ></div>

            <button
              onClick={() => swiperRef.current?.slideNext()}
              className="  transition"
            >
              <Image
                src={arrowRight}
                alt="icon"
                width={22}
                height={22}
                className="me-4  "
              />
            </button>
          </div>
        </div>

        {/* Swiper Container */}
        <div className="w-[75%] ms-22">
          <Swiper
            ref={swiperRef}
            modules={[Autoplay, Pagination]}
            spaceBetween={10}
            slidesPerView={2}
            autoplay={{ delay: 3000 }}
            pagination={{
              el: "#custom-pagination",
              clickable: true,
            }}
            className="!p-8"
            onSwiper={(swiper) => (swiperRef.current = swiper)}
          >
            {cryptoData.map((cardData, index) => (
              <SwiperSlide key={index}>
                <SwiperCard cardData={cardData} className="custom-shadow" />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default RealAccountTypes;
