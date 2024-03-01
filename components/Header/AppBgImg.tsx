import React from "react";
import Image from "next/image";
import bgImage from "@/public/ableton_live.jpg";

const AppBgImg = () => {
  return (
    <div style={{ width: "100%", height: "100vh", overflow: "hidden" }}>
      <Image
        src={bgImage}
        placeholder="blur"
        quality={100}
        fill
        sizes="100vw"
        style={{
          objectFit: "cover",
          zIndex: -1,
          filter: "brightness(70%)",
        }}
        alt="Header Image"
      />
    </div>
  );
};

export default AppBgImg;
