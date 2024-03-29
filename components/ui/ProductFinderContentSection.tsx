import React from "react";

const ProductFinderContentSection: React.FC = () => {
  return (
    <div
      data-testid="product-finder-content-section"
      className="line-height-[1.15] text-size-adjust-[100%] font-sans font-normal font-size-[16px] color-[#222] bg-gray-100 box-border min-w-[0] py-[0.5rem] pb-[4rem] pl-[2rem] pr-[2rem]"
    >
      <div className="flex p-6 justify-center items-center ">
        <h2 className="text-2xl text-[#222] font-bold">New products</h2>
      </div>
      <div className="flex flex-wrap justify-center gap-4 md:text-center">
        {/* Featured Product 1 */}
        <div className="bg-white shadow-md p-4 w-80">
          <div className="relative h-62">
            <img
              src="https://www.native-instruments.com/typo3temp/pics/img-packshot-kontrol-s88-product-finder-567d15708f21fecf897559368e397a50-d.jpg"
              alt="Product Image"
              className="w-full h-full object-cover"
            />
            <span className="absolute top-2 left-2 text-gray-700 bg-white py-0 px-2 ">
              New
            </span>
          </div>
          <div className="p-4">
            <h2 className="text-lg font-semibold text-gray-800 mb-2">
              Kontrol S88
            </h2>
            <p className="text-sm text-gray-600">
              Keyboard controller with 88 fully weighted hammer-action keys,
              deep software integration, and polyphonic aftertouch.
            </p>
            <div className="mt-4">
              <span className="text-lg font-semibold text-gray-800 mr-2">
                $99.00
              </span>
              <del className="text-sm text-gray-500">$199.00</del>
            </div>
          </div>
        </div>
        {/* Featured Product 2 */}
        {/* Featured Product 3 */}
        {/* Featured Product 4 */}
      </div>
    </div>
  );
};

export default ProductFinderContentSection;
