import Link from "next/link";
import { instrumentalistsTextContent } from "@/app/lib/meetInstrumentalists";
import React from "react";

const CollaborationSection = () => {
  return (
    <section className="bg-gray-100 py-12 w-full">
      <div className="container mx-auto px-4">
        <h1 className="head-text_1 text-center mb-8">
          Join Our Collaborative Community
        </h1>
        <div className="flex justify-center items-center pb-10">
          <img
            src="https://miro.medium.com/v2/resize:fit:720/format:webp/1*tdqEyn7gNoOcczjObF7MNQ.gif"
            alt="Animated Image"
          />
        </div>
        <div className="max-w-3xl mx-auto">
          <p className="text-gray-700 mb-8 text-center">
            {instrumentalistsTextContent.paragraphText}
          </p>
          <div className="link_text text-center">
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
