import React from "react";
import { NextPage } from "next";

const InstrumentMarket: NextPage = () => {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl md:text-5xl font-semibold text-center mb-8">
        Instrument Market
      </h1>
      <p className="text-lg text-center">
        Welcome to our instrument market! Browse through listings to buy or sell
        musical instruments and equipment. Connect with other musicians,
        collaborate on projects, and find your next favorite gear!
      </p>
      <div className="mt-12">
        <h2 className="text-2xl md:text-4xl font-semibold text-center mb-6">
          Repair Services
        </h2>
        <p className="text-lg text-center">
          Need repairs or maintenance for your instruments? Explore repair
          services offered by skilled technicians to keep your gear in top
          condition.
        </p>
      </div>
    </div>
  );
};

export default InstrumentMarket;
