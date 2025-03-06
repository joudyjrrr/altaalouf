import Title from "@/components/Layout/Title";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import React from "react";
import { FaCaretRight } from "react-icons/fa6";

const page = () => {
  return (
    <div className="w-full h-full">
      <div className="w-full pt-4  bg-ourTeamBg  bg-cover bg-center bg-no-repeat z-[100]">
        <div className="w-full pt-36   text-center h-full flex justify-start items-center gap-4 flex-col">
          <div className="flex gap-2 text-5xl max-md:text-3xl font-semibold text-center justify-center">
            <h1 className={`text-secondary `}>{`Contact `}</h1>
            <h1 className={`text-white `}>{`Us`}</h1>
          </div>

          <div className="bg-primary w-fit h-fit  mt-4  mb-[100px]">
            <div className="bg-contact_Bg bg-center bg-cover py-10  px-24   rounded-lg shadow-lg">
              <div className="flex flex-col gap-2 ">
                <h1 className="text-secondary font-semibold text-2xl">
                  Contact Us for Assistance or Inquiries
                </h1>
                <p className="text-white text-xl">
                  Please fill out the form below, and we will respond to you as
                  soon as possible.
                </p>
              </div>
              <div className="flex flex-col gap-4 mt-8 px-8">
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
