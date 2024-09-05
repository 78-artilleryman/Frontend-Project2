import React from "react";

function Banner() {
  return (
    <section className="bg-blue-900 h-[350px] w-full flex items-center justify-center relative tbr:h-[250px] tbc:h-[200px]">
      <h1 className="bottom-[180px] absolute text-blue-900 z-40 text-7xl tbr:text-5xl tbr:bottom-[140px] tbc:text-4xl tbc:bottom-[100px]">
        Pluma
      </h1>
      <h1 className="bottom-[100px] absolute text-blue-900 z-40 text-7xl tbr:text-5xl tbr:bottom-[80px] tbc:text-4xl tbc:bottom-[50px]">
        Editor
      </h1>
      <div className="w-[480px] h-[480px] rounded-full bg-gray-50 animate-bannerAnimation-pc tbr:w-[300px] tbr:h-[300px] tbr:animate-bannerAnimation-tbr tbc:w-[250px] tbc:h-[250px] tbc:animate-bannerAnimation-tbc" />
    </section>
  );
}

export default Banner;
