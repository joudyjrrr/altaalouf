import Title from "@/components/Layout/Title";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import React from "react";
import { FaCaretRight } from "react-icons/fa6";

const page = () => {
  return (
    <div className="w-full h-full bg-primary">
      <div className="w-full  bg-optimizer_ourTeamBg max-sm:bg-none  bg-cover bg-top bg-no-repeat  ">
        <div className="w-full pt-48 max-mdd:pt-40 max-md:pt-32 bg-ourTeamBg max-xs:bg-banner_page_mobile max-xs:!pt-44 max-xs:bg-auto   bg-contain bg-top bg-no-repeat z-[100]">
          <div className="w-full  relative  text-center h-full flex justify-start items-center gap-4 flex-col">
            <div className="flex gap-2 text-5xl max-md:text-5xl max-xs:text-4xl font-semibold text-center justify-center">
              <h1 className={`text-secondary `}>{`Contact `}</h1>
              <h1 className={`text-white `}>{`Us`}</h1>
            </div>
            <div className="absolute w-[80%] max-xs:w-[130%] z-10 top-[300px] max-xs:top-[200px] h-[20%] opacity-80 blur-[384px] bg-toutorial_gr_img"></div>
            <div className="bg-primary max-xs:mx-4 relative z-[100] w-fit mx-auto h-full mb-[100px] max-xs:mb-8">
              <div className="w-full     bg-cover bg-top bg-no-repeat  ">
                <div className="bg-contact_Bg max-xs:bg-origin-content bg-no-repeat  relative z-[100]  bg-center bg-cover  pt-12 pb-56 max-xs:pb-8 max-xs:pt-0 px-32 max-md:px-16 max-xs:px-2   rounded-lg shadow-lg">
                  <div className="flex flex-col gap-2 max-xs:pt-8">
                    <h1 className="text-secondary font-extrabold text-2xl max-md:text-xl max-xs:text-base">
                      Contact Us for Assistance or Inquiries
                    </h1>
                    <p className="text-white text-xl max-md:text-lg max-xs:text-sm">
                      Please fill out the form below, and we will respond to you
                      as soon as possible.
                    </p>
                  </div>
                  <div className="flex flex-col gap-12 mt-8 px-8 max-xs:px-2">
                    <Input label={`Full Name`} placeholder={`Enter name`} classNameParent={`w-full`} />
                    <Input label={`Email Id `} placeholder={`Enter email id`} classNameParent={`w-full`}/>
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
      </div>
    </div>
  );
};

export default page;
