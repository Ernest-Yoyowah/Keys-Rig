import React from "react";
import { Metadata } from "next";
import { buildRigTextContent } from "@/app/lib/buildRig";
import YoutubeEmbed from "@/components/ui/YoutubeEmbed";
import PageHeader from "@/components/ui/PageHeader";

export const metadata: Metadata = {
  title: "Virtual Rig - build your own keys rig",
};

const BuildRigPage = () => {
  return (
    <>
      <PageHeader
        imageUrl="https://www.shutterstock.com/image-photo/microphone-computer-musical-equipment-guitars-260nw-1776708860.jpg"
        altText="Header Background"
        mainHeading={buildRigTextContent.headText}
        subHeading={buildRigTextContent.subHeadText}
      />
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
