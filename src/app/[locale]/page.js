"use client";
import Banner from "@/components/Layout/Banner";
import RealAccountTypes from "@/components/Layout/RealAccountTypes";
import { useTranslations } from "next-intl";
import useLanguageDirection from "@/i18n/useLanguageDirection";

import TeamSection from "@/components/Layout/TeamSection";
import AwardSection from "@/components/Layout/AwardSection";

import StraightSection from "@/components/Layout/StraightSection";
import LicenseSection from "@/components/Layout/LicenseSection";
import WhyInzo from "@/components/Layout/WhyInzo";
import RepresentativeSection from "@/components/Layout/RepresentativeSection";
import CompanyGlobalSection from "@/components/Layout/CompanyGlobalSection";
import FinancialReport from "@/components/Layout/FinancialReport";
import DwMethods from "@/components/Layout/DwMethods";

import MeetTeam from "@/components/Layout/MeetTeam";

export default function Home() {
  const t = useTranslations();
  useLanguageDirection();

  return (
    <div className="w-full overflow-x-hidden">
      <div className="w-full h-full bg-[#3040614]">
        <Banner />
        <TeamSection />
        <RealAccountTypes />

        <AwardSection isExplore={true} />

        <StraightSection />
        <LicenseSection />
        <DwMethods />
        <WhyInzo />

        <RepresentativeSection />
        <CompanyGlobalSection />
        <FinancialReport />
        <MeetTeam />
      </div>
    </div>
  );
}
