import React from "react";
import Image from "next/image";
import bgImage from "@/public/header_bg.jpg";

const AppBgImg = () => {
  return (
    <Image
      src={bgImage}
      placeholder="blur"
      layout="responsive"
      width={1200}
      height={500}
      style={{
        objectFit: "cover",
        zIndex: -1,
      }}
      alt="Header Image"
    />
  );
};

export default AppBgImg;
