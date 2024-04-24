import React from "react";
import { NextPage } from "next";
import Link from "next/link";
import InstrumentMarketSection from "@/components/ui/InstrumentMarketSection";

const sections = [
  {
    title: "Rentals",
    description:
      "Looking to rent instruments or equipment for your gigs or events? Browse our rental listings for a wide range of musical gear.",
    imageUrl:
      "https://www.keytarhq.com/wp-content/uploads/instrument-rentals.jpg",
    link: "/hub/instrumentMarket/repair-rental",
  },
  {
    title: "Sound Engineering Services",
    description:
      "Need professional sound engineering services for your recordings or live performances? Discover experienced sound engineers who can help you achieve the perfect sound.",
    imageUrl:
      "https://admi.ac.ke/wp-content/uploads/2023/09/Untitled-design-45.png",
    link: "/hub/instrumentMarket/sound-engineering",
  },
  {
    title: "VST and Music Tech Setup",
    description:
      "Explore VST plugins, software, and music tech setup services to enhance your music production setup. Find the latest technology and expert assistance to take your music to the next level.",
    imageUrl:
      "https://static1.makeuseofimages.com/wordpress/wp-content/uploads/2023/07/fi-from-arturia.jpg",
    link: "/hub/instrumentMarket/meet-instrumentalists",
  },
];

const InstrumentMarket: NextPage = () => {
  return (
    <>
      {/* Header Section */}
      <div className="relative h-96">
        {/* Background Image */}
        <img
          className="absolute inset-0 w-full h-full object-cover"
          src="https://static1.makeuseofimages.com/wordpress/wp-content/uploads/2021/02/keyboard-red-green-blue.jpg"
          alt="Header Background"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-50"></div>
        {/* Content */}
        <div className="absolute inset-0 flex items-center justify-center text-white">
          <div className="text-center max-w-4xl md:p-0 px-5">
            <h1 className="hero-text_2 mb-4">Instrument Market</h1>
            <p className="sub-hero-text_2">
              Welcome to our instrument market! Browse through listings to buy
              or sell musical instruments and equipment. Connect with other
              musicians, collaborate on projects, and find your next favorite
              gear!
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto py-8 max-w-3xl">
        {sections.map((section, index) => (
          <InstrumentMarketSection key={index} {...section} />
        ))}
      </div>
    </>
  );
};

export default InstrumentMarket;
