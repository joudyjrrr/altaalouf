import OurTeamSection from "../../../../components/Layout/OurTeamSection";
import Image from "next/image";

import {
  mTeem1,
  mTeem2,
  mTeem3,
  mTeem4,
  mTeem5,
} from "../../../../../public/images";

let imgData = [
  { img: mTeem2, name: "Mark", role: "CEO" },
  { img: mTeem1, name: "Jason", role: "HR Manager" },
  { img: mTeem3, name: "Chris", role: "Finance Manager" },
  { img: mTeem5, name: "Natasia", role: "Insight Manager" },
  { img: mTeem4, name: "Andy", role: "B2B Manager" },
];

const TeamMemberPage = ({ params }) => {
  return (
    <div className="w-full h-full bg-[#0F2147] pb-20">
      <div className="w-full pt-36 bg-ourTeamBg md:h-screen  bg-cover bg-top bg-no-repeat  z-[100]">
        <div className="w-full   h-full flex  justify-center items-center max-sm:items-center  pb-8">
          <div className="flex flex-col gap-2 text-center w-full ">
            <div className="flex gap-2 text-5xl max-md:text-3xl font-semibold text-center justify-center">
              <h1 className={`text-secondary `}>{`Our`}</h1>
              <h1 className={`text-white `}>{`Team`}</h1>
            </div>
            <div className="flex flex-col gap-2 text-white text-lg max-md:text-sm">
              <p>
                Meet the passionate individuals driving our mission forward,
                blending expertise, creativity, and
              </p>
              <p>dedication to achieve exceptional results.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full pt-4 md:h-[110vh] bg-teamPartnerBg  bg-cover bg-top bg-no-repeat pb-5">
        <div className=" md:-translate-y-40  ">
          <div
            className={`h-[320px] w-[235px]  mx-auto 
          relative `}
          >
            <Image src={mTeem2} alt="" className="w-full h-full" />

            <div className="absolute bottom-[5px] left-[0px] h-[45px] font-bold text-[22px] text-white">
              {imgData[0].name}
            </div>
            <div className="absolute bottom-[0px] left-[0px] text-[17px] text-white">
              {imgData[0].role}
            </div>
          </div>
          <div className="pt-8">
            <OurTeamSection imgData={imgData} showButton={false} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamMemberPage;
