import React from "react";
import { Metadata } from "next";
import { buildRigTextContent } from "@/app/lib/buildRig";
import YoutubeEmbed from "@/components/ui/YoutubeEmbed";

export const metadata: Metadata = {
  title: "Virtual Rig - build your own keys rig",
};

const BuildRigPage = () => {
  return (
    <>
      <div className="relative h-96">
        <img
          className="absolute inset-0 w-full h-full object-cover"
          src="https://www.shutterstock.com/image-photo/microphone-computer-musical-equipment-guitars-260nw-1776708860.jpg"
          alt="Header Background"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0 flex items-center justify-center text-white">
          <div className="text-center max-w-4xl md:p-0 px-5">
            <h1 className="hero-text_2 mb-4">{buildRigTextContent.headText}</h1>
            <p className="sub-hero-text_2">{buildRigTextContent.subHeadText}</p>
          </div>
        </div>
      </div>

      <div className="md:mx-auto px-5 my-auto text-slate-800 md:text-center py-8">
        <div className="max-w-3xl mx-auto">
          <p>{buildRigTextContent.paragraphText_1}</p>
          <br />
          <p>{buildRigTextContent.paragraphText_2}</p>
          <div className="my-10">
            <YoutubeEmbed videoId="neNbVMelMcQ" title="Worship Rig Tour" />
          </div>
          <p>{buildRigTextContent.paragraphText_3}</p>
        </div>
      </div>
    </>
  );
};

export default BuildRigPage;
