import React from "react";
import { NextPage } from "next";
import Link from "next/link";

const InstrumentMarket: NextPage = () => {
  return (
    <>
      {/* Header Section */}
      <div className="relative h-96">
        {/* Background Image */}
        <img
          className="absolute inset-0 w-full h-full object-cover"
          src="https://c4.wallpaperflare.com/wallpaper/257/116/964/light-strings-music-sound-wallpaper-preview.jpg"
          alt="Header Background"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-50"></div>
        {/* Content */}
        <div className="absolute inset-0 flex items-center justify-center text-white">
          <div className="text-center max-w-4xl md:p-0 px-5">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Instrument Market
            </h1>
            <p className="text-lg md:text-xl">
              Welcome to our instrument market! Browse through listings to buy
              or sell musical instruments and equipment. Connect with other
              musicians, collaborate on projects, and find your next favorite
              gear!
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto py-8 max-w-3xl">
        {/* Rentals Section */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-center mb-6 pb-2">
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
            <Link
              href="/hub/instrumentMarket/repair-rental"
              className="text-blue-500 underline"
            >
              Explore Rentals
            </Link>
          </div>
        </div>

        {/* Sound Engineering Section */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-center mb-6 pb-2">
            Sound Engineering Services
          </h2>
          <p className="text-lg text-center mb-6">
            Need professional sound engineering services for your recordings or
            live performances? Discover experienced sound engineers who can help
            you achieve the perfect sound.
          </p>
          <div className="flex justify-center">
            <img
              src="https://admi.ac.ke/wp-content/uploads/2023/09/Untitled-design-45.png"
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
          <h2 className="text-3xl md:text-4xl font-semibold text-center mb-6 pb-2">
            VST and Music Tech Setup
          </h2>
          <p className="text-lg text-center mb-6">
            Explore VST plugins, software, and music tech setup services to
            enhance your music production setup. Find the latest technology and
            expert assistance to take your music to the next level.
          </p>
          <div className="flex justify-center">
            <img
              src="https://static1.makeuseofimages.com/wordpress/wp-content/uploads/2023/07/fi-from-arturia.jpg"
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
    </>
  );
};

export default InstrumentMarket;
