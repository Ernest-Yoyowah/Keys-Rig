import React from "react";

const ProductFinderContentSection: React.FC = () => {
  return (
    <div
      data-testid="product-finder-content-section"
      className="line-height-[1.15] text-size-adjust-[100%] font-sans font-normal font-size-[16px] color-[#222] bg-gray-100 box-border min-w-[0] py-0.5rem pb-2rem pl-2rem pr-2rem"
    >
      <div className="text-rendering-[optimizeLegibility]">
        <h2 style={{ textAlign: "center" }} className="text-2xl">
          New products
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-0 lg:grid-cols-3 gap-4">
        {/* Featured Product 1 */}
        <div className="bg-white shadow-md p-4">
          <div className="relative h-[320px]">
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
              Product Name
            </h2>
            <p className="text-sm text-gray-600">
              Description of the product goes here. It can be a bit longer to
              provide more information about the product.
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
