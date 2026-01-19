import React from "react";
import bannerImg from "../../../assets/img/hero.jpg";

const Banner = () => {
  return (
    <>
      <section className="relative">
        <img
          src={bannerImg}
          alt="Banner"
          className="w-full h-[300px] sm:h-[450px] md:h-[800px] object-fill object-top"
        />
        <div className="absolute inset-0 bg-black/30">
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
            <h1 className="text-3xl sm:text-5xl font-bold text-white drop-shadow-lg">
              Welcome to Kalbii Global Pvt Ltd
            </h1>
            <p className="mt-2 text-white/90 text-sm sm:text-lg">
              Building India's Cloud & OS for the world
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
