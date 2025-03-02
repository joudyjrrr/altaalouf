import { Button } from "../ui/button";
import Image from "next/image";
import { FaChevronRight } from "react-icons/fa";
import {
  mTeem1,
  mTeem2,
  mTeem3,
  mTeem4,
  mTeem5,
  arrow,
} from "../../../public/images";
import Title from "./Title";

let imgData = [
  { img: mTeem2, name: "Mark", role: "CEO" },
  { img: mTeem1, name: "Jason", role: "HR Manager" },
  { img: mTeem3, name: "Chris", role: "Finance Manager" },
  { img: mTeem5, name: "Natasia", role: "Insight Manager" },
  { img: mTeem4, name: "Andy", role: "B2B Manager" },
];

const MeetTeam = () => {
  return (
    <div
      className="relative pb-12 bg-gradient-to-b  from-[#050B1B] to-[#0F2147] 
      bg-no-repeat h-[auto] flex flex-col items-center justify-center"
    >
      <div className="absolute top-0 left-0 right-0 bg-teamStars_Bg h-[50%]"></div>

      <Title
        title1={`Meet the`}
        title2={`Teem`}
        title1Color={"white"}
        title2Color={"secondary"}
      />
      <div className=" w-full pt-16 mx-auto justify-center items-center grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5  md:px-8 gap-4 place-content-center">
        {imgData.map((image, index) => (
          <div
            key={index}
            className={`h-[320px] w-[235px]  mx-auto ${
              index % 2 === 0 ? "md:mb-14" : " md:mt-14"
            } relative `}
          >
            <Image src={image.img} alt="" className="w-full h-full" />
            <div
              className="absolute bottom-[2px] right-[1px] w-[60px] h-[50px] rounded-br-[1.15rem] rounded-tl-[1.3rem]
              text-black bg-secondary cursor-pointer flex items-center justify-center "
            >
              <Image src={arrow} alt="" className="w-[150px] h-[15px]" />
            </div>
            <div className="absolute bottom-[5px] left-[0px] h-[45px] font-bold text-[22px] text-white">
              {image.name}
            </div>
            <div className="absolute bottom-[0px] left-[0px] text-[17px] text-white">
              {image.role}
            </div>
          </div>
        ))}
      </div>

      <Button className="button-border px-5 py-6 font-semibold text-[18px] mx-auto mt-5">
        Meet The Whole Team
      </Button>
      {/* 
        <div className="relative w-[70%] h-[100%]
         bg-DwIcons_Bg bg-contain bg-no-repeat mt-10 mx-auto">     
        <div
          className="absolute bottom-5 right-[20%] flex
          flex-col items-center justify-center w-28 h-28 "
        >
          <Image src={bitcoine} alt="" />
        </div>
        </div>
        */}
    </div>
  );
};

export default MeetTeam;
