import React from "react";
import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  PlusCircle,
  Briefcase,
  ClipboardList,
  UserPlus,
} from "lucide-react";
import { useAuth } from "../../pages/context/auth";

const Sidebar = () => {
  const [auth] = useAuth();
  const role = auth?.user?.role; // "admin" / "hr"

  return (
    <aside className="w-64 bg-[#0a0a0a] text-white fixed top-0 left-0 bottom-0 overflow-y-auto border-r border-gray-800 p-6">
      <h2 className="text-2xl font-bold mt-15 mb-5 tracking-wide">
        {role === "admin" ? "Admin Panel" : "HR Panel"}
      </h2>

      <nav className="space-y-4">
        {/* Only Admin can Add Job */}
        {role === "admin" && (
          <NavLink
            to="/add-job"
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-2 rounded-md transition-colors duration-200 ${
                isActive ? "bg-gray-800 text-indigo-400" : "hover:bg-gray-700"
              }`
            }
          >
            <PlusCircle size={20} /> Add Job
          </NavLink>
        )}

        {/* Common: Both Admin + HR */}
        <NavLink
          to="/jobs"
          className={({ isActive }) =>
            `flex items-center gap-3 px-3 py-2 rounded-md transition-colors duration-200 ${
              isActive ? "bg-gray-800 text-indigo-400" : "hover:bg-gray-700"
            }`
          }
        >
          <Briefcase size={20} /> All Jobs
        </NavLink>

        <NavLink
          to="/applications"
          className={({ isActive }) =>
            `flex items-center gap-3 px-3 py-2 rounded-md transition-colors duration-200 ${
              isActive ? "bg-gray-800 text-indigo-400" : "hover:bg-gray-700"
            }`
          }
        >
          <ClipboardList size={20} /> Applications
        </NavLink>

        {/* Only Admin can Add Member */}
        {role === "admin" && (
          <NavLink
            to="/add-member"
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-2 rounded-md transition-colors duration-200 ${
                isActive ? "bg-gray-800 text-indigo-400" : "hover:bg-gray-700"
              }`
            }
          >
            <UserPlus size={20} /> Add Member
          </NavLink>
        )}
      </nav>
    </aside>
  );
};

export default Sidebar;
