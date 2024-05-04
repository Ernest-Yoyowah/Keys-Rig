// pages/meet-instrumentalist.tsx

import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

// Sample data of instrumentalists
const instrumentalists = [
  {
    id: 1,
    name: "John Doe",
    instrument: "Guitar",
    genre: "Rock",
    imageUrl:
      "https://www.shutterstock.com/image-photo/smiling-african-american-millennial-businessman-260nw-1437938108.jpg",
    socialMedia: {
      twitter: "https://twitter.com/johndoe",
      instagram: "https://instagram.com/johndoe",
    },
  },
  {
    id: 2,
    name: "Jane Smith",
    instrument: "Violin",
    genre: "Classical",
    imageUrl:
      "https://t3.ftcdn.net/jpg/02/86/33/20/360_F_286332024_RwH5zhETkoL2LC3p3yuxqvV0l0H32m2J.jpg",
    socialMedia: {
      twitter: "https://twitter.com/janesmith",
      instagram: "https://instagram.com/janesmith",
    },
  },
  {
    id: 3,
    name: "Ernest Nii",
    instrument: "Keyboardist",
    genre: "Classical",
    imageUrl:
      "https://pbs.twimg.com/profile_images/1644130887749992448/1l0Fqur7_200x200.jpg",
    socialMedia: {
      twitter: "https://twitter.com/ernestnii",
      instagram: "https://instagram.com/ernestnii",
    },
  },
  {
    id: 4,
    name: "Linda Johnson",
    instrument: "Saxophone",
    genre: "Jazz",
    imageUrl:
      "https://www.shutterstock.com/image-photo/cheerful-african-american-guy-smiling-600nw-2029465811.jpg",
    socialMedia: {
      twitter: "https://twitter.com/lindajohnson",
      instagram: "https://instagram.com/lindajohnson",
    },
  },
];

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
        <div className="container mx-auto px-4 relative z-10 flex justify-center items-center">
          <h1 className="text-white text-3xl font-semibold">
            Meet Instrumentalist
          </h1>
        </div>
      </header>

      {/* Animated image section with description */}
      <div className="container mx-auto px-4 py-8 flex flex-col items-center">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-gray-800 text-lg font-semibold mb-4">
            Explore talented instrumentalists
          </h1>
          <p className="text-gray-700 mb-8 ">
            Connect with talented musicians for gigs, collaborations, and more.
            Whether you're looking to hire a musician for your event or want to
            collaborate on a project, you'll find the perfect match here.
          </p>
        </div>
        <img
          src="https://miro.medium.com/v2/resize:fit:720/format:webp/1*tdqEyn7gNoOcczjObF7MNQ.gif"
          alt="Animated Image"
        />
      </div>

      {/* Main content section */}
      <div className="container mx-auto px-48 py-8">
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
