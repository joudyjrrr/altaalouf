"use client";
import Banner from "@/components/Layout/Banner";
import RealAccountTypes from "@/components/Layout/RealAccountTypes";
import Link from "next/link";
import { useTranslations } from "next-intl";
import useLanguageDirection from "@/i18n/useLanguageDirection";

import TeamSection from "@/components/Layout/TeamSection";
import Title from "@/components/Layout/Title";
import AwardSection from "@/components/Layout/AwardSection";

import Image from "next/image";
import StraightSection from "@/components/Layout/StraightSection";
import LicenseSection from "@/components/Layout/LicenseSection";
import WhyInzo from "@/components/Layout/WhyInzo";
import RepresentativeSection from "@/components/Layout/RepresentativeSection";
import CompanyGlobalSection from "@/components/Layout/CompanyGlobalSection";
import FinancialReport from "@/components/Layout/FinancialReport";
import DwMethods from "@/components/Layout/DwMethods";
<<<<<<< HEAD
import Footer from "@/components/Layout/Footer";
import MeetTeam from "@/components/Layout/MeetTeam";
=======

import MeetTeam from "@/components/Layout/MeetTeam";
import ExploreSection from "@/components/Layout/ExploreSection";
>>>>>>> 8ebdc52a07dadd82e90c9a0d50f5af098cb5c3c1
export default function Home() {
  const t = useTranslations();
  useLanguageDirection();
  return (
    <div className="w-full overflow-x-hidden">

      <div className="w-full h-full bg-[#3040614]">
       <Banner />
        <TeamSection />
<<<<<<< HEAD
        <AwardSection />
=======
>>>>>>> 8ebdc52a07dadd82e90c9a0d50f5af098cb5c3c1
        <RealAccountTypes/>
        <AwardSection isExplore={true}/>
 
        <StraightSection />
        <LicenseSection />
        <DwMethods />
        <WhyInzo />
<<<<<<< HEAD
        <DwMethods />
        <RepresentativeSection/>
        <CompanyGlobalSection/>
        <FinancialReport/>
        <MeetTeam />
        <Footer/>
       

       
=======
       
        <RepresentativeSection/>
        <CompanyGlobalSection/>
        <FinancialReport/>
        <MeetTeam />   
>>>>>>> 8ebdc52a07dadd82e90c9a0d50f5af098cb5c3c1
      </div>
    </div>

  );
}
