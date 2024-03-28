import Featured from "@/components/FeaturedRig/featuredRig";
import React from "react";

import { Metadata } from "next";
import AppBgImg from "@/components/Header/AppBgImg";
import ProductFinderTopMenu from "@/components/ui/ProductFinderTopMenu";
import ProduceTech from "../instrumentMarket/page";
import ProductFinderSubMenu from "@/components/ui/ProductFinderSubMenu";

export const metadata: Metadata = {
  title: "Plugins | Keys Rig",
};

const Plugins = () => {
  return (
    <>
      {/* <AppBgImg /> */}
      <ProductFinderTopMenu />
      <ProductFinderSubMenu />
      <Featured />
    </>
  );
};

export default Plugins;
