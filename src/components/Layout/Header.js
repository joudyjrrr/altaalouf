"use client";
import Image from "next/image";
import React, { useState } from "react";
import { logo, kr, fr, uk, iraq } from "../../../public/images"
import { Button } from "../ui/button";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { IoIosArrowDown, IoMdClose, IoMdMenu } from "react-icons/io";
import { Link } from "@/i18n/routing";
import { useRouter, usePathname } from "next/navigation";
const Lang = [
  {flag : kr , lang: "de"},
  {flag : fr , lang: "en"},
  {flag : uk , lang: "en"},
  {flag : iraq , lang: "en"},


]
const LINKS = [
  { title: "الرئيسية", link: "/" },
  { title: "شركاء النجاح", link: "/h" },
  { title: "بوابة النسخ", link: "/" },
  {
    title: "التداول",
    link: "/",
    subLinks: [
      { title: "التداول", link: "/h" },
      { title: "أنواع الحسابات", link: "/accounts-types" },
    ],
  },
  { title: "الشركاء", link: "/", subLinks: [] },
  { title: "التعليم", link: "/", subLinks: [] },
  { title: "الشركة", link: "/", subLinks: [] },
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

const NavLinks = ({ links, className = "" }) => (
  <div className={`md:flex gap-12 max-lg:gap-4 max-lg:text-lg items-center ${className}`}>
    {links.map((li) =>
      li.subLinks?.length > 0 ? (
        <DropdownMenu key={li.title}>
          <DropdownMenuTrigger asChild>
            <Button
              variant="outline"
              className="border-none bg-transparent !text-xl flex items-center gap-1 max-lg:!text-sm"
            >
              {li.title} <IoIosArrowDown className="text-2xl mt-2 " />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="text-white !text-xl !bg-secondary  ">
            {li.subLinks.map((sub) => (
              <Link
                key={sub.link}
                href={sub.link}
                className="block px-4 py-2 hover:bg-gray-200 hover:text-black !text-xl max-lg:text-sm"
              >
                {sub.title}
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
          {li.title}
        </Link>
      )
    )}
  </div>
);

const ActionButtons = ({ className = "" }) => (
  <div className={`flex gap-2 items-center ${className}`}>
    {["فتح حساب تاجر p2p", "بوابة العملاء", "بوابة النسخ"].map((text) => (
      <Button key={text} className="text-white bg-[#751817] rounded-lg shadow">
        {text}
      </Button>
    ))}
  </div>
);
const LanguageSwitcher = ({ className }) => {
  const router = useRouter();
  const pathname = usePathname();

  const changeLanguage = (lang) => {
  
    const pathSegments = pathname.split("/").filter(Boolean);
    pathSegments[0] = lang; 
  
    router.replace(`/${pathSegments.join("/")}`);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className={`bg-transparent ${className}`}>
        <Button variant="outline" className="border-none">
          <Image width={30} height={30} src={iraq} alt="Iraq Flag" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="text-black flex flex-col items-center gap-2">

        {Lang.map((flag, idx) => (
          <Button   key={idx} onClick={() => changeLanguage(flag.lang)}>
            <Image
            
              width={30}
              height={30}
              src={flag.flag}
              alt={`Flag ${idx}`}
            />
          </Button>
        ))}

      </DropdownMenuContent>
    </DropdownMenu>
  )
}
