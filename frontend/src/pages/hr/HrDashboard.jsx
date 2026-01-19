import React from "react";
import AdminLayout from "../admin/AdminLayout";

const HrDashboard = () => {
  return (
    <>
      <AdminLayout>
        <div className="p-10 text-white">
          <h1 className="text-3xl font-bold">HR Dashboard</h1>

          <div className="mt-6 space-y-4">
            <button className="bg-indigo-600 px-4 py-2 rounded">
              View Applicants
            </button>
            <button className="bg-indigo-600 px-4 py-2 rounded">
              Manage Interviews
            </button>
            <button className="bg-indigo-600 px-4 py-2 rounded">
              View Job Posts
            </button>
          </div>
        </div>
      </AdminLayout>
    </>
  );
};

export default HrDashboard;
