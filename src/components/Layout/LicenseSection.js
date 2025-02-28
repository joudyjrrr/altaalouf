"use client"
import React, { useRef, useEffect, useState } from "react";
import Title from "./Title";
import {
  License4,
  License3,
  License5,
  arrowRight,
  arrowLeft,
} from "../../../public/images";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/navigation";

import useLanguageDirection from "@/i18n/useLanguageDirection";

const LicenseSection = () => {
  const swiperRef = useRef(null);
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
    <div className="bg-[#08142efc]">
      <div className=" bg-License_gradient py-8">
        <div className=" bg-License_Bg h-full bg-top bg-no-repeat">
          <Title title1={`License`} title2={`Certificate`} />
        </div>
      </div>

      <div className="w-full h-full relative px-24 max-md:px-4">
        <Swiper
         key={swiperKey}
         modules={[Autoplay, Pagination, Navigation]}
         spaceBetween={10}
         slidesPerView={1} // تأكد أن هذا الإعداد ثابت دائمًا
         autoplay={{ delay: 5000, reverseDirection: dir === "rtl" }}
         pagination={{ el: ".custom-pagination", clickable: true }}
         dir={dir}
         onSwiper={(swiper) => (swiperRef.current = swiper)}
         className="!p-8 max-md:!p-2"
        >
          {[...Array(2)].map((_, index) => (
            <SwiperSlide key={index}>
              <div className="bg-License_Bg2 bg-no-repeat h-full relative flex items-center p-1 gap-8 my-3 rounded-xl">
                <div className="relative h-full flex items-start">
                  <Image
                    src={License3}
                    alt=""
                    width={150}
                    className="h-full rtl:rotate-180"
                  />
                  <Image
                    src={License4}
                    alt=""
                    width={120}
                    height={300}
                    className="absolute top-[25%] start-0"
                  />
                </div>
                <div className="flex flex-col text-white py-8 max-md:py-2 gap-4 w-full">
                  <div className="flex flex-col text-lg gap-2 font-semibold max-md:text-sm max-sm:!text-xs">
                    <h1>
                      SAINT VINCENT AND THE GRENADINES LIMITED LIABILITY
                      COMPANIES ACT,
                    </h1>
                    <h1>
                      CHAPTER 151 OF THE REVISED LAWS OF SAINT VINCENT AND THE
                      GRENADINES, 2009
                    </h1>
                  </div>
                  <div className="flex flex-col text-lg gap-2 max-md:text-sm max-sm:!text-xs">
                    <p>
                      (Section 12 (5)) Certificate of Formation INZO LLC (NAME
                      OF LIMITED LIABILITY COMPANY) 967 LLC 2021 (LIMITED
                      LIABILITY COMPANY NUMBER)
                    </p>
                    <p>
                      I HEREBY CERTIFY THAT THE APPLICATION OF FORMATION OF THE
                      ABOVE-MENTIONED LIMITED LIABILITY COMPANY WAS FORMED UNDER
                      THE LIMITED LIABILITY COMPANIES ACT, CHAPTER 151 OF THE
                      REVISED LAWS OF SAINT VINCENT AND THE GRENADINES, 2009 ON
                      6th April, 2021 (Date of Formation) REGISTRAR LIMITED
                      LIABILITY COMPANIES
                    </p>
                  </div>
                  <div className="flex flex-col text-lg gap-2 font-semibold max-md:text-sm max-sm:!text-xs">
                    <h1>6th April, 2021 (Date of Formation)</h1>
                    <h1>REGISTRAR LIMITED LIABILITY COMPANIES</h1>
                  </div>
                </div>
                <Image
                  src={License5}
                  alt=""
                  width={150}
                  className="absolute bottom-[5%] end-[10%]"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="bg-License_Bg py-2 flex justify-center items-center gap-24 mt-6 relative z-[2000]">
        <button onClick={() => swiperRef.current?.slidePrev()} className="relative z-[2000]">
          <Image
            src={arrowLeft}
            alt="icon"
            width={22}
            height={22}
            className="me-4 rtl:rotate-180"
          />
        </button>

        <div className="custom-pagination License flex justify-center gap-2 absolute !top-[52px] !end-[45%] rtl:!end-[0%]"></div>

        <button onClick={() => swiperRef.current?.slideNext()} className="relative z-[2000]">
          <Image
            src={arrowRight}
            alt="icon"
            width={22}
            height={22}
            className="me-4 rtl:rotate-180"
          />
        </button>
      </div>
    </div>
  );
};

export default LicenseSection;
