"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useTranslations } from "next-intl";
import { Button } from "../ui/button";
import {
  FaCaretRight,
  FaFacebookF,
  FaInstagram,
  FaTelegramPlane,
  FaYoutube,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import VerticalSotial from "./VerticalSotial";
const Slider = [
  {
    title: "accountStandard9",
    desc: "carouselCaption4",
    key_desc: "WELCOME_BOUNES_PERCENTAGE",
    num_esc: "30",
    // desc: "قم بإيداع الأموال في حسابك واحصل على ٪30 بونص على إيداعك",
  },
  {
    title: "carouselCaption1",
    desc: "carouselCaption2",
    key_desc: "TRADING_TOOLS:20",

    // desc: " تداول بأكثر من 400 أداة عالمية من العملات الأجنبية والأسهم والمعادن والسلع مع  ",
    // span2: "INZO انزو",
  },
  {
    title: "carouselCaption5",
    num: "30$",
    desc: "carouselCaption6",
    key_desc: "WELCOME_BOUNES : 20",

    // desc: "قم بإيداع الأموال في حسابك واحصل على ٪30 بونص على إيداعك",
  },
];

const Banner = () => {
  const t = useTranslations();
  return (
    <div className="w-full pt-4 bg-banner h-[100vh]  bg-cover bg-center bg-no-repeat   z-[100]">
      <div className="flex justify-between relative w-full  mt-[70px]">
        <div className="w-full flex justify-start text-white pt-20  px-16 max-lg:px-4 max-xs:!pb-32">
          <div className="flex flex-col gap-4 ">
            <h1 className="text-7xl font-extrabold">Trade Like a </h1>
            <h1 className="text-7xl font-extrabold text-secondary">Legend</h1>
            <div>
              <p className="text-2xl">
                Trade over 400 Global Instruments from FX,
              </p>
              <p className="text-2xl">
                {" "}
                Metals Shares, and Indices with{" "}
                <span className="font-semibold">INZO</span>.
              </p>
            </div>
            <div className="flex gap-4 items-center">
              <Button className="bg-main_button  transition-all duration-800">
                Open Real Account
                <FaCaretRight />
              </Button>
              <Button className="button-border">
                Open Demo Account <FaCaretRight />
              </Button>
            </div>
          </div>
        </div>
        <VerticalSotial />
      </div>
    </div>
  );
};

export default Banner;
