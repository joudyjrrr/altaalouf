import React from "react";
import Title from "./Title";
import { ParthnerImg } from "../../../public/images";
import Image from "next/image";
import { Button } from "../ui/button";

const MeetOurPartnersSection = () => {
  return (
   <div className="bg-optimizer_parthner_bg max-mdd:bg-optimizer_start">
     <div className="w-full  bg-parthner_bg p-8 max-mdd:bg-star_background2 max-mdd:bg-center max-mdd:bg-cover">
      <div className="flex w-full justify-center gap-56 max-sLg:gap-8 max-sLg:pe-8 px-8 pe-24 max-mdd:flex-col max-md:px-0 max-mdd:gap-4 max-mdd:pe-0">
        <div className="flex flex-col gap-8 text-white  justify-start  pt-24 max-md:!pt-0 items-start max-mdd:items-center text-start max-mdd:text-center">
          <Title
            title1={`Meeet Our`}
            title2={`Parthners`}
            classNameTitle={`max-[1300px]:text-2xl`}
            className="!justify-start max-mdd:!justify-center"
          />
          <div className="flex flex-col gap-1 mt-4 max-mdd:mt-1 text-white text-lg max-mdd:text-sm">
            <p>
              Discover our trusted partner, committed to innovation,
              collaboration,
            </p>
            <p>
              and excellence, working with us to deliver exceptional solutions
            </p>
            <p> create lasting value for our clients and communities</p>
          </div>
          <Button variant={`gradiant`} className="max-mdd:hidden">See More</Button>
        </div>
        <Image
          src={ParthnerImg}
          alt=""
          className="pt-8 h-[450px] w-[450px] max-mdd:!h-[350px] max-mdd:!w-[350px] max-mdd:mx-auto "
        />
      </div>
    </div>
   </div>
  );
};

export default MeetOurPartnersSection;
