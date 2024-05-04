import React from "react";
import Link from "next/link";
import { SectionProps } from "@/types/types";

const InstrumentMarketSection: React.FC<SectionProps> = ({
  title,
  description,
  imageUrl,
  link,
}) => {
  return (
    <div className="mb-12">
      <h2 className="head-text_1 text-center mb-6 pb-2">{title}</h2>
      <p className="paragraph-text text-center mb-6">{description}</p>
      <div className="flex justify-center">
        <img src={imageUrl} alt={title} className="w-1/2 md:w-1/3" />
      </div>
      <div className="flex justify-center mt-4">
        <Link href={link} className="link_text">
          Explore {title}
        </Link>
      </div>
    </div>
  );
};

export default InstrumentMarketSection;
