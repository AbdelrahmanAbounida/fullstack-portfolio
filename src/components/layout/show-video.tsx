import React from "react";
import { Play } from "lucide-react";
import { LampDemo } from "./acentui/lamp";

const ShowVideo = () => {
  return (
    <div className="w-full mt-[30px] h-full relative">
      <div className="w-full h-full bg-opacity-50">
        <img src="/video-bg.svg" alt="video-bg" className="object-contain" />
      </div>
      <div className="w-full absolute top-[170px] h-full flex flex-col items-center justify-center z-20">
        {/** Placeholder image for the video */}
        {/** TODO:: add an image for me with orange Tshirt  */}
        <div className="relative ">
          <img
            src="/video-placeholder.svg"
            alt="video-placeholder"
            className="w-[900px] h-[600px]"
          />
          {/** Play button */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <button className="bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-4 transition-all duration-300">
              <Play size={48} className="text-green-700" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowVideo;
