import Title from "@/components/Layout/Title";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import React from "react";
import { FaCaretRight } from "react-icons/fa6";

const page = () => {
  return (
    <div className="w-full h-full bg-primary">
      <div className="w-full pt-44  bg-ourTeamBg  bg-contain bg-top bg-no-repeat z-[100]">
        <div className="w-full  relative  text-center h-full flex justify-start items-center gap-4 flex-col">
          <div className="flex gap-2 text-5xl max-md:text-3xl font-semibold text-center justify-center">
            <h1 className={`text-secondary `}>{`Contact `}</h1>
            <h1 className={`text-white `}>{`Us`}</h1>
          </div>
            <div className="absolute w-[80%] z-10 top-[300px] h-[20%] opacity-80 blur-[384px] bg-toutorial_gr_img"></div>
          <div className="bg-primary relative z-[100] w-fit mx-auto h-full mb-[100px]">
            <div className="bg-contact_Bg bg-no-repeat  relative z-[100]  bg-center bg-cover  pt-12 pb-56 px-32   rounded-lg shadow-lg">
              <div className="flex flex-col gap-2 ">
                <h1 className="text-secondary font-extrabold text-2xl">
                  Contact Us for Assistance or Inquiries
                </h1>
                <p className="text-white text-xl">
                  Please fill out the form below, and we will respond to you as
                  soon as possible.
                </p>
              </div>
              <div className="flex flex-col gap-12 mt-8 px-8">
                <Input label={`Full Name`} placeholder={`Enter name`} />
                <Input label={`Email Id `} placeholder={`Enter email id`} />
                <Textarea label={`Massage`} placeholder={`Enter massage`} />
                <Button className="bg-main_button w-fit px-8">
                  Send <FaCaretRight />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
