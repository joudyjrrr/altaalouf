import React, { useRef } from "react";
import Title from "./Title";
import { why1, why2, why3 } from "../../../public/images";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination"
import Image from "next/image";

const data = [
  {
    img: why1,
    title: "Trusted Broker ",
    desc: "INZO L.L.C is incorporated in SVG with registration number 967 LLC 2021.",
  },
  {
    img: why2,
    title: "Instruments Diversity ",
    desc: "Trade over 400 Global Instruments from FX, Metals Shares, and Indices",
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
  return (
    <div className="pb-8">
      <div className=" bg-MultiStarTop bg-no-repeat  bg-top w-full h-full">
        <Title
          title1={`Why choose`}
          title2={`INZO?`}
          classNameTitle2="!text-primary"
        />
      </div>
      <div className="flex w-full justify-center flex-col items-center text-lg mt-8">
        <p>
          It’s simple. We value trust, transparency and a high level of
          professionalism above all, offering our clients the
        </p>
        <p> right tools to enhance their trading journey.</p>
      </div>
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={10}
        slidesPerView={3}
        autoplay={{ delay: 5000 }}
        pagination={{
          el: ".custom-pagination2",
          clickable: true,
        }}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        className="!p-8"
      >
        {data.map((d, index) => (
          <SwiperSlide key={index}>
            <div className="bg-card_why py-8 px-4 flex flex-col justify-center gap-4  text-white h-full rounded-xl ">
              <div className="flex gap-2 items-center text-white">
                <Image src={d.img} alt="" width={50} height={50}/>
                <h1 className=" mask-gradient text-2xl font-semibold">{d.title}</h1>
              </div>
              <p className="text-white text-lg">{d.desc}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="bg-MultiStarBottom  bg-no-repeat  bg-bottom flex justify-center items-center gap-32 mt-6 relative z-[2000]">
        <button
          onClick={() => swiperRef.current?.slidePrev()}
          className="relative z-[2000]"
        >
          <h1 className="text-[80px] font-bold mask-gradient">{`<`}</h1>
        </button>

        <div className="custom-pagination2  Why flex justify-center gap-2 absolute !top-[70px] !end-[47%]"></div>

        <button
          onClick={() => swiperRef.current?.slideNext()}
          className="relative z-[2000]"
        >
          <h1 className="text-[80px] font-bold mask-gradient">{`>`}</h1>
        </button>
      </div>
      
    </div>
  );
};

export default WhyInzo;
