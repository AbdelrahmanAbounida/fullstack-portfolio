import React from "react";
import Logo from "../logo";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";

const Navbar = () => {
  return (
    <div className="w-full">
      <div className="w-full items-center flex felx-col mt-5">
        <div className="w-full items-center justify-between flex">
          <Logo />

          <Button className="h-8 text-sm items-center group transition-all flex bg-gradient-to-br from-[#A1A1AA] to-[#F4F4F5] text-[#090909] rounded-[6px] hover:to-[#F4F4F5] hover:from-[#F4F4F5]">
            Schedule a meeting
            {/* <ArrowRight size={18} className="group-hover:translate-x-1" /> */}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
