import React from "react";

const ProductFinderContentSection: React.FC = () => {
  return (
    <div
      data-testid="product-finder-content-section"
      className="p-4 bg-gray-100"
    >
      <div className="text-center">
        <h2 className="mb-4 text-2xl font-bold">New products</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Featured Product 1 */}
        <div className="bg-white shadow-md p-4 rounded-lg">
          <div className="mb-4">
            <span className="bg-blue-500 text-white px-2 py-1 rounded-md mr-2">
              New
            </span>
            <a
              href="/en/products/komplete/keyboards/kontrol-s49-s61-s88/"
              className="font-bold text-blue-600"
            >
              Kontrol S88
            </a>
          </div>
          <p className="text-gray-600 mb-4">
            Keyboard controller with 88 fully weighted hammer-action keys, deep
            software integration, and polyphonic aftertouch.
          </p>
          <div className="flex justify-between">
            <span className="text-gray-700">$1,299.00</span>
            <a
              href="/en/pricing/kontrol-s49-s61-s88/"
              className="text-blue-600 hover:underline"
            >
              View Details
            </a>
          </div>
        </div>
        {/* Featured Product 2 */}
        <div className="bg-white shadow-md p-4 rounded-lg">
          <div className="mb-4">
            <span className="bg-blue-500 text-white px-2 py-1 rounded-md mr-2">
              New
            </span>
            <a
              href="/en/products/komplete/cinematic/action-woodwinds/"
              className="font-bold text-blue-600"
            >
              Action Woodwinds
            </a>
          </div>
          <p className="text-gray-600 mb-4">
            The true-to-life sound of a full orchestral woodwind ensemble with a
            vast range of phrases and articulations.
          </p>
          <div className="flex justify-between">
            <span className="text-gray-700">$199.00</span>
            <a
              href="/en/pricing/action-woodwinds/"
              className="text-blue-600 hover:underline"
            >
              View Details
            </a>
          </div>
        </div>
        {/* Featured Product 3 */}
        <div className="bg-white shadow-md p-4 rounded-lg">
          <div className="mb-4">
            <span className="bg-blue-500 text-white px-2 py-1 rounded-md mr-2">
              New
            </span>
            <a
              href="/en/products/komplete/guitar/guitar-rig-7-pro/"
              className="font-bold text-blue-600"
            >
              Guitar Rig 7 Pro
            </a>
          </div>
          <p className="text-gray-600 mb-4">
            A multi-effects rack and amp simulator with cutting-edge machine
            learning technology and an intuitive interface.
          </p>
          <div className="flex justify-between">
            <span className="text-gray-700">$99.00</span>
            <a
              href="/en/pricing/guitar-rig-7-pro/"
              className="text-blue-600 hover:underline"
            >
              View Details
            </a>
          </div>
        </div>
        {/* Featured Product 4 */}
        <div className="bg-white shadow-md p-4 rounded-lg">
          <div className="mb-4">
            <span className="bg-blue-500 text-white px-2 py-1 rounded-md mr-2">
              Special offer
            </span>
            <a
              href="/en/specials/komplete/signature-series-jacob-collier/"
              className="font-bold text-blue-600"
            >
              Signature Series – Jacob Collier
            </a>
          </div>
          <p className="text-gray-600 mb-4">
            Save on the plugins used by Jacob Collier, from synths to mixing and
            mastering suites.
          </p>
          <div className="flex justify-between">
            <span className="text-gray-700">$399.00</span>
            <a
              href="/en/pricing/signature-series-jacob-collier/"
              className="text-blue-600 hover:underline"
            >
              View Details
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductFinderContentSection;
