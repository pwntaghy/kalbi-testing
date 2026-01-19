import React from "react";

const VissionMission = () => {
  return (
    <>
      <section className="bg-black w-full text-white py-20 border-t border-neutral-800">
        <div className="max-w-7xl mx-auto px-6">
          {/* Heading */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Vision & Mission
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Empowering India to build world-class Cloud, OS and AI
              technologies.
            </p>
          </div>
          {/* Cards */}
          <div className="grid md:grid-cols-2 gap-10">
            {/* Vision Card */}
            <div className="bg-neutral-900 p-8 rounded-xl shadow-lg border border-neutral-800 hover:border-gray-600 transition">
              <h3 className="text-2xl font-semibold mb-4">Our Vision</h3>
              <p className="text-gray-300 leading-relaxed">
                {" "}
                To build India’s next-generation Cloud, Operating System and AI
                ecosystem that empowers startups, enterprises and developers
                globally with secure, scalable and future-ready technology.
              </p>
            </div>
            {/* Mission Card */}
            <div className="bg-neutral-900 p-8 rounded-xl shadow-lg border border-neutral-800 hover:border-gray-600 transition">
              <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
              <p className="text-gray-300 leading-relaxed">
                To create a powerful digital infrastructure that accelerates
                innovation, enhances performance and provides world-class
                technology solutions built entirely in India for the world.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default VissionMission;
