import React from "react";
import Title from "./Title";
import { ParthnerImg } from "../../../public/images";
import Image from "next/image";
import { Button } from "../ui/button";

const MeetOurPartnersSection = () => {
  return (
   <div className="bg-optimizer_parthner_bg max-sm:bg-optimizer_start">
     <div className="w-full  bg-parthner_bg p-8 max-sm:bg-star_background2 max-sm:bg-center max-sm:bg-cover">
      <div className="flex w-full justify-center gap-56 px-8 pe-24 max-md:flex-col max-md:px-0 max-sm:gap-4 max-sm:pe-0">
        <div className="flex flex-col gap-8 text-white  justify-start pt-24 max-md:!pt-0 items-start text-start max-sm:text-center">
          <Title
            title1={`Meeet Our`}
            title2={`Parthners`}
            className="!justify-start max-sm:!justify-center"
          />
          <div className="flex flex-col gap-1 mt-4 max-sm:mt-1 text-white text-lg max-sm:text-sm">
            <p>
              Discover our trusted partner, committed to innovation,
              collaboration,
            </p>
            <p>
              and excellence, working with us to deliver exceptional solutions
            </p>
            <p> create lasting value for our clients and communities</p>
          </div>
          <Button variant={`gradiant`} className="max-sm:hidden">See More</Button>
        </div>
        <Image
          src={ParthnerImg}
          alt=""
          className="pt-8 h-[450px] w-[450px] max-sm:!h-[350px] max-sm:!w-[350px] "
        />
      </div>
    </div>
   </div>
  );
};

export default MeetOurPartnersSection;
