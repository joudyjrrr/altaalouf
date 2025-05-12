"use client";
import React from "react";
import Banner from "./Banner";
import About from "@/components/Layout/About";
import { useTranslations } from "next-intl";
import CardAbout from "./CardAbout";
import {
  chat,
  customer,
  drawio,
  organization,
  target,
  vision,
} from "../../../../public/images";
import useLanguageDirection from "@/i18n/useLanguageDirection";
import Title from "@/components/Layout/Title";
import Image from "next/image";
import Partners from "@/components/Layout/Partners";
import Footer from "@/components/Layout/Footer";

const page = () => {
  useLanguageDirection();
  const t = useTranslations("about");
  return (
    <div>
      <Banner />
      <About
        content={
          <>
            <p>{t("paragraph_4")}</p>
            <p>{t("paragraph_5")}</p>
            <p>{t("paragraph_6")}</p>
            <p>{t("paragraph_7")}</p>
          </>
        }
        noReadMore={false}
      />
      <div className="flex px-16 gap-8 max-sm:flex-col max-sm:px-4">
        <div className="flex flex-col gap-8 w-full">
          <CardAbout
            img={vision}
            title={t("visionTitle")}
            content={
                <>
                  <p>{t("vision")}</p>
                </>
              }
          />
          <CardAbout
            img={target}
            title={t("goalsTitle")}
            classNameImg={`!w-14 !h-14`}
            content={
                <>
                  <p>- {t("goals.g1")}</p>
                  <p>- {t("goals.g2")}</p>
                  <p>- {t("goals.g3")}</p>
                  <p>- {t("goals.g4")}</p>
                </>
              }
          />
        </div>
        <div className="flex flex-col gap-8 pt-16 w-full">
          <CardAbout
            img={chat}
            classNameImg={`!w-14 !h-14`}
            title={t("missionTitle")}
            content={<p>{t("mission")}</p>}
          />
          <CardAbout
            img={customer}
            classNameImg={`!w-14 !h-14`}
            title={t("missionTitle")}
            content={
              <>
                <p>- {t("values.v1")}</p>
                <p>- {t("values.v2")}</p>
                <p>- {t("values.v3")}</p>
                <p>- {t("values.v4")}</p>
                <p>- {t("values.v5")}</p>
              </>
            }
          />
        </div>
      </div>
      <div className="mt-20 w-full flex flex-col justify-center items-center">
        <Title
      title={t("structure")}
          className2={`start-[12px] top-[-9px] ps-`}
          img={organization}
          className1="ps-20"
        />
        <Image src={drawio} alt="" className={``} />
        <Partners />
        <Footer />
      </div>
    </div>
  );
};

export default page;
