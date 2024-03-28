import React from "react";

const ProductFinderSubMenu: React.FC = () => {
  return (
    <ul className="md:flex md:justify-center md:items-center gap-x-4 text-center bg-[#3a3d40] text-[#f0f0f0] px-0 py-2">
      <li className="product-finder-submenu-link mb-2">
        <a href="/en/catalog/deals/" className="">
          Deals
        </a>
      </li>
      <li className="product-finder-submenu-link mb-2">
        <a href="/en/catalog/free/" className="">
          Free
        </a>
      </li>
      <li className="product-finder-submenu-link mb-2">
        <a href="/en/catalog/new/" className="">
          New
        </a>
      </li>
      <li className="product-finder-submenu-link mb-2">
        <a href="/en/catalog/my-komplete-offers/" className="">
          My Komplete offers
        </a>
      </li>
    </ul>
  );
};

export default ProductFinderSubMenu;
