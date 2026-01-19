import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/auth"; // adjust path if needed

const UserDashboard = () => {
  const [auth] = useAuth();

  return (
    <>
      <section className="py-20 bg-black text-white min-h-screen">
        <div className="max-w-5xl mx-auto px-4">
          <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6 md:p-8">
            <h2 className="text-2xl font-bold">
              Welcome,{" "}
              <span className="text-indigo-500">{auth?.user?.fname}</span>
            </h2>

            {/* Quick Stats & Actions */}
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-[#111] p-4 rounded-lg border border-neutral-800">
                <p className="text-sm text-gray-400">Email</p>
                <p className="mt-1 font-medium">{auth?.user?.email}</p>
              </div>
              <div className="bg-[#111] p-4 rounded-lg border border-neutral-800">
                <p className="text-sm text-gray-400">Mobile</p>
                <p className="mt-1 font-medium">{auth?.user?.number || "—"}</p>
              </div>
            </div>

            {/* Quick Links */}
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <Link
                to="/profile"
                className="px-4 py-2 bg-indigo-600 rounded-md hover:bg-indigo-700"
              >
                Edit Profile
              </Link>
              <Link
                to="/profile#password"
                className="px-4 py-2 border border-neutral-700 rounded-md hover:bg-neutral-800"
              >
                Change Password
              </Link>
              <Link
                to="/apply"
                className="px-4 py-2 border border-neutral-700 rounded-md hover:bg-neutral-800"
              >
                My Applications
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default UserDashboard;
