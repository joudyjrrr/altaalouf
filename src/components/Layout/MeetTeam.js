import { Button } from "../ui/button";
import Link from "next/link";
import Image from "next/image";
import OurTeamSection from "./OurTeamSection";
import { mTeem1, mTeem2, mTeem3, mTeem4, mTeem5 } from "../../../public/images";
import Title from "./Title";

let imgData = [
  { img: mTeem2, name: "Mark", role: "CEO" },
  { img: mTeem1, name: "Jason", role: "HR Manager" },
  { img: mTeem3, name: "Chris", role: "Finance Manager" },
  { img: mTeem5, name: "Natasia", role: "Insight Manager" },
  { img: mTeem4, name: "Andy", role: "B2B Manager" },
];

const MeetTeam = () => {
  return (
    <div
      className="relative pb-12 bg-gradient-to-b  from-[#050B1B] to-[#0F2147] 
      bg-no-repeat h-[auto] flex flex-col items-center justify-center"
    >
      <div className="absolute top-0 left-0 right-0 bg-teamStars_Bg h-[50%]"></div>

      <Title
        title1={`Meet the`}
        title2={`Teem`}
        title1Color={"white"}
        title2Color={"secondary"}
      />

      <OurTeamSection imgData={imgData} showButton={true} />
      <Link href="/our-team">
        <Button className="button-border px-5 py-6 font-semibold text-sm mx-auto mt-5 max-sm:mt-12">
          Meet The Whole Team
        </Button>
      </Link>
    </div>
  );
};

export default MeetTeam;
