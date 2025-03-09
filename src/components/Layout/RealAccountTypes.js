"use client";
import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Button } from "../ui/button";
import Image from "next/image";
import {
  FaChevronRight,
  FaCaretRight,
  FaArrowLeft,
  FaArrowRight,
  FaChevronLeft,
} from "react-icons/fa";
import {
  syrcleGlass2,
  syrcleGlass,
  arrowRight,
  arrowLeft,
  arrowIcon,
  cardLogo,
  cardLogo1,
  cardLogo2,
} from "../../../public/images";
import Title from "./Title";
import Switch from "./Switch";
import useLanguageDirection from "@/i18n/useLanguageDirection";

const cryptoData = [
  {
    title: "Standard",
    logo: cardLogo,
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
    logo: cardLogo1,
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
    logo: cardLogo2,
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
  const [dir, setDir] = useState("ltr");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setDir(localStorage.getItem("dir") || "ltr");
    }
  }, []);

  const [swiperKey, setSwiperKey] = useState(0);
  useLanguageDirection();
  useEffect(() => {
    setSwiperKey((prevKey) => prevKey + 1);
  }, [dir]);
  useLanguageDirection();
  return (
    <div className="bg-white md:ps-12 md:px-3 md:mt-20 relative">
      <Image
        src={syrcleGlass}
        alt="icon"
        width={190}
        height={190}
        className="me-4 absolute -z-3 top-[0px] left-0"
      />{" "}
      ``
      <Image
        src={syrcleGlass2}
        alt="icon"
        width={90}
        height={90}
        className="me-4 absolute -z-3 -top-[110px]   right-0"
      />
      <Title
        title1={`Real Accounts`}
        title2={`Types`}
        title1Color={"text-secondary"}
        title2Color={"!text-primary"}
      />
      <div className="w-full  flex flex-col md:flex-row relative mt-12">
        {/* Custom Pagination Container */}
        <div className="flex flex-col md:gap-4 items-center justify-center md:items-start ">
          <Switch />
          <p className="text-center md:text-start md:leading-[40px] md:w-[360px] text-[1.2rem] md:text-[24px] font-semibold md:pt-5 text-[#030613]">
            INZO offer several types of accounts that are suitable for different
            trading environments.
          </p>

          <div className="flex  items-center justify-between gap-x-5 pt-4  md:pt-20 w-[200px]">
            <button
              onClick={() => swiperRef.current?.slidePrev()}
              className="transform "
            >
              <Image
                src={arrowLeft}
                alt="icon"
                width={22}
                height={22}
                className="me-4  rtl:rotate-180"
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
                className="me-4  rtl:rotate-180"
              />
            </button>
          </div>
        </div>

        {/* Swiper Container */}
        <div className="w-[1000px] md:w-[75%] md:ms-22 mt-[20px] md:mt-0">
          <Swiper
            key={swiperKey}
            ref={swiperRef}
            modules={[Autoplay, Pagination]}
            spaceBetween={1}
            slidesPerView={1}
            autoplay={{ delay: 3000 }}
            pagination={{
              el: "#custom-pagination",
              clickable: true,
            }}
            breakpoints={{
              320: { slidesPerView: 1 }, // دعم الشاشات الصغيرة جدًا
              500: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 2 },
              1280: { slidesPerView: 2 },
            }}
            dir={dir}
            className="!p-7 md:!p-8  md:!pt-6"
            onSwiper={(swiper) => (swiperRef.current = swiper)}
          >
            {cryptoData.map((crypto, index) => (
              <SwiperSlide dir={dir} key={index}>
                <div
                  className="p-6 bg-card_Bg bg-cover bg-center w-[275px]
                   md:h-[450px] md:w-[350px] custom-shadow
                 rounded-xl text-white flex flex-col items-center md:items-start"
                >
                  <div className="w-full flex gap-4">
                    <div className="w-full flex flex-col ps-5">
                      <div className="flex justify-between overflow-visible max-h-[50px]">
                        <h3 className="text-md md:text-[41px] font-bold ">
                          {crypto.title}
                        </h3>
                        <Image
                          src={crypto.logo}
                          alt="icon"
                          className="w-[97px] h-[97px] relative bottom-[15px]"
                        />
                      </div>
                      <div className="mt-3">
                        {crypto.features.map((item, index) => (
                          <p
                            key={index}
                            className="md:text-[16.5px] font-medium md:mt-[.4rem] flex items-center "
                          >
                            <Image
                              src={arrowIcon}
                              alt="icon"
                              width={12}
                              height={12}
                              className="me-4"
                            />
                            {item}
                          </p>
                        ))}
                      </div>
                      <Button className="button-border hover:bg-main_button  p-[21px_18px] max-w-[235px] m-auto mt-4">
                        Open Demo Account <FaCaretRight />
                      </Button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default RealAccountTypes;
