import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  instrumentalists,
  instrumentalistsTextContent,
} from "@/app/lib/meetInstrumentalists";

const MeetInstrumentalist: React.FC = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Header section */}
      <header
        className="bg-cover bg-center py-12 relative"
        style={{
          backgroundImage:
            'url("https://d1ctrvvfkbyl4b.cloudfront.net/blog/yo@2x.png")',
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="container mx-auto px-4 relative flex justify-center items-center">
          <h1 className="text-white text-3xl font-semibold">
            {instrumentalistsTextContent.headText}
          </h1>
        </div>
      </header>

      {/* Animated image section with description */}
      <div className="container mx-auto px-4 py-8 flex flex-col items-center">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-gray-800 text-lg font-semibold mb-4 text-center sm:text-left">
            Explore talented instrumentalists
          </h1>
          <p className="text-gray-700 mb-8 text-left">
            {instrumentalistsTextContent.paragraphText}
          </p>
        </div>
        <img
          src="https://miro.medium.com/v2/resize:fit:720/format:webp/1*tdqEyn7gNoOcczjObF7MNQ.gif"
          alt="Animated Image"
        />
      </div>

      {/* Main content section */}
      <div className="container mx-auto md:px-48 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
          {/* Map through the instrumentalists array and render their profiles */}
          {instrumentalists.map((instrumentalist) => (
            <div
              key={instrumentalist.id}
              className="bg-white rounded-lg overflow-hidden shadow-md"
            >
              <img
                src={instrumentalist.imageUrl}
                alt={instrumentalist.name}
                className="w-full h-48 object-cover object-center rounded-t-lg"
              />
              <div className="p-4">
                <h2 className="text-gray-800 text-lg font-semibold mb-2">
                  {instrumentalist.name}
                </h2>
                <p className="text-gray-600 mb-2">
                  Instrument: {instrumentalist.instrument}
                </p>
                <p className="text-gray-600 mb-4">
                  Genre: {instrumentalist.genre}
                </p>
                <div className="flex justify-start">
                  <Button variant="default">
                    <Link href="/">Connect for Collaboration</Link>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MeetInstrumentalist;
