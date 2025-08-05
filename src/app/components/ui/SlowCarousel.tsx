import React from "react";

const SlowCarousel = () => {
  const cards = [
    "Kvalitet zagarantovan",
    "Preko 1000 zadovoljnih kupaca",
    "Brza isporuka širom Srbije",
    "Sertifikovani proizvodi",
    "Podrška i savetovanje",
  ];

  return (
    <div className="overflow-hidden w-full bg-white py-6">
      <div className="flex w-max animate-scroll">
        {[...cards, ...cards].map((text, index) => (
          <div
            key={index}
            className="min-w-[250px] mx-4 p-6 bg-secondary rounded-xl shadow-md text-center text-primary font-semibold text-lg"
          >
            {text}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SlowCarousel;