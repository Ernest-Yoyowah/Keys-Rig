// ProductFinderContentSection.tsx
import React from "react";
import { products } from "@/app/lib/productsData";
import { Button } from "./button";
const ProductFinderContentSection: React.FC = () => {
  return (
    <div
      data-testid="product-finder-content-section"
      className=" font-normal font-size-[16px] bg-gray-100 box-border min-w-[0] py-[0.5rem] pb-[4rem] "
    >
      <div className="flex p-6 justify-center items-center">
        <h2 className="text-2xl text-[#222] font-bold">New products</h2>
      </div>
      <div className="flex flex-wrap justify-center gap-4 md:text-center">
        {/* Render product cards */}
        {products.map((product) => (
          <div key={product.id} className="bg-white shadow-md p-4 w-80">
            <div className="relative h-62">
              <img
                src={product.imageUrl}
                alt={product.name}
                className="w-full h-full object-cover"
              />
              <span className="absolute top-2 left-2 text-gray-700 bg-white py-0 px-2">
                New
              </span>
            </div>
            <div className="p-4">
              <h2 className="text-lg font-semibold text-gray-800 mb-2">
                {product.name}
              </h2>
              <p className="text-sm text-gray-600">{product.description}</p>
              <div className="mt-4">
                <span className="text-lg font-semibold text-gray-800 mr-2">
                  ${product.price.toFixed(2)}
                </span>
                {/* Assuming there's a discounted price */}
                <del className="text-sm text-gray-500">$199.00</del>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="p-6 mt-8 text-center max-w-2xl mx-auto">
        <h2 className="text-2xl text-[#222] font-bold">Software & sounds</h2>
        <p className="my-3">
          A vast range of virtual instruments and effects: Synths, sampled
          instruments, studio and creative effects, samplers, and cinematic
          tools.
        </p>
        <Button
          variant="default"
          className="bg-[#3c3c3c] text-[#ffffff] font-bold mt-2 rounded-none"
        >
          See all software & sounds
        </Button>
      </div>
    </div>
  );
};

export default ProductFinderContentSection;
