import React from "react";
import { Linkedin, Facebook, Instagram, Youtube } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="w-full bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Top Section */}
        <div className="py-16 flex justify-between items-center flex-col gap-8 lg:flex-row">
          {/* Company Name (No link) */}
          <div className="text-white text-2xl font-semibold tracking-wide">
            Kalbii Global Private Limited
          </div>

          {/* Footer Navigation (Updated links/text) */}
          <ul className="text-lg text-center sm:flex items-center justify-center gap-8 lg:gap-10 transition-all duration-500">
            <li>
              <Link to="/address" className="text-white hover:text-gray-400">
                Address
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-white hover:text-gray-400">
                Contact
              </Link>
            </li>
            <li>
              <a href="/careers" className="text-white hover:text-gray-400">
                Careers
              </a>
            </li>
          </ul>

          {/* Social Media (Same as before) */}
          <div className="flex space-x-4 sm:justify-center">
            <a
              href="https://www.linkedin.com/in/prem-kalbi-%E2%98%85-i-am-hiring-%E2%98%85-3a020213b/"
              target="_blank"
              rel="noreferrer"
              className="w-9 h-9 rounded-full bg-gray-800 flex justify-center items-center hover:bg-indigo-600"
            >
              <Linkedin className="text-white" size={18} />
            </a>

            {/* <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noreferrer"
              className="w-9 h-9 rounded-full bg-gray-800 flex justify-center items-center hover:bg-indigo-600"
            >
              <Facebook className="text-white" size={18} />
            </a> */}

            <a
              href="https://www.instagram.com/kalbiiglobal/"
              target="_blank"
              rel="noreferrer"
              className="w-9 h-9 rounded-full bg-gray-800 flex justify-center items-center hover:bg-indigo-600"
            >
              <Instagram className="text-white" size={18} />
            </a>

            {/* <a
              href="https://www.youtube.com/"
              target="_blank"
              rel="noreferrer"
              className="w-9 h-9 rounded-full bg-gray-800 flex justify-center items-center hover:bg-indigo-600"
            >
              <Youtube className="text-white" size={18} />
            </a> */}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="py-7 border-t border-gray-700">
          <div className="flex items-center justify-center">
            <span className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Kalbii Global Private Limited. All
              rights reserved.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
