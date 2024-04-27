import React from "react";
import { Button } from "./button";

const FeatureSection: React.FC = () => {
  return (
    <div className="bg-cover bg-center py-16 px-20 text-white relative w-full">
      <div
        className="absolute inset-0 bg-black opacity-50"
        style={{ zIndex: -1 }}
      ></div>
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center">
          {/* Feature 1 */}
          <div className="text-center lg:text-left mb-8 lg:mb-0 lg:w-1/3">
            <h2 className="text-2xl font-bold mb-4">Gear Needed</h2>
            <p className="mb-4">
              Paragraph Text 1. Lorem ipsum dolor sit amet.
            </p>
            <Button className="bg-[#242424] border-l-4 border-yellow-500 rounded-none px-4 py-2 text-white hover:bg-yellow-500 hover:text-white transition duration-300">
              Button 1
            </Button>
          </div>

          {/* Feature 2 */}
          <div className="text-center lg:text-left mb-8 lg:mb-0 lg:w-1/3">
            <h2 className="text-2xl font-bold mb-4">Build Rig</h2>
            <p className="mb-4">Paragraph Text 2. Lorem ipsum dolor sit</p>
            <Button className="bg-[#242424] border-l-4 border-yellow-500 rounded-none px-4 py-2 text-white hover:bg-yellow-500 hover:text-white transition duration-300">
              Button 2
            </Button>
          </div>

          {/* Feature 3 */}
          <div className="text-center lg:text-left lg:w-1/3">
            <h2 className="text-2xl font-bold mb-4">Explore Other Rigs</h2>
            <p className="mb-4">
              Paragraph Text 3. Lorem ipsum dolor sit amet, consectetur
            </p>
            <Button className="bg-[#242424] border-l-4 border-yellow-500 rounded-none px-4 py-2 text-white hover:bg-yellow-500 hover:text-white transition duration-300">
              Button 3
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
