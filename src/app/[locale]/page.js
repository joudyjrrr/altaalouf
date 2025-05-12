"use client";
import About from "@/components/Layout/About";
import Banner from "@/components/Layout/Banner";
import Footer from "@/components/Layout/Footer";
import LatestNew from "@/components/Layout/LatestNew";
import Partners from "@/components/Layout/Partners";
import PartnersOpinions from "@/components/Layout/PartnersOpinions";
import Statistics from "@/components/Layout/Statistics";
import SuperiorProjects from "@/components/Layout/SuperiorProjects";
import useLanguageDirection from "@/i18n/useLanguageDirection";
import { useTranslations } from "next-intl";
export default function Home() {
  useLanguageDirection();
  const t = useTranslations("about");
  return (
    <div className="w-full overflow-x-hidden mt-[130px] z-[50] relative h-screen">
      <div className="w-full h-full ">
        <Banner />
        <About
          content={
            <>
              <p>{t("paragraph_1")}</p>
              <p>{t("paragraph_2")}</p>
              <p>{t("paragraph_3")}</p>
            </>
          }
          noReadMore={true}
        />
        <Statistics />
        <LatestNew />
        <SuperiorProjects />
        <Partners />
        <PartnersOpinions />
        <Footer />
      </div>
    </div>
  );
}
