import React from "react";
import { Shield, Cpu, Cloud, Sparkles } from "lucide-react";

const points = [
  {
    icon: <Shield className="w-10 h-10 text-indigo-400" />,
    title: "Enterprise-Grade Security",
    desc: "Our cloud and OS infrastructure is designed with top-tier encryption, secure architecture, and zero-trust security.",
  },
  {
    icon: <Cpu className="w-10 h-10 text-indigo-400" />,
    title: "AI-Driven Innovation",
    desc: "We build intelligent systems powered by advanced AI, automation, and machine learning models.",
  },
  {
    icon: <Cloud className="w-10 h-10 text-indigo-400" />,
    title: "Scalable Cloud Platforms",
    desc: "Our cloud ecosystem scales effortlessly—designed to support startups, enterprises, and global workloads.",
  },
  {
    icon: <Sparkles className="w-10 h-10 text-indigo-400" />,
    title: "Made in India. For the World.",
    desc: "We’re focused on building core technologies in India that compete globally with world-class performance.",
  },
];

const WhyChooseUs = () => {
  return (
    <>
      <section className="bg-[#0d0d0d] text-white py-20 px-6">
        <div className="max-w-7xl mx-auto text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold">
            Why <span className="text-indigo-400">Kalbii Global?</span>
          </h2>
          <p className="text-gray-400 mt-4">
            The technology partner trusted for performance, security, and
            innovation.
          </p>
        </div>
        <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {points.map((item, index) => (
            <div
              key={index}
              className="bg-neutral-900 p-8 rounded-2xl border border-neutral-800 hover:border-indigo-500 transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/50"
            >
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default WhyChooseUs;
