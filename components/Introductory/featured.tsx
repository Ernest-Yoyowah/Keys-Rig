import React from "react";
import Logo from "../ui/Logo";

const logos = [
  {
    src: "/ableton_logo.jpg",
    alt: "Logo 1",
    heightClass: "h-12",
    width: 100,
    height: 200,
  },
  {
    src: "/FL-Studio-Hero.png",
    alt: "Logo 2",
    heightClass: "h-14",
    width: 130,
    height: 50,
  },
  {
    src: "/korg.jpg",
    alt: "Logo 3",
    heightClass: "h-12",
    width: 100,
    height: 70,
  },
];

const Featured: React.FC = () => {
  return (
    <div className="bg-gray-100 py-8 mt-0">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-4 text-zinc-700 font-mono">
          FEATURED IN
        </h2>
        <div className="flex md:flex-wrap justify-center items-center gap-2 md:space-x-8">
          {logos.map((logo, index) => (
            <Logo
              key={index}
              src={logo.src}
              alt={logo.alt}
              heightClass={logo.heightClass}
              width={logo.width}
              height={logo.height}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Featured;
