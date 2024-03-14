import Image from "next/image";
import React from "react";

const Featured: React.FC = () => {
  return (
    <div className="bg-gray-100 py-8 mt-0">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-4 text-zinc-700 font-mono">
          FEATURED IN
        </h2>
        <div className="flex md:flex-wrap justify-center items-center gap-2 md:space-x-8">
          <div className="w-1/2 sm:w-auto mb-4 sm:mb-0">
            <Image
              src="/ableton_logo.jpg"
              alt="Logo 1"
              className="h-12"
              width={100}
              height={200}
            />
          </div>
          <div className="w-1/2 sm:w-auto mb-4 sm:mb-0">
            <Image
              src="/FL-Studio-Hero.png"
              alt="Logo 2"
              className="h-14"
              width={130}
              height={50}
            />
          </div>
          <div className="w-1/2 sm:w-auto mb-4 sm:mb-0">
            <Image
              src="/korg.jpg"
              alt="Logo 3"
              className="h-12"
              width={100}
              height={70}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
