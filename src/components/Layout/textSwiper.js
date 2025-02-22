"use client";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Button } from "../ui/button";
import Image from "next/image";
import { FaCaretRight, FaArrowLeft, FaArrowRight } from "react-icons/fa";

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
    title: "Pro",
    features: [
      "Spread From 0.2 Pip",
      "ECN Execution",
      "Leverage Up to 1:200",
      "Minimum Lot size 0.01",
      "Access to Automated Trading",
      "Minimum Deposit $500",
      "Commission $5 per lot",
      "Swap-Free Islamic Account",
      "50% Deposit Bonus",
    ],
  },
  {
    title: "Pro",
    features: [
      "Spread From 0.2 Pip",
      "ECN Execution",
      "Leverage Up to 1:200",
      "Minimum Lot size 0.01",
      "Access to Automated Trading",
      "Minimum Deposit $500",
      "Commission $5 per lot",
      "Swap-Free Islamic Account",
      "50% Deposit Bonus",
    ],
  },
  {
    title: "Pro",
    features: [
      "Spread From 0.2 Pip",
      "ECN Execution",
      "Leverage Up to 1:200",
      "Minimum Lot size 0.01",
      "Access to Automated Trading",
      "Minimum Deposit $500",
      "Commission $5 per lot",
      "Swap-Free Islamic Account",
      "50% Deposit Bonus",
    ],
  },
  {
    title: "Pro",
    features: [
      "Spread From 0.2 Pip",
      "ECN Execution",
      "Leverage Up to 1:200",
      "Minimum Lot size 0.01",
      "Access to Automated Trading",
      "Minimum Deposit $500",
      "Commission $5 per lot",
      "Swap-Free Islamic Account",
      "50% Deposit Bonus",
    ],
  },
];

const RealAccountTypes = () => {
  const swiperRef = useRef(null);

  return (
    <div className="w-full bg-[#fff] pt-[100px] h-screen flex gap-[50px] relative">
      {/* أزرار التحكم خارج السويبر */}
      <button
        onClick={() => swiperRef.current?.slidePrev()}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full shadow-lg z-10 hover:bg-gray-700 transition"
      >
        <FaArrowLeft size={20} />
      </button>

      <div className="w-[70%]">
        <Swiper
          ref={swiperRef}
          modules={[Autoplay, Pagination]}
          spaceBetween={10}
          slidesPerView={2}
          autoplay={{ delay: 3000 }}
          pagination
          className="!p-8"
          onSwiper={(swiper) => (swiperRef.current = swiper)}
        >
          {cryptoData.map((crypto, index) => (
            <SwiperSlide key={index}>
              <div className="p-6 bg-gray-900 bg-cover bg-center h-[450px] w-[350px] rounded-xl text-white flex flex-col items-center shadow-lg">
                <h3 className="text-[41px] font-bold">{crypto.title}</h3>
                <div className="mt-3">
                  {crypto.features.map((item, idx) => (
                    <p key={idx} className="text-[16.5px] font-medium mt-[.4rem] flex items-center">
                      <FaCaretRight className="mr-2 text-blue-400" />
                      {item}
                    </p>
                  ))}
                </div>
                <Button className="button-border hover:bg-blue-600 p-[21px_18px] max-w-[235px] m-auto mt-4">
                  Open Demo Account <FaCaretRight />
                </Button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* زر الانتقال للأمام */}
      <button
        onClick={() => swiperRef.current?.slideNext()}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full shadow-lg z-10 hover:bg-gray-700 transition"
      >
        <FaArrowRight size={20} />
      </button>
    </div>
  );
};

export default RealAccountTypes;
