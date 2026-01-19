import React from "react";
import { Cpu, Cloud, Shield, Brain, Server, Code2 } from "lucide-react";

const tech = [
  {
    icon: <Brain size={28} />,
    title: "AI & Machine Learning",
    desc: "Large language models, neural networks, and intelligent automation systems.",
  },
  {
    icon: <Cloud size={28} />,
    title: "Cloud Infrastructure",
    desc: "High-performance private cloud architecture built for scale and security.",
  },
  {
    icon: <Cpu size={28} />,
    title: "Operating System Engineering",
    desc: "Kernel development, system optimization, and secure OS architecture.",
  },
  {
    icon: <Code2 size={28} />,
    title: "Developer Tools",
    desc: "High-performance APIs, SDKs, and automation tools.",
  },
  {
    icon: <Server size={28} />,
    title: "Backend Systems",
    desc: "Distributed high-availability backend and microservices.",
  },
  {
    icon: <Shield size={28} />,
    title: "Security Layer",
    desc: "Zero-trust architecture, encryption, and advanced system protection.",
  },
];

const TechnologyStack = () => {
  return (
    <>
      <section className="py-20 bg-black text-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-center">
            Technology Stack
          </h2>

          <div className="space-y-8">
            {tech.map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-6 p-6 bg-[#111] border-l-4 border-indigo-500/60 rounded-xl hover:bg-[#151515] transition-all duration-300"
              >
                <div className="text-indigo-400">{item.icon}</div>
                <div>
                  <h3 className="text-xl font-semibold mb-1">{item.title}</h3>
                  <p className="text-gray-400 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default TechnologyStack;
