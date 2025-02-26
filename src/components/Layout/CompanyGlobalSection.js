import React from "react";
import Title from "./Title";
import {
  halfCircule,
  company1,
  company2,
  company3,
  company4,
  company5,
  company6,
  company7,
  company8,
  ParthnerImg,
} from "../../../public/images";
import Image from "next/image";
import { Button } from "../ui/button";

const data = [
  {
    background: company1,
    teextimg: company5,
    text: "Eygpt Expo 2023",
  },
  {
    background: company2,
    teextimg: company6,
    text: "Mumbai Expo 2023",
  },
  {
    background: company3,
    teextimg: company8,
    text: "Dubai Expo 2023",
  },
  {
    background: company4,
    teextimg: company7,
    text: "Oman Summit 2024",
  },
];
const CompanyGlobalSection = () => {
  return (
    <>
      <div className="w-full relative mb-8">
        <Image
          className="absolute top-0 start-0"
          width={150}
          src={halfCircule}
          alt=""
        />
        <Title
          title1={`Company's`}
          title2={`Global Presence`}
          title2Color={`!text-primary`}
        />
        <div className="mt-32 grid grid-cols-4 gap-6 px-16 max-md:grid-cols-2 max-sm:grid-cols-1">
          {data.map((d , idx) => (
            <div key={idx} className="bg-company_global relative  h-[250px] !rounded-lg">
              {" "}
              <Image
                width={220}
                src={d.background}
                alt=""
                className="absolute top-0 w-full h-full z-[-1] start-0 !rounded-lg"
              />
              <div className="w-full !h-full flex flex-col justify-between items-center gap-8 p-4">
                <Image
                  width={150}
                  height={100}
                  src={d.teextimg}
                  alt=""
                  className="pt-8"
                />

                <h1 className="text-white text-lg">{d.text}</h1>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full  bg-star_background p-8">
        <div className="flex w-full justify-between px-16 max-md:flex-col max-md:px-8 ">
          <div className="flex flex-col gap-8 text-white w-full justify-start pt-36 max-md:pt-8 items-start text-start">
            <Title
              title1={`Meeet Our`}
              title2={`Parthners`}
              className="!justify-start"
            />
            <div className="flex flex-col gap-1 mt-12  text-white text-xl max-md:text-lg">
              <p>
                Discover our trusted partner, committed to innovation,
                collaboration,
              </p>
              <p>
                {" "}
                and excellence, working with us to deliver exceptional solutions
                and.
              </p>
              <p> create lasting value for our clients and communities</p>
            </div>
            <Button className="button-border w-fit !rounded-lg text-lg">
              View More
            </Button>
          </div>
          <Image src={ParthnerImg} alt="" className="pt-8 h-[550px] max-md:!h-[300px] max-md:!w-[300px] max-md:mx-auto"/>
        </div>
      </div>
      {/* <div className="flex flex-col items-center bg-[#0a1c35] text-white p-4 rounded-xl w-40">
    
     
    </div> */}
    </>
  );
};

export default CompanyGlobalSection;
