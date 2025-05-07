"use client"
import About from "@/components/Layout/About";
import Banner from "@/components/Layout/Banner";
import Footer from "@/components/Layout/Footer";
import LatestNew from "@/components/Layout/LatestNew";
import Partners from "@/components/Layout/Partners";
import PartnersOpinions from "@/components/Layout/PartnersOpinions";
import Statistics from "@/components/Layout/Statistics";
import SuperiorProjects from "@/components/Layout/SuperiorProjects";
import useLanguageDirection from "@/i18n/useLanguageDirection";
export default function Home() {
  useLanguageDirection();
  return (
    <div className="w-full overflow-x-hidden mt-[130px] z-[50] relative h-screen">
      <div className="w-full h-full ">
        <Banner/>
        <About/>
        <Statistics/>
        <LatestNew/>
        <SuperiorProjects/>
        <Partners/>
        <PartnersOpinions/>
        <Footer/>
      </div>
    </div>
  );
}
