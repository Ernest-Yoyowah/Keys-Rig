import Image from "next/image";
import React from "react";
import Featured from "./featured";

const Introductory: React.FC = () => {
  return (
    <>
      <div className="pb-12 md:pb-12 mt-0">
        <div className="container mx-auto md:text-center">
          <h2 className="text-3xl font-semibold mb-5 text-slate-700	">
            Unlock Your Musical Potential
          </h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-gray-700">
              Dive into the world of music production with our collection of
              premium VST plugins for keys and synths. Whether you're a seasoned
              musician or just starting out, our plugins offer unparalleled
              sound quality and versatility, allowing you to create music that
              truly stands out.
            </p>
          </div>
        </div>
      </div>
      <Featured />
    </>
  );
};

export default Introductory;

{
  /* <Image
src="background-image.svg" // Replace with the path to your image
alt="Music Production" // Replace with appropriate alt text
width={400} // Adjust width as needed
height={300} // Adjust height as needed
/> */
}
