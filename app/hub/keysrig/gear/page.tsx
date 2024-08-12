import React from "react";
import { Metadata } from "next";
import { gearItems, gearTextContent } from "@/app/lib/gearItems";
import PageHeader from "@/components/ui/PageHeader";

export const metadata: Metadata = {
  title:
    "Gear - Choosing which gear to buy when building your keyboard rig can be overwhelming",
};

const GearPage = () => {
  return (
    <>
      <PageHeader
        imageUrl="https://flypaper.soundfly.com/wp-content/uploads/2018/04/roli-seaboard-facebook.jpg"
        altText="Header Background"
        mainHeading={gearTextContent.title}
        subHeading={gearTextContent.subtitle}
      />
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
