import React from "react";
import { Metadata } from "next";
import { gearItems } from "@/app/lib/gearItems";

export const metadata: Metadata = {
  title:
    "Gear - Choosing which gear to buy when building your keyboard rig can be overwhelming",
};

const GearPage = () => {
  return (
    <>
      <div className="relative h-96">
        <img
          className="absolute inset-0 w-full h-full object-cover"
          src="https://americansongwriter.com/wp-content/uploads/2023/01/midi-stands.jpg?fit=2000%2C800"
          alt="Header Background"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0 flex items-center justify-center text-white">
          <div className="text-center max-w-4xl md:p-0 px-5">
            <h1 className="hero-text_2 mb-4">{textContent.title}</h1>
            <p className="sub-hero-text_2">{textContent.subtitle}</p>
          </div>
        </div>
      </div>
      <div className="md:mx-auto px-5 my-auto text-slate-800 md:text-center py-8">
        <div className="max-w-3xl mx-auto">
          {/* Display gear items */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            {gearItems.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-lg"
              >
                <img
                  className="w-full h-48 object-cover"
                  src={item.image}
                  alt={item.name}
                />
                <div className="p-6">
                  <h2 className="text-lg font-semibold mb-2">{item.name}</h2>
                  <a href="#" className="link_text inline-block mt-4">
                    Learn More
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default GearPage;
