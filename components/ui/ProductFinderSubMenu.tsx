import React from "react";

const ProductFinderSubMenu: React.FC = () => {
  return (
    <ul className="text-center bg-[#3a3d40] p-0">
      <li className="product-finder-submenu-link mb-2">
        <a href="/en/catalog/deals/" className="text-blue-600">
          Deals
        </a>
      </li>
      <li className="product-finder-submenu-link mb-2">
        <a href="/en/catalog/free/" className="text-blue-600">
          Free
        </a>
      </li>
      <li className="product-finder-submenu-link mb-2">
        <a href="/en/catalog/new/" className="text-blue-600">
          New
        </a>
      </li>
      <li className="product-finder-submenu-link mb-2">
        <a href="/en/catalog/my-komplete-offers/" className="text-blue-600">
          My Komplete offers
        </a>
      </li>
    </ul>
  );
};

export default ProductFinderSubMenu;
