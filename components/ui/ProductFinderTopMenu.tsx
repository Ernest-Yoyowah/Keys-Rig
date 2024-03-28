import React from "react";

const ProductFinderTopMenu: React.FC = () => {
  return (
    <nav
      data-testid="product-finder-top-menu-root"
      className="css-jhlwkx"
      style={{
        lineHeight: "1.15",
        WebkitTextSizeAdjust: "100%",
        "--swiper-theme-color": "#007aff",
        "--swiper-navigation-size": "44px",
        WebkitFontSmoothing: "antialiased",
        textRendering: "optimizeLegibility",
        fontFamily: "'Graphik', Helvetica, Arial, sans-serif",
        fontSize: "16px",
        color: "#f0f0f0",
        boxSizing: "border-box",
        margin: "0",
        minWidth: "0",
        backgroundColor: "#2a2c2e",
        paddingLeft: "2rem",
        paddingRight: "2rem",
        paddingTop: "0",
        paddingBottom: "0",
      }}
    >
      <ul className="css-ngnzoh">
        <li className="product-finder-menu-link css-1nc0sax">
          <div className="css-1b2z5ba">
            <a
              className="active product-finder-menu-link-root css-2uw3ui"
              href="/en/catalog/"
            >
              <span className="css-1m28br3">OVERVIEW</span>
              <span className="css-5hx5o1">All Products</span>
            </a>
          </div>
        </li>
        <li className="product-finder-menu-link css-1nc0sax">
          <div className="css-1b2z5ba">
            <a
              className="product-finder-menu-link-software css-2uw3ui"
              href="/en/catalog/software/"
            >
              <span className="css-1m28br3">SOFTWARE &amp; SOUNDS</span>
              <span className="css-5hx5o1">KOMPLETE, NKS, iZotope</span>
            </a>
          </div>
        </li>
        <li className="product-finder-menu-link css-1nc0sax">
          <div className="css-1b2z5ba">
            <a
              className="product-finder-menu-link-hardware css-2uw3ui"
              href="/en/catalog/hardware/"
            >
              <span className="css-1m28br3">HARDWARE</span>
              <span className="css-5hx5o1">
                Keyboards, MASCHINE, TRAKTOR &amp; more
              </span>
            </a>
          </div>
        </li>
        <li className="product-finder-menu-link css-1nc0sax">
          <div className="css-1b2z5ba">
            <a
              className="product-finder-menu-link-9-for-99-special css-2uw3ui"
              href="/en/catalog/9-for-99-special/"
            >
              <span className="css-1m28br3">9 for 99</span>
              <span className="css-5hx5o1">Mar 20 - Apr 9</span>
            </a>
          </div>
        </li>
        <li className="product-finder-menu-link css-1nc0sax">
          <div className="css-1b2z5ba">
            <a
              className="product-finder-menu-link-projectsam-offer-2024 css-2uw3ui"
              href="/en/catalog/projectsam-offer-2024/"
            >
              <span className="css-1m28br3">NKS special</span>
              <span className="css-5hx5o1">Mar 11 - Mar 28</span>
            </a>
          </div>
        </li>
        <li className="product-finder-menu-link css-1nc0sax">
          <div className="css-1b2z5ba">
            <a
              className="product-finder-menu-link-piano-day-offer css-2uw3ui"
              href="/en/catalog/piano-day-offer/"
            >
              <span className="css-1m28br3">Piano Day special</span>
              <span className="css-5hx5o1">Mar 27 - Apr 2</span>
            </a>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default ProductFinderTopMenu;
