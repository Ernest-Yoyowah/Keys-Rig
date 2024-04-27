// components/SkewedCard.tsx
import React from "react";

const SkewedCard: React.FC<{ title: string; content: string }> = ({
  title,
  content,
}) => {
  return (
    <div className="relative bg-blue-500 p-6 rounded-lg shadow-lg">
      <div className="absolute inset-0 bg-white z-10 transform -skew-x-12"></div>
      <div className="relative z-20">
        <h2 className="text-xl font-bold mb-2">{title}</h2>
        <p>{content}</p>
      </div>
    </div>
  );
};

export default SkewedCard;
