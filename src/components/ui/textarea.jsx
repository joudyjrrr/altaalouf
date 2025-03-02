import * as React from "react";

import { cn } from "@/lib/utils";

const Textarea = ({ className, placeholder, label, ...props }, ref) => {
  return (
    <div className="flex text-start text-white flex-col gap-2">
      <span className="text-lg ">{label}</span>
      <div className="flex input-border">
        <textarea
          className={cn(
            " flex w-full placeholder:text-[#6D83B6]  !rounded-[10px] z-[1000]   !bg-[#040613e0]  px-3 py-2 text-base ring-offset-background  file:bg-transparent file:text-sm file:font-medium file:text-foreground focus-visible:outline-none   disabled:cursor-not-allowed disabled:opacity-50 md:text-sm  focus:border-none focus:outline-none",
            className
          )}
          rows={4}
          placeholder={placeholder}
          ref={ref}
          {...props}
        />
      </div>
    </div>
  );
};
Textarea.displayName = "Textarea";

export { Textarea };
