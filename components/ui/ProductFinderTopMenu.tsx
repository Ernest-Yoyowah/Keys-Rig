import React from "react";

const ProductFinderTopMenu: React.FC = () => {
  return (
    <nav
      data-testid="product-finder-top-menu-root"
      className="bg-[#2a2c2e] p-4"
    >
      <ul className="md:flex md:justify-center md:items-center gap-x-12 text-center">
        <li>
          <a href="/en/catalog/" className="text-[#f0f0f0]">
            <span className="font-bold text-base">OVERVIEW</span>
            <span className="block text-sm">All Products</span>
          </a>
        </li>
        <li>
          <a href="/en/catalog/software/" className="text-[#f0f0f0]">
            <span className="font-bold text-base">SOFTWARE & SOUNDS</span>
            <span className="block text-sm">KOMPLETE, NKS, iZotope</span>
          </a>
        </li>
        <li>
          <a href="/en/catalog/hardware/" className="text-[#f0f0f0]">
            <span className="font-bold text-base">HARDWARE</span>
            <span className="block text-sm">
              Keyboards, MASCHINE, TRAKTOR & more
            </span>
          </a>
        </li>
        <li>
          <a href="/en/catalog/9-for-99-special/" className="text-[#f0f0f0]">
            <span className="font-boldtext-base">9 for 99</span>
            <span className="block text-sm">Mar 20 - Apr 9</span>
          </a>
        </li>
        <li>
          <a
            href="/en/catalog/projectsam-offer-2024/"
            className="text-[#f0f0f0]"
          >
            <span className="font-bold text-base">NKS special</span>
            <span className="block text-sm">Mar 11 - Mar 28</span>
          </a>
        </li>
        <li>
          <a href="/en/catalog/piano-day-offer/" className="text-[#f0f0f0]">
            <span className="font-bold text-base">Piano Day special</span>
            <span className="block text-sm">Mar 27 - Apr 2</span>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default ProductFinderTopMenu;
