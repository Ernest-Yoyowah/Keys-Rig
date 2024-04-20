import React from "react";
import { NextPage } from "next";

const InstrumentMarket: NextPage = () => {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl md:text-5xl font-semibold text-center mb-8">
        Instrument Market
      </h1>
      <p className="text-lg text-center mb-12">
        Welcome to our instrument market! Browse through listings to buy or sell
        musical instruments and equipment. Connect with other musicians,
        collaborate on projects, and find your next favorite gear!
      </p>

      {/* Rentals Section */}
      <div className="mb-12">
        <h2 className="text-2xl md:text-4xl font-semibold text-center mb-6 border-b-2 pb-2">
          Rentals
        </h2>
        <p className="text-lg text-center mb-6">
          Looking to rent instruments or equipment for your gigs or events?
          Browse our rental listings for a wide range of musical gear.
        </p>
      </div>

      {/* Sound Engineering Section */}
      <div className="mb-12">
        <h2 className="text-2xl md:text-4xl font-semibold text-center mb-6 border-b-2 pb-2">
          Sound Engineering Services
        </h2>
        <p className="text-lg text-center mb-6">
          Need professional sound engineering services for your recordings or
          live performances? Discover experienced sound engineers who can help
          you achieve the perfect sound.
        </p>
      </div>

      {/* VST and Music Tech Setup Section */}
      <div className="mb-12">
        <h2 className="text-2xl md:text-4xl font-semibold text-center mb-6 border-b-2 pb-2">
          VST and Music Tech Setup
        </h2>
        <p className="text-lg text-center mb-6">
          Explore VST plugins, software, and music tech setup services to
          enhance your music production setup. Find the latest technology and
          expert assistance to take your music to the next level.
        </p>
      </div>
    </div>
  );
};

export default InstrumentMarket;
