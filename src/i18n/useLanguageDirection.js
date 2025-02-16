"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

const useLanguageDirection = () => {
  const pathname = usePathname();
  const lang = pathname.split("/")[1];  

  useEffect(() => {
    document.documentElement.dir = lang === "en" ? "rtl" : "ltr";
  }, [lang]);
};

export default useLanguageDirection;
