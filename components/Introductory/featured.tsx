import Image from "next/image";
import React from "react";

const Featured: React.FC = () => {
  return (
    <div className="bg-gray-100 py-8">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-4 text-zinc-700 font-mono">
          FEATURED IN
        </h2>
        <div className="flex justify-center items-center space-x-8">
          <Image
            src="/ableton_logo.jpg" // Replace with the path to your logo image
            alt="Logo 1"
            className="h-12"
            width={100}
            height={200}
          />
          <Image
            src="/FL-Studio-Hero.png" // Replace with the path to your logo image
            alt="Logo 2"
            className="h-14"
            width={130}
            height={50}
          />
          <Image
            src="/korg.jpg" // Replace with the path to your logo image
            alt="Logo 3"
            className="h-12"
            width={100}
            height={70}
          />
          {/* Add more logo images as needed */}
        </div>
      </div>
    </div>
  );
};

export default Featured;
