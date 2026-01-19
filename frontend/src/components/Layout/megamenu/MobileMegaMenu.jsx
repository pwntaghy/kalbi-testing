import React from "react";
import { Link } from "react-router-dom";

const MobileMegaMenu = ({ mobileCareers, setMobileCareers }) => {
  return (
    <>
      {/* Careers Button */}
      <button
        className="w-full text-left py-2 flex justify-between items-center hover:text-gray-300"
        onClick={() => setMobileCareers(!mobileCareers)}
      >
        Careers <span>{mobileCareers ? "▲" : "▼"}</span>
      </button>

      {/* Mobile Careers Submenu */}
      {mobileCareers && (
        <div className="pl-4 py-2 space-y-4">
          {/* Column 1 */}
          <div>
            <h4 className="text-lg font-semibold">Find a job</h4>
            <ul className="ml-2 mt-1 space-y-1">
              <li>
                <Link className="hover:text-gray-400">Search for jobs</Link>
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
            <h4 className="text-lg font-semibold">Life at Accenture</h4>
            <ul className="ml-2 mt-1 space-y-1">
              <li>
                <Link className="hover:text-gray-400" href="#">
                  Working here
                </Link>
              </li>
              <li>
                <Link className="hover:text-gray-400" href="#">
                  Benefits
                </Link>
              </li>
              <li>
                <Link className="hover:text-gray-400" href="#">
                  Work environment
                </Link>
              </li>
              <li>
                <Link className="hover:text-gray-400" href="#">
                  Careers blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h4 className="text-lg font-semibold">How we hire</h4>
            <ul className="ml-2 mt-1 space-y-1">
              <li>
                <Link className="hover:text-gray-400" href="#">
                  Using AI
                </Link>
              </li>
              <li>
                <Link className="hover:text-gray-400" href="#">
                  Hiring journey
                </Link>
              </li>
              <li>
                <Link className="hover:text-gray-400" href="#">
                  Pro tips
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default MobileMegaMenu;
