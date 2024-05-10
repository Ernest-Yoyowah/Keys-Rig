import React from "react";
import { NextPage } from "next";
import InstrumentMarketSection from "@/components/ui/InstrumentMarketSection";
import {
  marketSections,
  marketTextContent,
} from "@/app/lib/instrumentMarketData";
import PageHeader from "@/components/ui/PageHeader";

const InstrumentMarket: NextPage = () => {
  return (
    <>
      <PageHeader
        imageUrl="https://info.shimamura.co.jp/digital/img/upload/shimastaff/2016/nanoKONTROL_Studio_mac_rgb_s.jpg"
        altText="Header Background"
        mainHeading={marketTextContent.title}
        subHeading={marketTextContent.subtitle}
      />
      <div className="container mx-auto py-8 max-w-3xl">
        {marketSections.map((section, index) => (
          <InstrumentMarketSection key={index} {...section} />
        ))}
      </div>
    </>
  );
};

export default InstrumentMarket;
