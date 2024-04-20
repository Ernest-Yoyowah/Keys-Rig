import React from "react";
import { NextPage } from "next";

const InstrumentMarket: NextPage = () => {
  return (
    <div className="container mx-auto py-8 max-w-3xl">
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
        <div className="flex justify-center">
          <img
            src="https://www.keytarhq.com/wp-content/uploads/instrument-rentals.jpg"
            alt="Rentals"
            className="w-1/2 md:w-1/3"
          />
        </div>
        <div className="flex justify-center mt-4">
          <a href="#" className="text-blue-500 underline">
            Explore Rentals
          </a>
        </div>
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
        <div className="flex justify-center">
          <img
            src="/sound_engineering.jpg"
            alt="Sound Engineering Services"
            className="w-1/2 md:w-1/3"
          />
        </div>
        <div className="flex justify-center mt-4">
          <a href="#" className="text-blue-500 underline">
            Discover Sound Engineering Services
          </a>
        </div>
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
        <div className="flex justify-center">
          <img
            src="/vst_setup.jpg"
            alt="VST and Music Tech Setup"
            className="w-1/2 md:w-1/3"
          />
        </div>
        <div className="flex justify-center mt-4">
          <a href="#" className="text-blue-500 underline">
            Explore VST and Music Tech Setup
          </a>
        </div>
      </div>
    </div>
  );
};

export default InstrumentMarket;
