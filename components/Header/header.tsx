import React from "react";
import AppBgImg from "./AppBgImg";
import { Button } from "../ui/button";
import Link from "next/link";

const content = {
  headText: "Welcome to Keys Rig",
  paragraphText: "Step into a world where creativity knows no bounds...",
};

const Header: React.FC = () => {
  return (
    <div className="flex justify-center items-center mb-0">
      <div className="absolute text-center mx-3 mt-0">
        <h1 className="hero-text">{content.headText}</h1>
        <p className="sub-hero-text m-2">{content.paragraphText}</p>
        <br />
        <div className="space-x-2">
          <Button
            variant="secondary"
            className="bg-white text-black hover:bg-black hover:text-white hover:border-white"
          >
            <Link href="/hub/plugins">Featured Plugins</Link>
          </Button>
          <Button
            variant="default"
            className="bg-black text-white border border-white hover:bg-white hover:text-black hover:border-white"
          >
            <Link href="/hub/keysrig">Key Rig</Link>
          </Button>
        </div>
        <br />
        <br />
      </div>
      <AppBgImg />
    </div>
  );
};

export default Header;
