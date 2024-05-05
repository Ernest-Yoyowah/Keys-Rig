import React from "react";
import { NextPage } from "next";
import InstrumentMarketSection from "@/components/ui/InstrumentMarketSection";
import {
  marketSections,
  marketTextContent,
} from "@/app/lib/instrumentMarketData";

const InstrumentMarket: NextPage = () => {
  return (
    <>
      {/* Header Section */}
      <div className="relative h-96">
        {/* Background Image */}
        <img
          className="absolute inset-0 w-full h-full object-cover"
          src="https://info.shimamura.co.jp/digital/img/upload/shimastaff/2016/nanoKONTROL_Studio_mac_rgb_s.jpg"
          alt="Header Background"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-50"></div>
        {/* Content */}
        <div className="absolute inset-0 flex items-center justify-center text-white">
          <div className="text-center max-w-4xl md:p-0 px-5">
            <h1 className="hero-text_2 mb-4">{marketTextContent.headText}</h1>
            <p className="sub-hero-text_2">{marketTextContent.subHeadText}</p>
          </div>
        </div>
      </div>

      <div className="container mx-auto py-8 max-w-3xl md:text-center text-left">
        {marketSections.map((section, index) => (
          <InstrumentMarketSection key={index} {...section} />
        ))}
      </div>
    </>
  );
};

export default InstrumentMarket;
