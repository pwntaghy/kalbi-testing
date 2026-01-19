import React from "react";

const items = [
  {
    title: "Operating System",
    desc: "A secure, lightweight, fully-custom OS designed for speed, stability and deep integration with our AI systems.",
    icon: "🧩",
  },
  {
    title: "AI Engine",
    desc: "A modular intelligence engine capable of language understanding, reasoning and automating real-world tasks.",
    icon: "🧠",
  },
  {
    title: "Developer Cloud",
    desc: "A complete cloud environment for deploying apps, APIs and services optimized for our OS and AI stack.",
    icon: "☁️",
  },
  {
    title: "Automation Tools",
    desc: "Powerful tools for workflow automation, data pipelines, training models and managing infrastructure.",
    icon: "⚙️",
  },
];

const WhatWeBuild = () => {
  return (
    <>
      <section className="w-full bg-[#050506] text-white py-20 px-6 border-t border-neutral-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">
              What We Are Building
            </h2>
            <p className="text-gray-400 mt-3 max-w-2xl mx-auto">
              {" "}
              We are building an integrated technology ecosystem — our own OS,
              AI engine, cloud platform and automation layer — all designed to
              work together seamlessly.
            </p>
          </div>
        </div>
        {/* Card */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, index) => (
            <div
              key={index}
              className="bg-neutral-900 p-6 rounded-2xl border border-neutral-800 hover:-translate-y-2 transition-transform duration-300 hover:shadow-lg hover:shadow-indigo-500/20"
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="text-gray-400 text-sm mt-2">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default WhatWeBuild;
