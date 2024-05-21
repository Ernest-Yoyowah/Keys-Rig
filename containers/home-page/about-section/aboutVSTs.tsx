import Link from "next/link";
import React from "react";
import { Button } from "@/components/ui/button";

const aboutContent = {
  headText: "About VSTs",
  paragraphText:
    "Find expert advice on gear selection and discover a curated selection of VST plugins to fuel your creativity. Let's make music magic together.",
};

const AboutVSTs: React.FC = () => {
  return (
    <>
      <div className="flex items-center justify-end max-w-2xl pt-10">
        <div className="w-16 h-0.5 bg-yellow-400 mr-4"></div>
        <p className="text-sm font-normal">Why Do Musicians Love VSTs</p>
      </div>
      <div className="md:min-h-screen flex py-7 w-full">
        <div className="flex-1 bg-[#000000] text-primary-foreground p-8 flex flex-col justify-center skew-left">
          <h1 className="text-4xl font-bold mb-4 text-center">
            {aboutContent.headText}
          </h1>
          <p className="text-lg mb-8 text-center">
            {aboutContent.paragraphText}
          </p>
          <div className="flex justify-center gap-3">
            <Button
              variant="default"
              className="bg-white text-[#191919] hover:bg-[#e5e5e5] hover:text-black"
            >
              <Link href="/hub/plugins">VST Plugins</Link>
            </Button>
            <Button
              variant="default"
              className="bg-white text-[#191919] hover:bg-[#e5e5e5] hover:text-black"
            >
              <Link href="/hub/keysrig/gear">Gear Needed</Link>
            </Button>
          </div>
        </div>
        <div className="flex-1 relative skew-right md:flex hidden">
          <div className="absolute inset-0 bg-black opacity-20"></div>
          <img
            src="https://png.pngtree.com/png-clipart/20220719/original/pngtree-recording-studio-isometric-music-sound-png-image_8369287.png"
            alt="Background"
            className="object-cover h-full w-full"
          />
        </div>
      </div>
    </>
  );
};

export default AboutVSTs;
