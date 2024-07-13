import Link from "next/link";
import { instrumentalistsTextContent } from "@/app/lib/meetInstrumentalists";
import React from "react";

const CollaborationSection = () => {
  return (
    <section className="bg-[#262644] py-12 w-full text-white">
      <div className="container mx-auto px-4">
        <h1 className="font-bold text-4xl text-center mb-8 text-white">
          Join Our Collaborative Community
        </h1>
        <div className="flex justify-center items-center pb-10">
          <img
            src="https://miro.medium.com/v2/resize:fit:720/format:webp/1*tdqEyn7gNoOcczjObF7MNQ.gif"
            alt="Animated Image"
          />
        </div>
        <div className="max-w-3xl mx-auto">
          <p className="text-white mb-8 text-center">
            {instrumentalistsTextContent.paragraphText}
          </p>
          <div className="text-[#66b2ff] text-center">
            <Link href="/hub/instrumentMarket/meet-instrumentalists">
              Meet Instrumentalists
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CollaborationSection;
