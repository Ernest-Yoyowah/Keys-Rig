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
        objectPosition="-95% bottom"
        style={{
          objectFit: "cover",
          zIndex: -1,
          filter: "brightness(30%)",
        }}
        alt="Header Image"
      />
    </div>
  );
};

export default AppBgImg;
