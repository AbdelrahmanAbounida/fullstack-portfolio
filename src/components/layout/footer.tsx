import React from "react";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";

const Footer = () => {
  return (
    <div className="">
      <div className="w-full mt-[30px] h-full relative flex flex-col items-center">
        <img src="/footer.svg" alt="footer" className="object-cover" />
        {/** TODO:: Open a Modal */}
        <Button className="h-8 text-sm items-center mt-5 group transition-all flex bg-gradient-to-br from-[#A1A1AA] to-[#F4F4F5] text-[#090909] rounded-[6px] hover:to-[#F4F4F5] hover:from-[#F4F4F5]">
          Contact Me
          <ArrowRight size={18} className="group-hover:translate-x-1" />
        </Button>
      </div>
      <div className="w-full">
        <div className="border-x-0 border-t w-full border-b-0 border-zinc-700 pl-8 pr-0 pt-[33px] pb-12 flex gap-[572px] items-start relative  h-[101px] bg-transparent">
          <small className="leading-5 text-sm text-zinc-500 w-full ">
            © 2024 <span className="text-white">Aboneda</span>. All rights
            reserved.
          </small>
        </div>
      </div>
    </div>
  );
};

export default Footer;
