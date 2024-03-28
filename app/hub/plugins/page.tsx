import Featured from "@/components/FeaturedRig/featuredRig";
import React from "react";

import { Metadata } from "next";
import AppBgImg from "@/components/Header/AppBgImg";

export const metadata: Metadata = {
  title: "Plugins | Keys Rig",
};

const Plugins = () => {
  return (
    <>
      <AppBgImg />
      <Featured />
    </>
  );
};

export default Plugins;
