import React from "react";
import { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Link } from "lucide-react";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Worship Rig Setup | Keys Rig",
};

const Rig = () => {
  return (
    <div className="">
      <div className="bg-[#172D44] text-[#f5f5f5] flex justify-center items-center p-5 md:p-0">
        <div className=" ">
          <div className="max-w-5xl md:pb-6 md:pt-0 text-center space-y-10">
            <h1 className="text-2xl md:text-4xl font-bold mt-7 md:mt-20">
              Choose 9 Expansions. Pay only $99.00
            </h1>
            <p className="pb-0 pt-0">
              From soulful hip-hop to liquid drum and bass, or from lo-fi to
              classic house – whatever genre you’re making, there’s an Expansion
              to do it with. Until April 9, grab any nine Expansions for just
              $99.00. Get kits, preset patterns, and complete effect chains to
              use with Maschine, plus Battery kits and synth presets for
              Massive, Monark, and Prism, or seamlessly integrate them into any
              workflow with the free Komplete Kontrol software.
            </p>

            <p className="p-5">
              <span className="text-lg font-bold">Offer ends in:</span> 15 Days
              09 Hours 15 Minutes 30 Seconds
            </p>

            <Button
              variant="default"
              className="bg-white text-black border-white rounded-none font-semibold hover:bg-[#d1d5db] hover:text-black hover:border-white"
            >
              Choose now
            </Button>
          </div>
          {/* Image component */}
        </div>
      </div>
      <div className="">
        <img
          src="/setupImg.jpg"
          alt="worhip rig setup image"
          style={{ minWidth: "100%", minHeight: "50vh", objectFit: "cover" }}
        />
      </div>
      <div className="bg-[#172D44] text-[#f5f5f5] flex justify-center items-center p-5 md:p-0">
        <div className=" max-w-5xl pb-6 p-0 md:pt-0 text-center space-y-10">
          <h1 className="text-4xl font-bold mt-20">Build your own bundle</h1>
          <p className="pb-0 pt-0">
            Click below to check out all the Expansions on offer, pick the nine
            you love the most, and simply add them to your basket to create your
            own personalized bundle. The discounted price will be applied
            automatically, for a saving of over 75%.
          </p>

          <Button
            variant="default"
            className="bg-white text-black border-white rounded-none font-semibold hover:bg-[#d1d5db] hover:text-black hover:border-white"
          >
            Choose your Expansions
          </Button>
        </div>
      </div>
      <img
        src="/setupImg_2.jpg"
        alt="worhip rig setup image"
        style={{ minWidth: "100%", minHeight: "50vh", objectFit: "cover" }}
      />
    </div>
  );
};

export default Rig;
