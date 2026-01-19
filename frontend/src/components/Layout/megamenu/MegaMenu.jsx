import React from "react";
import { Link } from "react-router-dom";

const MegaMenu = () => {
  return (
    <>
      <div className="opacity-0 invisible group-hover:opacity-100 group-hover:visible fixed left-0 top-16 w-full bg-[#111] border-t border-neutral-800 transition-all duration-300 z-100">
        <div className="max-w-7xl mx-auto px-10 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Column 1 */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Find a job</h4>
              <ul className="space-y-2">
                <li>
                  <Link to="/" className="hover:text-gray-400">
                    Search for jobs
                  </Link>
                </li>
                <li>
                  <Link to="/careers" className="hover:text-gray-400">
                    Career areas
                  </Link>
                </li>
              </ul>
            </div>
            {/* Column 2 */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Life in Kalbii</h4>
              <ul className="space-y-2">
                <li>
                  <Link to="/" className="hover:text-gray-400" href="#">
                    Working here
                  </Link>
                </li>
                <li>
                  <Link to="/" className="hover:text-gray-400" href="#">
                    Benefits
                  </Link>
                </li>
                <li>
                  <Link to="/" className="hover:text-gray-400" href="#">
                    Work environment
                  </Link>
                </li>
                <li>
                  <Link to="/" className="hover:text-gray-400" href="#">
                    Careers blog
                  </Link>
                </li>
              </ul>
            </div>
            {/* Column 3 */}
            <div>
              <h4 className="text-lg font-semibold mb-4">How we hire</h4>
              <ul className="space-y-2">
                <li>
                  <Link to="/">Using AI</Link>
                </li>
                <li>
                  <Link to="/">Hiring journey</Link>
                </li>
                <li>
                  <Link to="/">Pro tips</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MegaMenu;
