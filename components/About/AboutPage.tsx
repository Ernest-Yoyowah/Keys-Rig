import React from "react";

const AboutPage: React.FC = () => {
  return (
    <>
      <div className="flex items-center justify-end max-w-2xl pt-10">
        <div className="w-16 h-0.5 bg-yellow-400 mr-4"></div>
        <p className="text-sm font-normal">Why Do Musicians Love VSTs</p>
      </div>
      <div className="md:min-h-screen flex py-7 w-full">
        <div className="flex-1 bg-black text-white p-8 flex flex-col justify-center skew-left">
          <h1 className="text-4xl font-bold mb-4 text-center">About VSTs</h1>
          <p className="text-lg mb-8 text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
            odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.
          </p>
          <div className="flex justify-center">
            <button className="px-4 py-2 rounded-md mr-4  bg-white text-black hover:bg-black hover:text-white hover:border-white">
              Button 1
            </button>
            <button className="bg-white text-black px-4 py-2 rounded-md">
              Button 2
            </button>
          </div>
        </div>
        <div className="flex-1 relative skew-right md:flex hidden">
          <div className="absolute inset-0 bg-black opacity-20"></div>
          <img
            src="https://png.pngtree.com/png-clipart/20220719/original/pngtree-recording-studio-isometric-music-sound-png-image_8369287.png"
            alt="Background"
            className="object-cover h-full w-full"
          />
        </div>
      </div>
    </>
  );
};

export default AboutPage;
