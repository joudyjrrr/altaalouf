"use client";
import Image from "next/image";
import React, { useState } from "react";
import { logo, kr, fr, uk, iraq  , pl} from "../../../public/images"
import { Button } from "../ui/button";
import { routing } from '../../i18n/routing';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { IoIosArrowDown, IoMdClose, IoMdMenu } from "react-icons/io";
import { Link } from "@/i18n/routing";
import { useRouter, usePathname } from "next/navigation";
import { useTranslations } from "next-intl";
const Lang = [
  { flag: kr, lang: "kr" },
  { flag: fr, lang: "fr" },
  { flag: uk, lang: "en" },
  { flag: iraq, lang: "ar" },
  { flag: pl, lang: "po" },

]
const LINKS = [
  { title: "home", link: "/" },
  { title: "sucessPartner", link: "https://www.agents-inzo.co/" },

  { title: "copyPortal", link: "https://social.inzo.co/portal/login/" },
  {
    title: "trading",
    link: "/",
    subLinks: [
      { title: "trading", link: "/h" },
      { title: "accountsTypes", link: "/accounts-types" },
      { title: "market", link: "/accounts-types" },
      { title: "cTraderAccountDeletion", link: "/accounts-types" },

    ],
  },
  {
    title: "partnerships", link: "/", subLinks: [
      { title: "ibProgram", link: "/h" },
      { title: "knowUs", link: "https://www.agents-inzo.co/" },


    ],
  },
  {
    title: "education", link: "/", subLinks: [
      { title: "forexTerms", link: "/h" },
      { title: "forexTutorial", link: "/accounts-types" },
      { title: "economicCalendar", link: "/accounts-types" },

    ],
  },
  {
    title: "company", link: "/", subLinks: [
      { title: "aboutUs", link: "/h" },
      { title: "termsAndConditions", link: "/accounts-types" },
      { title: "contactUs", link: "/accounts-types" },

    ],
  },
];

const Header = () => {
  return (
    <div className="w-full h-[80px] bg-[#040614] my-2 border-t border-b border-gray-200  px-4 fixed top-0 end-0 z-[1000]">
      <div className="w-full flex justify-between items-center h-full">

        <div className="md:hidden  max-md:flex">
          <DropdownMenu>
            <DropdownMenuTrigger asChild className="md:hidden">
              <button >
                <IoMdMenu className="text-white text-4xl" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-full !min-w-[300px]">
              <NavLinks
                links={LINKS}
                className={`!flex-col max-md:flex !text-black w-full`}
              />
              {/* <ActionButtons
                className={`flex flex-col justify-center items-center gap-1`}
              /> */}
            </DropdownMenuContent>
          </DropdownMenu>
          <LanguageSwitcher />
        </div>
        <LanguageSwitcher className="max-md:hidden" />
        {/* Navbar Links (Hidden on small screens) */}
        <div className="hidden md:flex gap-16 items-center text-white">
          <NavLinks links={LINKS} className={``} />
        </div>
        <Image width={``} height={50} src={logo} alt="Logo" className="max-w-[140px] max-sm:max-w-[110px]" />
      </div>
    </div>
  );
};

export default Header;

const NavLinks = ({ links, className = "" }) => {
  const t = useTranslations();
  return (
    <div className={`md:flex gap-12 max-lg:gap-4 max-lg:text-lg items-center ${className}`}>
      {links.map((li) =>
        li.subLinks?.length > 0 ? (
          <DropdownMenu key={li.title}>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                className="border-none bg-transparent !text-xl flex items-center gap-1 max-lg:!text-sm"
              >
                {t(li.title)} <IoIosArrowDown className="text-2xl mt-2 " />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="text-white !text-xl !bg-secondary  ">
              {li.subLinks.map((sub) => (
                <Link
                  key={sub.link}
                  href={sub.link}
                  className="block px-4 py-2 hover:bg-gray-200 hover:text-black !text-xl max-lg:text-sm"
                >
                  {t(sub.title)}
                </Link>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        ) : (
          <Link
            key={li.title}
            href={li.link}
            className="hover:text-[#de6462] text-xl max-lg:text-sm"
          >
            {t(li.title)}
          </Link>
        )
      )}
    </div>
  )
}
const LanguageSwitcher = ({ className }) => {
  const router = useRouter();
  const pathname = usePathname();
  const pathSegments = pathname.split("/").filter(Boolean);

  // استخراج اللغة الحالية من الـ URL
  const currentLang = Lang.find((l) => l.lang === pathSegments[0])?.flag || iraq;

  const changeLanguage = (lang) => {
    pathSegments[0] = lang;
    router.replace(`/${pathSegments.join("/")}`);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className={`bg-transparent ${className}`}>
        <Button variant="outline" className="border-none">
          <Image width={30} height={30} src={currentLang} alt="Current Language Flag" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="text-black flex flex-col items-center gap-2">
        {Lang.map((flag, idx) => (
          <Button key={idx} onClick={() => changeLanguage(flag.lang)}>
            <Image width={30} height={30} src={flag.flag} alt={`Flag ${flag.lang}`} />
          </Button>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};


const ActionButtons = ({ className = "" }) => (
  <div className={`flex gap-2 items-center ${className}`}>
    {["فتح حساب تاجر p2p", "بوابة العملاء", "بوابة النسخ"].map((text) => (
      <Button key={text} className="text-white bg-[#751817] rounded-lg shadow">
        {text}
      </Button>
    ))}
  </div>
);

