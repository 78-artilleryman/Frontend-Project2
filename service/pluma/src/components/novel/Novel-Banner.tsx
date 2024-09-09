import React from "react";

function Banner() {
  return (
    <section className="tbr:h-[250px] tbc:h-[200px] relative flex h-[350px] w-full items-center justify-center bg-blue-900">
      <h1 className="tbr:text-5xl tbr:bottom-[140px] tbc:text-4xl tbc:bottom-[100px] absolute bottom-[180px] z-40 text-7xl text-blue-900">
        Pluma
      </h1>
      <h1 className="tbr:text-5xl tbr:bottom-[80px] tbc:text-4xl tbc:bottom-[50px] absolute bottom-[100px] z-40 text-7xl text-blue-900">
        Editor
      </h1>
      <div className="animate-bannerAnimation-pc tbr:w-[300px] tbr:h-[300px] tbr:animate-bannerAnimation-tbr tbc:w-[250px] tbc:h-[250px] tbc:animate-bannerAnimation-tbc h-[480px] w-[480px] rounded-full bg-gray-50" />
    </section>
  );
}

export default Banner;
