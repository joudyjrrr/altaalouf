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
  half_circule2,
} from "../../../public/images";
import Image from "next/image";
import { Button } from "../ui/button";

const data = [
  {
    background: company4,
    teextimg: company7,
    text: "Oman Summit 2024",
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
    background: company1,
    teextimg: company5,
    text: "Eygpt Expo 2023",
  },
];
const CompanyGlobalSection = () => {
  return (
    <>
      <div className="w-full relative  pb-24">
        <Image
          className="absolute top-0 start-0"
          width={150}
          src={halfCircule}
          alt=""
        />
        <Image
          className="absolute bottom-[-40px] end-0 z-[-1]"
          width={150}
          src={half_circule2}
          alt=""
        />
        <Title
          title1={`Company's`}
          title2={`Global Presence`}
          title2Color={`!text-primary !font-extrabold`}
          title1Color={`!font-bold !font-extrabold`}
        />
        <div className="mt-32 grid grid-cols-4  gap-6 px-16 max-md:grid-cols-2 max-sm:grid-cols-1">
          {data.map((d, idx) => (
            <div
              key={idx}
              className=" button-border-transparent !rounded-lg !p-0 before:!rounded-lg relative h-[300px]  w-[300px] "
            >
              <Image
                width={300}
                height={300}
                src={d.background}
                alt=""
                className="absolute top-0 w-full h-full z-[-1] start-0 !rounded-lg"
              />
              <div className="w-full !h-full flex flex-col justify-between items-center gap-8  pt-6">
                <Image
                  width={200}
                  height={50}
                  src={d.teextimg}
                  alt=""
                  className="pt-8"
                />

                <div className="bg-company_global h-[100px] pt-8 items-center !rounded-lg w-full flex justify-center">
                  <h1 className="text-white text-lg font-semibold">{d.text}</h1>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="w-full flex mt-12 justify-center items-center">
          <Button className="button-border-transparent  before:!rounded-md text-primary !bg-white before:!bg-white !rounded-md text-base !px-12 !py-4">
            See More
          </Button>
        </div>
      </div>
      <div className="w-full  bg-parthner_bg p-8">
        <div className="flex w-full justify-between px-8 pe-24 max-md:flex-col max-md:px-8 ">
          <div className="flex flex-col gap-8 text-white w-full justify-start pt-24 max-md:pt-8 items-start text-start">
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
                {" "}
                and excellence, working with us to deliver exceptional solutions
                and.
              </p>
              <p> create lasting value for our clients and communities</p>
            </div>
            <Button variant={`gradiant`}>
              See More
            </Button>
          </div>
          <Image
            src={ParthnerImg}
            alt=""
            className="pt-8 h-[450px] w-[450px] max-md:!h-[300px] max-md:!w-[300px] max-md:mx-auto"
          />
        </div>
      </div>
    </>
  );
};

export default CompanyGlobalSection;
