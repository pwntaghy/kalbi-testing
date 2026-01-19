import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Instagram,
  Youtube,
} from "lucide-react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submited", { name, email, message });
  };
  return (
    <section className="bg-black text-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-center mb-12">Contact Us</h2>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold mb-4">Get in Touch</h3>

            {/* Address */}
            <div className="flex items-start gap-4">
              <MapPin className="text-indigo-400" size={28} />
              <p className="text-gray-400">
                Kalbii Global Pvt. Ltd. <br />
                Sumerpur, Pali, Rajasthan
              </p>
            </div>

            {/* Email */}
            <div className="flex items-start gap-4">
              <Mail className="text-indigo-400" size={28} />
              <p className="text-gray-400">kalbi.global@gmail.com</p>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-4">
              <Phone className="text-indigo-400" size={28} />
              <p className="text-gray-400">+91 70693 70032</p>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4 mt-6">
              <a
                href="https://www.linkedin.com/in/prem-kalbi-%E2%98%85-i-am-hiring-%E2%98%85-3a020213b/"
                target="_blank"
                className="w-10 h-10 bg-neutral-900 rounded-full flex items-center justify-center hover:bg-indigo-600 transition"
              >
                <Linkedin size={22} />
              </a>

              <a
                href="https://www.instagram.com/kalbiiglobal/"
                target="_blank"
                className="w-10 h-10 bg-neutral-900 rounded-full flex items-center justify-center hover:bg-indigo-600 transition"
              >
                <Instagram size={22} />
              </a>

              {/* <a
                href="javascript:;"
                className="w-10 h-10 bg-neutral-900 rounded-full flex items-center justify-center hover:bg-red-600 transition"
              >
                <Youtube size={22} />
              </a> */}
            </div>
          </div>

          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-neutral-900 p-8 rounded-xl border border-neutral-800 space-y-6"
          >
            <div>
              <label className="block text-sm mb-2">Your Name</label>
              <input
                type="text"
                className="w-full bg-black p-3 rounded-lg border border-neutral-700 text-white"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div>
              <label className="block text-sm mb-2">Email Address</label>
              <input
                type="email"
                className="w-full bg-black p-3 rounded-lg border border-neutral-700 text-white"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div>
              <label className="block text-sm mb-2">Message</label>
              <textarea
                className="w-full bg-black p-3 rounded-lg border border-neutral-700 text-white h-32"
                placeholder="Enter your message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>

            <button className="w-full bg-indigo-600 hover:bg-indigo-700 transition p-3 rounded-lg font-semibold">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
