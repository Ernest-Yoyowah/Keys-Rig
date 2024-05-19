import Image from "next/image";
import React from "react";

const Logo: React.FC<{
  src: string;
  alt: string;
  heightClass: string;
  width: number;
  height: number;
}> = ({ src, alt, heightClass, width, height }) => {
  return (
    <div className="w-1/2 sm:w-auto mb-4 sm:mb-0">
      <Image
        src={src}
        alt={alt}
        className={heightClass}
        width={width}
        height={height}
      />
    </div>
  );
};

export default Logo;
