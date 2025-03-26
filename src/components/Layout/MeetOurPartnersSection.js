import React from "react";
import Title from "./Title";
import { ParthnerImg } from "../../../public/images";
import Image from "next/image";
import { Button } from "../ui/button";

const MeetOurPartnersSection = () => {
  return (
   <div className="bg-optimizer_parthner_bg">
     <div className="w-full  bg-parthner_bg p-8">
      <div className="flex w-full justify-center gap-56 px-8 pe-24 max-md:flex-col max-md:px-8 ">
        <div className="flex flex-col gap-8 text-white  justify-start pt-24 max-md:pt-8 items-start text-start">
          <Title
            title1={`Meeet Our`}
            title2={`Parthners`}
            className="!justify-start"
          />
          <div className="flex flex-col gap-1 mt-4  text-white text-lg max-md:text-lg">
            <p>
              Discover our trusted partner, committed to innovation,
              collaboration,
            </p>
            <p>
              and excellence, working with us to deliver exceptional solutions
            </p>
            <p> create lasting value for our clients and communities</p>
          </div>
          <Button variant={`gradiant`}>See More</Button>
        </div>
        <Image
          src={ParthnerImg}
          placeholder="blur"
          alt=""
          className="pt-8 h-[450px] w-[450px] max-md:!h-[300px] max-md:!w-[300px] max-md:mx-auto"
        />
      </div>
    </div>
   </div>
  );
};

export default MeetOurPartnersSection;
