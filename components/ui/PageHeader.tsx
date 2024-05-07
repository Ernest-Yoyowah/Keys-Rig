import React from "react";
import { PageHeaderProps } from "@/types/types";

const PageHeader: React.FC<PageHeaderProps> = ({
  imageUrl,
  altText,
  mainHeading,
  subHeading,
}) => {
  return (
    <div className="relative h-96">
      <img
        className="absolute inset-0 w-full h-full object-cover"
        src={imageUrl}
        alt={altText}
      />
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="absolute inset-0 flex items-center justify-center text-white">
        <div className="text-center max-w-4xl md:p-0 px-5">
          <h1 className="hero-text_2 mb-4">{mainHeading}</h1>
          <p className="sub-hero-text_2">{subHeading}</p>
        </div>
      </div>
    </div>
  );
};

export default PageHeader;
