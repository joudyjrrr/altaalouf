import Image from "next/image";
import { arrow } from "../../../public/images";
import Link from "next/link";
import { useEffect, useState } from "react";
import useLanguageDirection from "@/i18n/useLanguageDirection";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
const OurTeamSection = ({ imgData, showButton, className }) => {
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
    <>
      <div className={`  w-full pt-24 max-md:hidden mx-auto justify-center items-center grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5  md:px-8 gap-4 place-content-center ${className} `}>
        {imgData.map((image, index) => (
          <div key={index}>
            <TeamCard image={image} index={index} showButton={showButton} />
          </div>
        ))}
      </div>
      <Swiper
        key={swiperKey}
        modules={[Autoplay]}
        pagination={{
          el: ".custom-pagination3",
          clickable: true,
        }}
        dir={dir}
        spaceBetween={10}
        slidesPerView={2}
        autoplay={{ delay: 15000 }}
        className="w-full mt-12 !hidden max-md:!block "
      >
        {imgData.map((image, index) => (
          <SwiperSlide key={index} className={`!h-[320px] !w-[235px] ${index === 0 && '!ms-4'} ${index % 2 === 0 ? "mb-14" : "mt-14"
            } relative `}>
            <TeamCard image={image} index={index} showButton={showButton} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default OurTeamSection;


const TeamCard = ({ image, index, showButton }) => {
  return (
    <div
      key={index}
      className={`h-[320px] w-[235px]   mx-auto ${index % 2 === 0 ? "md:mb-14" : " md:mt-14"
        } relative `}
    >
      <Image src={image.img} alt="" className="w-full h-full" />
      {showButton && (
        <Link href={`/our-team/${image.name}`}>
          <div
            className="absolute bottom-[2px] 
          right-[1px] w-[60px] h-[50px] rounded-br-[1.15rem] rounded-tl-[1.3rem]
        text-black bg-secondary cursor-pointer flex items-center justify-center "
          >
            <Image src={arrow} alt="" className="w-[20px] h-[15px]" />
          </div>
        </Link>
      )}
      <div className="absolute bottom-[5px] left-[0px] h-[45px] font-bold text-lg text-white">
        {image.name}
      </div>
      <div className="absolute bottom-[0px] left-[0px] text-sm text-white">
        {image.role}
      </div>
    </div>
  )
}