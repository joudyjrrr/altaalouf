"use client";
import React, { useEffect, useRef, useState } from "react";
import Title from "./Title";
import {
  location1,
  location2,
  location3,
  Testimonials,
  Testimonials1,
  gold_star,
  coma,
  arrowLeft,
  arrowRight,
} from "../../../public/images";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Image from "next/image";
import { Button } from "../ui/button";
import useLanguageDirection from "@/i18n/useLanguageDirection";

const data = [
  {
    img: location1,
    title: "United Arab Emirates",
  },
  {
    img: location2,
    title: "London",
  },
  {
    img: location3,
    title: "Lebanon",
  },
  {
    img: location3,
    title: "Lebanon",
  },
  {
    img: location1,
    title: "United Arab Emirates",
  },
];
const dataTestimonials = [
  {
    img: Testimonials1,
  },
  {
    img: Testimonials1,
  },

  {
    img: Testimonials1,
  },
];
const RepresentativeSection = () => {
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
    <div className="bg-location_bg bg-center bg-no-repeat bg-cover h-full Testimonials  ">
      <div className="w-full h-full">
        <Title
          title1={`Representative`}
          title2={`Location`}
          title2Color={`white`}
        />
        <Swiper
          key={swiperKey}
          modules={[Autoplay]}
          spaceBetween={30}
          slidesPerView={3.3}
          autoplay={{ delay: 5000 }}
      
          dir={dir}
          className="!p-8 mt-12"
          breakpoints={{
            320: { slidesPerView: 1 },
            500: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3.3, spaceBetween: 30 },
          }}
        >
          {data.map((d, index) => (
            <SwiperSlide dir={dir} key={index}  className="location-content">
              <div className={`bg-location_back  rounded-xl gap-12 h-[526px] bg-no-repeat bg-center flex justify-start p-8 max-md:pt-20 flex-col items-center`}>
                <Image src={d.img} alt="" height={230} />
                <h1 className="text-2xl font-semibold text-white">{d.title}</h1>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>


      </div>
      <div className="flex justify-between w-full items-center pe-16 h-[200px] max-md:!pe-0 max-md:!px-2 ">
        <div
          className={`relative w-full bg-transparent flex justify-center items-center text-center pt-8 `}
        >
          <Image
            src={Testimonials}
            width={500}
            className="image-mask"
            alt="inzo"
          />
          <div className="absolute top-[75px] flex gap-2 text-5xl max-md:!text-[14px] font-bold">
            <h1 className={`text-secondary`}>{`What  People Are`}</h1>
            <h1 className={`text-white`}>{`Saying`}</h1>
          </div>
        </div>
        <div className="w-full flex justify-end items-center h-full pt-12">
          <Button variant={`gradiant`}>
            View More
          </Button>
        </div>
      </div>
      <div className="relative testimonials pb-10 ps-16">
        <div className=" flex justify-center items-center gap-32 mt-12 absolute end-0 bottom-[20%] max-md:!bottom-0 z-[2000]">
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            className="relative z-[2000]"
          >
            <Image
              src={arrowLeft}
              alt="icon"
              width={22}
              height={22}
              className="me-4 rtl:rotate-180 "
            />
          </button>
          <div
            style={{
              top: "10px !important",
            }}
            className="custom-pagination3   flex justify-center gap-2 !top-0 absolute z-[1000000000000]"
          ></div>
          <button
            onClick={() => swiperRef.current?.slideNext()}
            className="relative z-[2000]"
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

        <Swiper
          key={swiperKey}
          modules={[Autoplay, Pagination, Navigation]}
          pagination={{
            el: ".custom-pagination3",
            clickable: true,
          }}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          dir={dir}
          spaceBetween={40}
          slidesPerView={1}
          autoplay={{ delay: 7000 }}
          breakpoints={{
            320: { slidesPerView: 1 },
            500: { slidesPerView: 1 },
            768: { slidesPerView: 1 },
            1024: { slidesPerView: 1.4, spaceBetween: 30 },
          }}
          className="p-8 mt-10 max-md:p-4 mb-12 "
        >
          {dataTestimonials.map((d, index) => (
            <SwiperSlide
              dir={dir}
              key={index}
              className="max-md:w-full testimonial-slide"
            >
              <div className=" rounded-xl testimonial-content ">
                <div className="bg-testemoneaialsCardBg bg-cover bg-center  pb-24 gap-8  rounded-xl bg-no-repeat flex flex-col  p-8 relative z-10">
                  <div className="flex justify-between items-center">
                    <div className="flex gap-8 ps-12">
                      <Image
                        src={d.img}
                        alt=""
                        className="max-md:w-[100px] w-[120px] h-[120px] relative z-[100]"
                      />
                      <div className="flex flex-col text-white justify-center">
                        <h1 className="text-3xl font-semibold max-md:text-sm">
                          Hashim Al-Sakkal
                        </h1>
                        <div className="flex gap-4 mt-4">
                          {[...Array(5)].map((_, i) => (
                            <Image
                              key={i}
                              src={gold_star}
                              alt=""
                              width={28}
                              height={28}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                    <p className="text-secondary text-xl font-medium max-md:text-sm">
                      2021-05-05
                    </p>
                  </div>
                  <div className="flex items-start gap-8 w-full  ps-32">
                    <div className="flex flex-col gap-1 text-white text-xl max-md:!text-xl">
                      <p>
                        From my experience with INZO, I've opened more than one
                      </p>
                      <p>
                        account with different brokers, but finally, I found
                        this
                      </p>
                      <p>broker has many advantages...</p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default RepresentativeSection;
