"use client";

import React from "react";
import { motion } from "framer-motion";
import { StarsBackground } from "./acentui/highlight";
import { Button } from "../ui/button";
import { PinRightIcon } from "@radix-ui/react-icons";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  // Define animation variants for the text
  const textVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div>
      <StarsBackground
        starDensity={0.00002}
        minTwinkleSpeed={1}
        maxTwinkleSpeed={1}
        allStarsTwinkle={true}
      />
      <div className="flex flex-col items-center justify-center mt-[110px] gap-3 w-full">
        {/* Animate the first text */}
        <motion.p
          className="text-4xl sm:text-[63px] font-bold relative z-20 bg-clip-text text-transparent py-3 pb-4 bg-gradient-to-b from-white via-white to-[#52525B]"
          initial="hidden"
          animate="visible"
          variants={textVariant}
        >
          Turn your ideas into market-leading
        </motion.p>
        {/* Animate the second text */}
        <motion.p
          className="text-4xl sm:text-[63px] py-3 pb-4 font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-[#52525B]"
          initial="hidden"
          animate="visible"
          variants={textVariant}
          transition={{ delay: 0.5 }} // delay the animation for the second text
        >
          SAAS applications
        </motion.p>
      </div>

      <div className="flex flex-col items-center justify-center mt-10 gap-1 text-[20px] ">
        <p className=" text-[#A1A1AA]">
          Develop and manage impactful SaaS solutions
        </p>
        <p className=" text-[#A1A1AA]">
          Just bring your ideas, and I will help you convert them
        </p>
        <p className=" text-[#A1A1AA]"> into impactful applications</p>
      </div>

      <div className="mt-8 flex items-center justify-center gap-[100px]">
        <Button className="rounded-[4px] group">
          Sample Projects
          <ArrowRight size={19} className="ml-2 group-hover:translate-x-1" />
        </Button>

        <Button
          variant={"secondary"}
          className="rounded-[4px] text-white hover:text-white bg-[#222121] hover:bg-[#2d2d2d]"
        >
          Schedule a meeting
        </Button>
      </div>
    </div>
  );
};

export default Hero;
