"use client";
import Banner from "@/components/Layout/Banner";
import RealAccountTypes from "@/components/Layout/RealAccountTypes";
import Header from "@/components/Layout/Header";
import Title from "@/components/Layout/Title";
import { Button } from "@/components/ui/button";
import { Ethereum, BNB, Bitocin, shiba } from "../../../public/images";
import Link from "next/link";
import { useTranslations } from "next-intl";
import useLanguageDirection from "@/i18n/useLanguageDirection";
import { IoMdArrowDropup } from "react-icons/io";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import Image from "next/image";
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

export default function Home() {
  const t = useTranslations();
  useLanguageDirection();
  return (
    <div className="w-full overflow-x-hidden">
      <div className="w-full h-full bg-[#3040614]">
      <Banner />
       { /*
        <div className="w-full bg-[#0D0D2B] pb-3">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={20}
            slidesPerView={3}
            autoplay={{ delay: 3000 }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 4 },
            }}
            className="px-6"
          >
            {cryptoData.map((crypto, index) => (
              <SwiperSlide key={index}>
                <div className="button-border  rounded-xl">
                  <div className="p-6 bg-card_bakgound  rounded-xl text-white flex flex-col items-center">
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
        </div> */}
        <RealAccountTypes/>
      </div>

    </div>
  );
}
