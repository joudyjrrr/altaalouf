import Title from "@/components/Layout/Title";
import React from "react";
import { real_account_bg, real_account } from "../../../../public/images";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import Select from "@/components/ui/select";
import SelectPhoneNumber from "@/components/ui/SelectPhoneNumber";
import DatePickerComponents from "@/components/ui/DatePicker";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { FaCaretRight } from "react-icons/fa6";

const page = () => {
  return (
    <div className="w-full  relative h-full">
      <div className="w-full pt-28  bg-ourTeamBg h-screen bg-cover bg-center bg-no-repeat z-[100]">
        <div className="w-full pt-16 z-[100] relative h-full flex justify-start items-center gap-4 flex-col">
          <div className="flex gap-2 text-5xl  z-[100]  relative max-md:text-3xl font-semibold text-center justify-center">
            <h1 className={`text-secondary font-extrabold`}>{`Open `}</h1>
            <h1 className={`text-white font-extrabold`}>{`Real Account`}</h1>
          </div>

          <div className="absolute w-1/2 z-[10]  start-[25%] top-[27%] h-[200px] opacity-90 blur-[384px] bg-toutorial_gr_img"></div>
          {/* <div className="absolute w-full z-[10]  start-[25%] bottom-0 opacity-60 h-[20%]  blur-[384px] bg-toutorial_gr_img"></div> */}
          <div className="bg-primary  w-[75%] relative z-[100]  mt-12 rounded-t-lg    px-16 py-4 mx-auto">
            <div className="grid grid-cols-2 gap-4 w-full">
              <Select label={`Platform Type`} />
              <Select label={`Account Type`} />
              <Input label={`Full Name`} placeholder={`Enter name`} />
              <Input label={`Surname`} placeholder={`Enter surname`} />
              <Input label={`Email Id `} placeholder={`Enter email id`} />
              <Input
                label={`Password `}
                placeholder={`Enter password`}
                type={`password`}
              />
              <Input
                label={`Confirm Password `}
                placeholder={`Enter password`}
                type={`password`}
              />
              <div className="flex h-fit  items-end gap-2">
                <SelectPhoneNumber />
                <Input label={``} className={``} placeholder={`Enter phone number `} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-real_account_bg w-full bg-center bg-cover">
        <div className="w-full  bg-real_account_Gr h-full flex justify-start items-center gap-4 flex-col">
          <div className="bg-primary w-[75%] relative z-[100]    rounded-b-lg  pb-24  px-16 mx-auto">
            <div className="grid grid-cols-2 gap-4 w-full">
              <DatePickerComponents />
              <Select label={`Country`} />
              <Input label={`State`} placeholder={`Enter state`} />
              <Input label={`City`} placeholder={`Enter city`} />
              <Select label={`Language`} />
              <Select label={`Level of Education`} />
              <Select label={`Years of Experience in Trading & Forex`} />
              <Select label={`Leverage (Margin)`} />
              <Select label={`Number of Trades Made Last Year`} />
              <Select label={`Average of Each Trade`} />
              <Select label={`Purpose of Trading`} />
              <Select label={`Annual Income`} />
              <Select label={`Your Capital`} />
              <Select label={`Source of Income`} />
              <div>
                <h1 className="text-white text-xl font-semibold">
                  Do you have a public job during last year?
                </h1>
              </div>
              <RadioGroup
                defaultValue="comfortable"
                className={`!flex text-white gap-8`}
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="default" id="r1" />
                  <Label className={`text-xl`} htmlFor="r1">
                    Yes
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="comfortable" id="r2" />
                  <Label className={`text-xl`} htmlFor="r2">
                    No
                  </Label>
                </div>
              </RadioGroup>
              <div className="col-span-2 flex flex-col w-full mt-4 gap-4 ">
                <div className="flex items-center space-x-2">
                  <Checkbox id="terms" />
                  <Label
                    htmlFor="terms"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    I have read, understood and accepted the Terms and
                    Conditions as amended from time to time. Read more...
                  </Label>
                </div>
                <div className="flex items-start space-x-2">
                  <Checkbox id="terms2" />
                  <Label
                    htmlFor="terms2"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    We would like to inform you that if you trade on the welcome
                    bonus in the standard account, the leverage will be 1:100.
                    However, upon deposit, the leverage will automatically
                    switch to 1:500.
                  </Label>
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox id="terms3" />
                  <Label
                    htmlFor="terms3"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    I confirm that I am not a politically exposed person.
                  </Label>
                </div>
              </div>
              <Button className="bg-main_button w-fit px-8 mt-4">
                Open Account <FaCaretRight />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
