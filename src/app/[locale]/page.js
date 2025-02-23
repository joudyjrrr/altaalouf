"use client";
import Banner from "@/components/Layout/Banner";
import RealAccountTypes from "@/components/Layout/textSwiper";
import Link from "next/link";
import { useTranslations } from "next-intl";
import useLanguageDirection from "@/i18n/useLanguageDirection";
  
import TeamSection from "@/components/Layout/TeamSection";
import Title from "@/components/Layout/Title";
import AwardSection from "@/components/Layout/AwardSection";

export default function Home() {
  const t = useTranslations();
  useLanguageDirection();
  return (
    <div className="w-full overflow-x-hidden">
      <div className="w-full h-full bg-[#3040614]">
        <Banner />
        <TeamSection />
        <AwardSection/>
        <RealAccountTypes/>
      </div>

    </div>
  );
}
