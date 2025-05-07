import React from "react";
import Title from "./Title";
import { request } from "../../../public/images";
import { Button } from "../ui/button";
import { useTranslations } from "next-intl";

const About = () => {
    const t = useTranslations('about');
  return (
    <div className="my-[50px] bg-white">
    <Title title={t('title')} img={request} />
    <div className="text-center px-16 text-2xl max-sm:text-base max-sm:px-4 flex flex-col gap-1 font-medium text-[#575757]">
      <p>{t('paragraph_1')}</p>
      <p>{t('paragraph_2')}</p>
      <p>{t('paragraph_3')}</p>
    </div>
    <Button className="bg-white border-2 mt-8 hover:bg-primary border-primary text-secondary mx-auto w-fit">
      {t('read_more')}
    </Button>
  </div>
  );
};

export default About;
