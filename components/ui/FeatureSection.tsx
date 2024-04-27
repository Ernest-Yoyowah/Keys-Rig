import React from "react";
import { Button } from "./button";
import Link from "next/link";

// Feature component to represent each feature section
const Feature: React.FC<{
  title: string;
  paragraph: string;
  buttonText: string;
  link: string;
}> = ({ title, paragraph, buttonText, link }) => {
  return (
    <div className="text-center lg:text-left mb-8 lg:mb-0 lg:w-1/3">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <p className="mb-4">{paragraph}</p>
      <Link href={link}>
        <Button className="bg-[#121111] border-l-4 border-yellow-500 rounded-none px-4 py-2 text-white hover:bg-black hover:text-white transition duration-300">
          {buttonText}
        </Button>
      </Link>
    </div>
  );
};

// FeatureSection component
const FeatureSection: React.FC = () => {
  const features = [
    {
      title: "Gear Needed",
      paragraph: "Paragraph Text 1. Lorem ipsum dolor sit amet.",
      buttonText: "Button 1",
      link: "/hub/keysrig",
    },
    {
      title: "Build Rig",
      paragraph: "Paragraph Text 2. Lorem ipsum dolor sit",
      buttonText: "Button 2",
      link: "/hub/keysrig",
    },
    {
      title: "Explore Other Rigs",
      paragraph: "Paragraph Text 3. Lorem ipsum dolor sit amet, consectetur",
      buttonText: "Button 3",
      link: "/hub/keysrig",
    },
  ];

  return (
    <div className="bg-cover bg-center py-16 px-20 text-white relative w-full">
      <div
        className="absolute inset-0 bg-black opacity-50"
        style={{ zIndex: -1 }}
      ></div>
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center">
          {/* Mapping through features array and rendering each feature */}
          {features.map((feature, index) => (
            <Feature
              key={index}
              title={feature.title}
              paragraph={feature.paragraph}
              buttonText={feature.buttonText}
              link={feature.link}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
