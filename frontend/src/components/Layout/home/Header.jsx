import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import MegaMenu from "../megamenu/MegaMenu";
import MobileMegaMenu from "../megamenu/MobileMegaMenu";
import { useAuth } from "../../../pages/context/auth";
import { toast } from "sonner";

const Header = () => {
  const [auth, setAuth] = useAuth();
  const navigate = useNavigate();

  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileCareers, setMobileCareers] = useState(false);

  const handleLogout = () => {
    setAuth({ user: null, token: "" });
    localStorage.removeItem("auth");
    toast.success("Logged Out succesfully");
    navigate("/login");
  };
  return (
    <>
      <nav className="w-full bg-black text-white top-0 left-0 border-b border-neutral-800 fixed z-50">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <div className="text-2xl font-bold cursor-pointer">Kalbii Global</div>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center space-x-10 text-[15px] font-medium">
            <li>
              <Link className="px-3 py-2 hover:text-gray-300" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link to="/address">Address</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li className="group relative">
              <Link
                to="/careers"
                className="flex items-center hover:text-gray-300"
              >
                Careers
              </Link>
            </li>
            {auth?.user ? (
              <div className="flex items-center space-x-3">
                <Link to="/dashboard" className="px-3 py-2">
                  Hello,{auth.user.fname}
                </Link>

                {auth?.user?.role === "admin" && (
                  <Link to="/admin" className="px-3 py-2">
                    Admin Panel
                  </Link>
                )}
                {auth?.user?.role === "hr" && (
                  <Link to="/hr " className="px-3 py-2">
                    HR Panel
                  </Link>
                )}
                <li>
                  <button onClick={handleLogout} className="px-3 py-2">
                    Logout
                  </button>
                </li>
              </div>
            ) : (
              <div className="flex items-center space-x-3">
                <li>
                  <Link to="/login">Login</Link>
                </li>
                <li>
                  <Link to="/register">Register</Link>
                </li>
              </div>
            )}
          </ul>
          {/* Mobile Hamburger button */}
          <div className="md:hidden flex items-center space-x-4">
            {auth?.user ? (
              <div className="flex gap-2">
                <span className="text-indigo-500 text-sm">
                  <Link to="/dashboard">{auth.user.fname}</Link>
                </span>

                <button onClick={handleLogout} className="text-red-500 text-sm">
                  Logout
                </button>
              </div>
            ) : (
              <div className="space-x-4">
                <Link to="/login" className="text-sm hover:text-gray-300">
                  Login
                </Link>
                <Link to="/register" className="text-sm hover:text-gray-300">
                  Register
                </Link>
              </div>
            )}
            <button
              className="md:hidden relative w-8 h-8 flex items-center justify-center"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              <span
                className={`absolute text-2xl transition-all duration-300 ${
                  mobileOpen
                    ? "opacity-0 scale-0 rotate-45"
                    : "opacity-100 scale-100 rotate-0"
                }`}
              >
                ☰
              </span>
              {/* Close Icon */}
              <span
                className={`absolute text-2xl transition-all duration-300
                ${
                  mobileOpen
                    ? "opacity-100 scale-100 rotate-0"
                    : "opacity-0 scale-0 rotate-45"
                }`}
              >
                ✖
              </span>
            </button>
          </div>
        </div>
        {/* Mobile careers Submenu */}
        <div>
          {mobileOpen && (
            <div className="md:hidden bg-black border-t border-neutral-800 px-6 py-4">
              <Link className="block py-2 hover:text-gray-300" to="/">
                Home
              </Link>
              <MobileMegaMenu
                mobileCareers={mobileCareers}
                setMobileCareers={setMobileCareers}
              />
              <Link className="block py-2 hover:text-gray-300" to="/">
                About
              </Link>
              <Link className="block py-2 hover:text-gray-300" to="/">
                Contact
              </Link>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Header;
