import React from "react";

const ProductFinderTopMenu: React.FC = () => {
  return (
    <nav
      data-testid="product-finder-top-menu-root"
      className="bg-[#2a2c2e] p-4 hidden md:block"
    >
      <ul className="md:flex md:justify-center md:items-center gap-x-12 text-center">
        <li>
          <a href="/hub/plugins" className="text-[#f0f0f0]">
            <span className="font-bold text-base">OVERVIEW</span>
            <span className="block text-sm">All Products</span>
          </a>
        </li>
        <li>
          <a href="/hub/plugins" className="text-[#f0f0f0]">
            <span className="font-bold text-base">SOFTWARE & SOUNDS</span>
            <span className="block text-sm">Synthage, Nord Stage</span>
          </a>
        </li>
        <li>
          <a href="/hub/keysrig/gear" className="text-[#f0f0f0]">
            <span className="font-bold text-base">HARDWARE</span>
            <span className="block text-sm">Keyboards, Midi & more</span>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default ProductFinderTopMenu;
