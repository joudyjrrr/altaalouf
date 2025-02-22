"use client";
import Image from "next/image";
import React, { useState } from "react";
import { logo, kr, fr, uk, iraq } from "../../../public/images";
import { Button } from "../ui/button";
import { routing } from "../../i18n/routing";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { motion } from 'framer-motion';
import { IoIosArrowDown } from "react-icons/io";
import { RiMenu2Line } from "react-icons/ri";
import { Link } from "@/i18n/routing";
import { useRouter, usePathname } from "next/navigation";
import { useTranslations } from "next-intl";
import { FaX } from "react-icons/fa6";
import VerticalSotial from "./VerticalSotial";
const Lang = [
  { flag: kr, lang: "kr", title: "Kr" },
  { flag: fr, lang: "fr", title: "Fr" },
  { flag: uk, lang: "en", title: "En" },
  { flag: iraq, lang: "ar", title: "Ar" },
  // { flag: pl, lang: "po", title: "Pol" },
];
const menuVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
  closed: {
    opacity: 0,
    y: -50,
    transition: { duration: 0.5, ease: 'easeIn' },
  },
};

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
    title: "partnerships",
    link: "/",
    subLinks: [
      { title: "ibProgram", link: "/h" },
      { title: "knowUs", link: "https://www.agents-inzo.co/" },
    ],
  },
  {
    title: "education",
    link: "/",
    subLinks: [
      { title: "forexTerms", link: "/h" },
      { title: "forexTutorial", link: "/accounts-types" },
      { title: "economicCalendar", link: "/accounts-types" },
    ],
  },
  {
    title: "company",
    link: "/",
    subLinks: [
      { title: "aboutUs", link: "/h" },
      { title: "termsAndConditions", link: "/accounts-types" },
      { title: "contactUs", link: "/accounts-types" },
    ],
  },
];

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const t = useTranslations()
  return (
    <div
      className={`w-full    px-16 pt-4 fixed top-0 end-0 z-[1000] ${
        openMenu ? "bg-star_background pb-10" : "h-[80px] bg-header_gradiant"
      }`}
    >
      <div className="w-full flex justify-between items-center h-full">
        <Image
          width={``}
          height={80}
          src={logo}
          alt="Logo"
          className="max-w-[211px] max-sm:max-w-[110px]"
        />
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Button className="button-border">Copy Portal</Button>
            <Button className="button-border">Become a Merchant</Button>
            <Button className="button-border">Customer Portal</Button>

            <LanguageSwitcher />
            <button onClick={() => setOpenMenu((prev) => !prev)}>
              {openMenu ? (
                <FaX className="text-white text-3xl" />
              ) : (
                <RiMenu2Line className="text-white text-3xl" />
              )}
            </button>
          </div>
        </div>
      </div>
      {openMenu && (
           <motion.div
           initial="closed"
           animate={openMenu ? 'open' : 'closed'}
           variants={menuVariants}
           className="w-full mt-8 flex justify-between"
           
         >
           <div className="grid grid-cols-2 w-full  justify-start items-start text-white">
             {LINKS.map((li, index) => (
               <div key={index} className="flex flex-col gap-3 w-fit">
                 <Link href={li.link} className="text-white text-3xl font- w-fit">
                   {t(li.title)}
                 </Link>
                 <span className="h-[1.2px] rounded-t rounded-xl bg-gradient-to-b from-primary to-secondary"></span>
               </div>
             ))}
           </div>
           <VerticalSotial/>
         </motion.div>
      )}
    </div>
  );
};

export default Header;

const LanguageSwitcher = ({ className }) => {
  const router = useRouter();
  const pathname = usePathname();
  const pathSegments = pathname.split("/").filter(Boolean);

  // استخراج اللغة الحالية من الـ URL
  const currentLang = Lang.find((l) => l.lang === pathSegments[0]) || iraq;

  const changeLanguage = (lang) => {
    pathSegments[0] = lang;
    router.replace(`/${pathSegments.join("/")}`);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        asChild
        className={`!bg-[#203054] text-white ${className}`}
      >
        <Button
          variant="outline"
          className="border-none flex items-center text-lg"
        >
          <span>{currentLang.title}</span>
          <Image
            width={30}
            height={30}
            src={currentLang?.flag}
            alt="Current Language Flag"
          />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="text-black flex flex-col items-center gap-2">
        {Lang.map((flag, idx) => (
          <Button key={idx} onClick={() => changeLanguage(flag.lang)}>
            <Image
              width={30}
              height={30}
              src={flag.flag}
              alt={`Flag ${flag.lang}`}
            />
            <span>{flag.title}</span>
          </Button>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
