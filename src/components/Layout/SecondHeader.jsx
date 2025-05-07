"use client";
import React, { useState } from "react";
import { logoDark } from "../../../public/images";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { IoClose, IoMenu, IoSearch } from "react-icons/io5";
import { useTranslations } from 'next-intl';
import LanguageSwitcher from "./LanguageSwitcher";

const SecondHeader = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const t = useTranslations('header2');

  const Links = [
    { title: t('home'), to: "/" },
    { title: t('about'), to: "/about" },
    { title: t('projects'), to: "/project" },
    { title: t('news'), to: "/project" },
    { title: t('contact'), to: "/project" },
    { title: t('jobs'), to: "/project" },
    { title: t('Policies'), to: "/project" },
  ];

  return (
    <div className="bg-primary top-[50px] z-[100] fixed h-[90px] w-full">
      <div className="flex justify-between items-center w-full pt-2 pe-10 ps-4 max-sm:pe-2 max-sm:ps-1">
        <div className="flex gap-4 items-center text-white">
          <Image className="w-[70px]" src={logoDark} alt="logo" />
          <div className="flex flex-col max-sm:hidden">
            <h1 className="text-3xl font-extrabold max-sm:text-lg">
              {t('associationNameAr')}
            </h1>
            <span className="font-semibold text-sm">
              {t('associationNameEn')}
            </span>
          </div>
        </div>
        <div className="flex items-center gap-6 max-sLg:gap-2 max-md:hidden max-sm:hidden">
          {Links.map((li, i) => (
            <Link
              href={li.to}
              key={i}
              className="text-white text-lg font-medium text-nowrap"
            >
              {li.title}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4 max-sm:gap-1">
         
          <Button>{t('donateNow')}</Button>
            <LanguageSwitcher />
          <div className="hidden max-md:flex items-center gap-4">
            <button onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? (
                <IoClose className="text-white text-3xl" />
              ) : (
                <IoMenu className="text-white text-3xl" />
              )}
            </button>
          </div>
        </div>
      </div>

      {menuOpen && (
        <div className="z-[10000000] absolute top-[90px] left-0 w-full bg-primary justify-center items-center text-white flex flex-col gap-4 py-4 px-6">
          {Links.map((li, i) => (
            <Link
              href={li.to}
              key={i}
              className="text-base font-medium"
              onClick={() => setMenuOpen(false)}
            >
              {li.title}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default SecondHeader;
