import React from "react";
import AboutImg from "../../../assets/img/about.jpg";

const AboutUs = () => {
  return (
    <>
      <section className="bg-black text-white py-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Left Text */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              About{" "}
              <span className="text-indigo-400">Kalbii Global Pvt Ltd</span>
            </h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              Kalbii Global is building India’s next-generation Cloud
              Infrastructure, Operating System, and AI technology stack. Our
              mission is to make India self-reliant in core tech by developing
              ultra-secure, scalable and performance-focused platforms that
              power the companies of tomorrow.
            </p>
            <p className="text-gray-400 leading-relaxed">
              From intelligent AI-driven solutions to custom cloud architecture
              and OS-level innovations, we are committed to delivering
              technology that is built in India — for the world.
            </p>
          </div>

          {/* Right Image */}
          <div className="flex justify-center">
            <img
              src={AboutImg}
              alt="About Kalbii Global"
              className="rounded-2xl shadow-xl w-full md:w-[90%] object-cover"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
