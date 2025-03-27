import Image from "next/image";
import { arrow } from "../../../public/images";
import Link from "next/link";
const OurTeamSection = ({ imgData, showButton , className}) => {
  return (
    <div className={`  w-full pt-24 mx-auto justify-center items-center grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5  md:px-8 gap-4 place-content-center ${className} `}>
      {imgData.map((image, index) => (
        <div
          key={index}
          className={`h-[320px] w-[235px]  mx-auto ${
            index % 2 === 0 ? "md:mb-14" : " md:mt-14"
          } relative `}
        >
          <Image  src={image.img} alt="" className="w-full h-full" />
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
      ))}
    </div>
  );
};

export default OurTeamSection;
