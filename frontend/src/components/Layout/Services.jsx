import React from "react";
import { Cpu, Cloud, Layers, Code, Workflow, Bot } from "lucide-react";

const services = [
  {
    title: "Custom AI Development",
    desc: "Chatbots, automation tools, and tailored AI systems.",
    icon: <Bot size={40} />,
  },
  {
    title: "OS & System Architecture",
    desc: "Custom OS, kernel engineering, and secure platform design.",
    icon: <Cpu size={40} />,
  },
  {
    title: "Full-Stack App Development",
    desc: "Modern and scalable web + mobile applications.",
    icon: <Code size={40} />,
  },
  {
    title: "Cloud & Infrastructure Engineering",
    desc: "Cloud setup, networking, and enterprise-grade DevOps.",
    icon: <Cloud size={40} />,
  },
  {
    title: "API & Developer Tools",
    desc: "High-performance APIs and automation pipelines.",
    icon: <Layers size={40} />,
  },
  {
    title: "Automation & System Integration",
    desc: "ML pipelines, workflows, and intelligent automation.",
    icon: <Workflow size={40} />,
  },
];

const Services = () => {
  return (
    <>
      <section className="w-full py-16 bg-black text-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Our Expertise
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="p-6 bg-neutral-900 rounded-xl shadow-md border border-neurtal-800 hover:-translate-y-1 hover:shadow-xl transition duration-300"
              >
                <div className="mb-4 text-blue-400">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
