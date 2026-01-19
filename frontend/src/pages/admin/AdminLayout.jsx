import React, { useState } from "react";
import Sidebar from "../panelSidebar/Sidebar";
import { Menu } from "lucide-react";

// layout/AdminLayout.jsx
const AdminLayout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-black text-white">
      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full transition-transform duration-300 
        ${isOpen ? "translate-x-0" : "-translate-x-full"} 
        md:translate-x-0 md:w-64`}
      >
        <Sidebar />
      </div>

      {/* Content */}
      <div className="flex-1 p-6 md:ml-64 transition-all duration-300">
        {/* Mobile Header */}
        <div className="md:hidden flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold">Admin Panel</h2>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-md bg-gray-800 hover:bg-gray-700"
          >
            <Menu size={24} />
          </button>
        </div>

        {children}
      </div>
    </div>
  );
};

export default AdminLayout;
