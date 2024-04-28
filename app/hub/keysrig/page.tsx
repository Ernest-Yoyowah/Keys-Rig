import React from "react";
import { Metadata } from "next";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import ExpansionItem from "@/components/ui/ExpansionItem";

export const metadata: Metadata = {
  title: "Worship Rig Setup - Piano & Keys Gear",
};

const Rig: React.FC = () => {
  return (
    <div className="blue-bg">
      <div className="text-theme md:flex md:justify-center md:items-center p-5 md:p-0 ">
        <div className=" ">
          <div className="max-w-5xl md:pb-6 md:pt-0 md:text-center space-y-4">
            <h1 className="hero-text_3 mt-7 md:mt-20 text-left	md:text-center">
              Piano & Keys Gear Setup
            </h1>
            <p className="text-left	md:text-center">
              One of the hardest parts of being a worship keys player is
              choosing which gear to buy when building your keyboard rig.
              <br />
              From choosing the best controller, the best software for your
              sounds.
            </p>

            <p className="pb-4 md:p-5 text-left	md:text-center">
              <span className="text-lg font-bold">
                Explore Gear Selection:{" "}
              </span>
              Choose from a wide range of accessories to create your ideal
              setup.
            </p>
            <Link href="/hub/keysrig/gear">
              <Button
                variant="default"
                className="bg-white text-slate-700 border-white rounded-none font-semibold hover:bg-[#d1d5db] hover:text-black hover:border-white"
              >
                View Gear Options
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <div className="">
        <img
          src="/setupImg.jpg"
          alt="worhip rig setup image"
          style={{ minWidth: "100%", minHeight: "50vh", objectFit: "cover" }}
        />
      </div>
      <div className="text-[#f5f5f5] flex justify-center items-center p-5 md:p-0">
        <div className="max-w-5xl pb-6 p-0 md:pt-0 md:text-center space-y-5 md:space-y-10">
          <h1 className="hero-text_3 md:mt-20 text-left	md:text-center">
            Building a Virtual Keys Rig
          </h1>
          <p className="pb-4 pt-0 text-left	md:text-center">
            It’s not uncommon to see a laptop next to the drummer or keyboardist
            onstage being used for running tracks. They’re likely using Ableton
            Live and running tracks to help supplement the sound of the band. As
            a keyboardist, how can you incorporate a laptop into your rig?
          </p>
          <Link href="/hub/keysrig/build-rig">
            <Button
              variant="default"
              className="bg-white text-slate-700 border-white rounded-none font-semibold hover:bg-[#d1d5db]  hover:text-black hover:border-white"
            >
              Build your own Keys Rig
            </Button>
          </Link>
        </div>
      </div>
      <img
        src="/setupImg_2.jpg"
        alt="worhip rig setup image"
        style={{ minWidth: "90%", minHeight: "30vh", objectFit: "cover" }}
      />

      <ExpansionItem
        title="Epic Worship Rig Tour"
        description="Dive into a world of curated sounds with Datsunn, our Expansion connoisseur. Discover his hand-picked favorites and watch him quickly create some beats from scratch with his top selections."
        youtubeLink="https://www.youtube.com/embed/LMoaiV4utSE?showinfo=1&amp;rel=0&amp;hd=1&amp;cc_lang_pref=en&amp;cc_load_policy=1"
        youtubeTitle="Something"
        key={0}
      />
    </div>
  );
};

export default Rig;
