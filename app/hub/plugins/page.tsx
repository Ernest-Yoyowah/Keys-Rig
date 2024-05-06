import Featured from "@/components/FeaturedRig/featuredRig";
import React from "react";

import { Metadata } from "next";
import ProductFinderTopMenu from "@/components/ui/ProductFinderTopMenu";
import ProductFinderSubMenu from "@/components/ui/ProductFinderSubMenu";
import ProductFinderContentSection from "@/components/ui/ProductFinderContentSection";

export const metadata: Metadata = {
  title: "Plugins - explore our curated plugins",
};

const Plugins = () => {
  return (
    <>
      <ProductFinderTopMenu />
      <ProductFinderSubMenu />
      <ProductFinderContentSection />
      <Featured />
    </>
  );
};

export default Plugins;
