import { Button } from "@/components/ui/button";
import React, { ReactNode } from "react";

interface FeatureCardProps {
  title: string;
  description: string;
  buttonText: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  buttonText,
}) => {
  return (
    <div className="text-center lg:text-left mb-8 lg:mb-0 lg:w-1/3">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <p className="mb-4">{description}</p>
      <Button className="bg-[#242424] border-l-4 border-yellow-500 rounded-none px-4 py-2 text-white hover:bg-yellow-500 hover:text-white transition duration-300">
        {buttonText}
      </Button>
    </div>
  );
};

export default FeatureCard;
