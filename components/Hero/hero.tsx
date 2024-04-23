import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Virtual Rig - build your own keys rig",
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
              The Ultimate Keyboard Utility Rig
            </h1>
            <p className="text-md md:text-lg">
              One of the hardest parts of being a worship keys player is
              choosing which gear to buy when building your keyboard rig. Here
              are some essential gear items for your setup!
            </p>
          </div>
        </div>
      </div>

      <div className="md:mx-auto px-5 my-auto text-slate-800 md:text-center py-8">
        <div className="max-w-3xl mx-auto">
          <p>
            One of the hardest parts of being a worship keys player is choosing
            which gear to buy when building your keyboard rig. Knowing what keys
            gear is right for you and how it works together will benefit your
            playing, as well as the entire sound of the band!
          </p>

          <br />
          <p>
            In this 2 part video series, Keith Duell breaks down his keyboard
            rig in full detail!
          </p>

          <div className="my-10 px-10 md:h-[456px] aspect-w-16 aspect-h-9">
            <iframe
              width="810"
              height="456"
              src="https://www.youtube.com/embed/neNbVMelMcQ"
              title="Worship Rig Tour - Piano &amp; Keys Gear | Sunday Keys App Setup"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>

          <p>
            Keith has been performing in live worship bands and in the studio as
            a keyboardist for many years. In this series, he will break down all
            of the hardware and software required to achieve full, rich keys and
            synth sounds. Watch now!
          </p>
        </div>
      </div>
    </>
  );
};

export default Hero;
