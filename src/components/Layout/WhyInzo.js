"use client";
import React, { useEffect, useRef, useState } from "react";
import Title from "./Title";
import {
  why1,
  why2,
  why3,
  arrowLeft,
  arrowRight,
} from "../../../public/images";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import useLanguageDirection from "@/i18n/useLanguageDirection";

const data = [
  {
    img: why1,
    title: "Trusted Broker ",
    desc: "INZO offer several types of accounts that are suitable for different trading environments",
  },
  {
    img: why2,
    title: "Instruments Diversity ",
    desc: "INZO offer several types of accounts that are suitable for different trading environments"
  },
  {
    img: why3,
    title: "Accounts Types ",
    desc: "INZO offer several types of accounts that are suitable for different trading environments",
  },
  {
    img: why3,
    title: "Accounts Types ",
    desc: "INZO offer several types of accounts that are suitable for different trading environments",
  },
  {
    img: why3,
    title: "Accounts Types ",
    desc: "INZO offer several types of accounts that are suitable for different trading environments",
  },
];
const WhyInzo = () => {
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
  useLanguageDirection();
  return (
    <div className="pb-8 bg-whayChozBg bg-no-repeat  bg-center w-full h-full">
      <div className="pt-4">
        <Title
          title1={`Why choose`}
          title2={`INZO?`}
          title1Color={"text-secondary"}
          title2Color={"!text-primary"}
        />
      </div>
      <div className="flex w-full  justify-center flex-col items-center text-lg max-md:text-sm text-center mt-16">
        <p>
          It’s simple. We value trust, transparency and a high level of
          professionalism above all, offering our clients the
        </p>
        <p> right tools to enhance their trading journey.</p>
      </div>
      <Swiper
        key={swiperKey}
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={10}
        slidesPerView={1}
        autoplay={{ delay: 5000 }}
        pagination={{
          el: ".custom-pagination2",
          clickable: true,
        }}
        dir={dir}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        className="!p-8 mt-8 "
        breakpoints={{
          500: { slidesPerView: 1 },
          768: { slidesPerView: 1 },
          1024: { slidesPerView: 2, spaceBetween: 30 },
          1270: { slidesPerView: 3.3, spaceBetween: 100 },
        }}
      >
        {data.map((d, index) => (
          <SwiperSlide key={index} dir={dir} className="w-[400px]">
            <div className="bg-card_why w-[400px] mx-4 py-8 ps-8 flex flex-col justify-center gap-4  text-white h-full rounded-xl ">
              <div className="flex gap-4 items-center text-white">
                <Image  src={d.img} alt="" width={65} height={65} />
                <h1 className=" mask-gradient text-2xl max-md:!text-xl font-semibold">{d.title}</h1>
              </div>
              <p className="text-white text-lg  max-md:!text-lg">{d.desc}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="pt-16  flex justify-center items-center gap-32 mt-6 relative z-[2000]">
        <button
          onClick={() => swiperRef.current?.slidePrev()}
          className="relative z-[2000]"
        >
          <Image
            src={arrowLeft}
            alt="icon"
            width={22}
            height={22}
            className="mx-8  rtl:rotate-180"
          />
        </button>

        <div className="custom-pagination2  Why flex justify-center gap-2 absolute !top-[70px] !end-[47%] rtl:!end-0"></div>

        <button
          onClick={() => swiperRef.current?.slideNext()}
          className="relative z-[2000]"
        >
          <Image
            src={arrowRight}
            alt="icon"
            width={22}
            height={22}
            className="mx-8  rtl:rotate-180"
          />
        </button>
      </div>
    </div>
  );
};

export default WhyInzo;
