import React from "react";
import { Metadata } from "next";
import YoutubeEmbed from "../../../components/ui/YoutubeEmbed";

export const metadata: Metadata = {
  title: "Virtual Rig - build your own keys rig",
};

const textContent = {
  headText: "The Ultimate Keyboard Utility Rig",
  paragraphText:
    "One of the hardest parts of being a worship keys player is choosing which gear to buy when building your keyboard rig. Here are some essential gear items for your setup!",
};

const Hero = () => {
  return (
    <>
      <div className="relative h-96">
        <img
          className="absolute inset-0 w-full h-full object-cover"
          src="https://vietthuong.vn/upload/content/images/tuvan/piano/roland-a-88mkii-chinh-hang.jpg"
          alt="Header Background"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0 flex items-center justify-center text-white">
          <div className="text-center max-w-4xl md:p-0 px-5">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              {textContent.headText}
            </h1>
            <p className="text-md md:text-lg">{textContent.paragraphText}</p>
          </div>
        </div>
      </div>
      <div>
        <YoutubeEmbed
          videoId="fMhdC4"
          title="Keys Gear | Sunday Keys App Setup"
        />
      </div>
    </>
  );
};

export default Hero;
