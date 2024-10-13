import React from "react";

const SampleProjects = () => {
  return (
    <div>
      <div className="w-full mt-[30px] h-full relative">
        <img
          src="/samples-arrows.svg"
          alt="samples-arrows"
          className="object-cover"
        />
        <h1 className="text-4xl sm:text-[60px] my-10 py-3 font-bold mx-auto  text-center relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-[#52525B]">
          Sample Projects
        </h1>

        <div className="flex flex-wrap justify-center gap-10  pt-12">
          TODO:: add List of Sample Projects and use accentui cards
        </div>
      </div>
    </div>
  );
};

export default SampleProjects;
