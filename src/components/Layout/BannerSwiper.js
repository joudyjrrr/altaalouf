"use client"
import React, { useEffect, useState } from 'react'
import { IoMdArrowDropup } from "react-icons/io";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import Image from "next/image";
import { Ethereum, BNB, Bitocin, shiba } from "../../../public/images"
import useLanguageDirection from '@/i18n/useLanguageDirection';
const cryptoData = [
  {
    name: "Bitcoin (BTC)",
    price: "$46,755.00",
    change: "+7.45%",
    icon: Bitocin,
  },
  {
    name: "Ethereum (ETH)",
    price: "$2,308.64",
    change: "+5.33%",
    icon: Ethereum,
  },
  { name: "BNB (BNB)", price: "$298.75", change: "+1.35%", icon: BNB },
  { name: "Shiba Inu (SHIB)", price: "$0.0594", change: "+7.4%", icon: shiba },
  {
    name: "Bitcoin (BTC)",
    price: "$46,755.00",
    change: "+7.45%",
    icon: Bitocin,
  },
  {
    name: "Ethereum (ETH)",
    price: "$2,308.64",
    change: "+5.33%",
    icon: Ethereum,
  },
];

const BannerSwiper = () => {
  const [dir, setDir] = useState("ltr");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setDir(localStorage.getItem("dir") || "ltr");
    }
  }, []); 

  useLanguageDirection();
  return (
    <div className="w-full  pb-3">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={10}
        slidesPerView={1} // جعل الافتراضي شريحة واحدة
        autoplay={{ delay: 3000 }}
        breakpoints={{
          320: { slidesPerView: 1 }, // دعم الشاشات الصغيرة جدًا
          500: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 4 },
        }}
        dir={dir}
        className="px-6"
      >
        {cryptoData.map((crypto, index) => (
          <SwiperSlide dir={dir} key={index}>
            <div className="button-border  rounded-xl">
              <div className="p-6 bg-card_bakgound text-start  rounded-xl text-white flex flex-col items-center">
                <div className="w-full flex gap-4">
                  <Image
                    src={crypto.icon}
                    alt={crypto.name}
                    width={70}
                    height={70}
                  />
                  <div className="w-full flex flex-col ">
                    <h3 className="text-xl font-semibold mt-2">
                      {crypto.name}
                    </h3>
                    <p className="text-xl font-medium mt-1 flex items-center">
                      {crypto.price}{" "}
                      <IoMdArrowDropup className="text-[#14FF38] mt-3" />
                      <span className="text-[#14FF38] font-medium mt-1  ">
                        {crypto.change}
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default BannerSwiper