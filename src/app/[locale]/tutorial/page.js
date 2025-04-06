"use client";
import React, { useEffect, useRef, useState } from "react";
import { tutorial, arrowLeft, arrowRight } from "../../../../public/images";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import useLanguageDirection from "@/i18n/useLanguageDirection";
import DwMethods from "@/components/Layout/DwMethods";

const Page = () => {
  const [dir, setDir] = useState("ltr");
  const swiperRef = useRef(null);
  const [swiperKey, setSwiperKey] = useState(0);
  useEffect(() => {
    setSwiperKey((prevKey) => prevKey + 1);
  }, [dir]);
  useEffect(() => {
    if (typeof window !== "undefined") {
      setDir(localStorage.getItem("dir") || "ltr");
    }
  }, []);

  useLanguageDirection();
  return (
    <div className="w-full h-full">
      <div className="w-full  bg-optimizer_ourTeamBg    bg-cover bg-top bg-no-repeat  ">
        <div className="w-full pt-32 bg-ourTeamBg max-sm:bg-banner_page_mobile  bg-cover bg-center bg-no-repeat z-[100]">
          <div className="w-full pt-32 max-sm:pt-16  text-center h-full flex justify-center items-center gap-8 max-md:gap-4 flex-col">
            <div className="flex gap-2 text-5xl max-sm:text-4xl font-semibold text-center justify-center">
              <h1 className={`text-secondary `}>{`Forex `}</h1>
              <h1 className={`text-white `}>{`Tutorials`}</h1>
            </div>

            <div className="flex flex-col gap-1  text-white text-lg mx-8 max-mdd:mx-4 max-mdd:text-base max-sm:text-sm">
              <p>
                Join and trade through social networking, benefiting from the
                knowledge of trading experts to easily
              </p>
              <p>
                copy the best traders from around the world and achieve your
                goals! Join and trade through social
              </p>
              <p>networking, benefiting from knowledge.</p>
            </div>

            <div className="relative flex justify-center pb-24 max-mdd:pb-8 max-mdd:pt-8 max-mdd:px-4">
              <div className="absolute w-[90%] top-[230px] h-[50%] opacity-80 blur-[384px] bg-toutorial_gr_img"></div>
              <Image
                src={tutorial}
                alt=""
                className="w-[800px] relative z-[100]"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-b tutorial from-[#0F2147] via-[#0F2147] via-100% to-[#0f2147] relative">
        <div className="bg-award_back h-full py-24 relative">
          <div className="absolute w-full h-[35%] bg-primary end-0 bottom-0"></div>
          <div className="w-full flex justify-center relative px-24 max-xsLg:!px-8 max-sm:px-4">
            <div className=" flex justify-between items-center px-32 max-sm:px-28 w-full absolute end-0 max-xsLg:!top-[130%] top-[30%] max-md:!bottom-0 z-[2000]">
              <button
                onClick={() => swiperRef.current?.slidePrev()}
                className="relative z-[2000]"
              >
                <Image
                  src={arrowLeft}
                  alt="icon"
                  className="me-4 rtl:rotate-180  w-[20px] max-mdd:w-[15px] h-[20px] max-mdd:h-[18px]"
                />
              </button>
              <div
                style={{
                  top: "-4px !important",
                }}
                className="custom-pagination3 hidden max-xsLg:flex  end-[40%]  justify-center gap-2 !top-0 absolute z-[1000000000000]"
              ></div>
              <button
                onClick={() => swiperRef.current?.slideNext()}
                className="relative z-[2000]"
              >
                <Image
                  src={arrowRight}
                  alt="icon"
                  className="me-4 rtl:rotate-180  w-[20px] max-mdd:w-[15px] h-[20px] max-mdd:h-[18px]"
                />
              </button>
            </div>
            <Swiper
              key={swiperKey}
              onSwiper={(swiper) => (swiperRef.current = swiper)}
              modules={[Pagination, Navigation]}
              spaceBetween={1}
              slidesPerView={"auto"}
              autoplay={{ delay: 7000 }}
              centeredSlides={true}
              initialSlide={1}
              pagination={{
                el: ".custom-pagination3",
                clickable: true,
              }}
              breakpoints={{
                320: { slidesPerView: 1.5, centeredSlides: false, initialSlide: 0, spaceBetween: 10 },
                768: { slidesPerView: 1.5 },
                1024: { slidesPerView: 3 },
              }}
              className="!w-[75%] max-xsLg:!w-[100%] !mx-0 !px-0"
            >
              {[...Array(3)].map((_, index) => (
                <SwiperSlide
                  key={index}
                  className="relative !w-[300px] max-sm:!w-[200px] !h-[200px] max-sm:rounded-[12px] max-sm:!h-[140px]"
                >
                  <div className="next-prev"></div>
                  <Image
                    src={tutorial}
                    alt=""
                    className="!w-full !h-full z-[-1]  max-sm:rounded-[12px]"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>

      <DwMethods />
    </div>
  );
};

export default Page;
