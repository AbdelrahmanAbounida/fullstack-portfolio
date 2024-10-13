import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

const Logo = ({
  className,
  withText = true,
  width = 27,
  height = 27,
}: {
  className?: string;
  withText?: boolean;
  width?: number;
  height?: number;
}) => {
  return (
    <Link
      href={"/main"}
      className={cn(
        "text-xl font-bold font-poppin flex  items-center gap-0  justify-start",
        className
      )}
    >
      <img
        className="mr-1"
        src={withText ? "/logo6.png" : "/logo6.png"}
        alt="NedaCrawl"
        width={width}
        height={height}
      />
      <span className="text-white">Aboneda</span>
    </Link>
  );
};

export default Logo;
