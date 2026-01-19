import React, { useState } from "react";
import AdminLayout from "../AdminLayout";
import api from "../../utils/axiosInstance";
import { useEffect } from "react";
import { toast } from "sonner";

const Applications = () => {
  const [applications, setApplications] = useState([]);
  const [search, setSearch] = useState("");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const limit = 10;

  const fetchApplications = async () => {
    try {
      setLoading(true);
      const res = await api.get("/api/v1/application/get-application", {
        params: {
          page,
          limit,
          from: fromDate,
          to: toDate,
          search,
        },
      });

      if (res.data.success) {
        setApplications(res.data.data);
        setTotalPage(res.data.totalPage);
      }
    } catch (error) {
      toast.error(error?.message || "Something Went wrong");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchApplications();
  }, [page, fromDate, toDate, search]);

  const downloadResume = async (id) => {
    try {
      const res = await api.get(
        `/api/v1/application/get-application/${id}/resume`
      );

      if (res.data.success && res.data.url) {
        window.open(res.data.url, "_blank", "noopener,noreferrer");
      } else {
        toast.error("Resume not available");
      }
    } catch (error) {
      toast.error(
        error?.message || "Something went wrong when downloading resume"
      );
    }
  };

  const handleDelete = async (id) => {
    try {
      const { data } = await api.delete(
        `/api/v1/application/delete-application/${id}`
      );

      if (data.success) {
        toast.success(data?.message || "Application delete front side");
        fetchApplications();
      } else {
        toast.error(data.message || "Failed to delete application");
      }
    } catch (error) {
      toast.error(
        error?.message || "Something went wrong while deleting application"
      );
    }
  };

  return (
    <>
      <AdminLayout>
        <section className="p-6 bg-black text-white">
          <h2 className="text-3xl font-bold mb-6 text-indigo-500">
            Job Application
          </h2>
          {/* 🔍 Filters */}
          <div className="flex flex-wrap gap-4 mb-6">
            <input
              type="text"
              placeholder="Search by name or email"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="px-4 py-2 bg-[#111] border border-neutral-700 rounded-md outline-none focus:border-indigo-500"
            />
            <input
              type="date"
              value={fromDate}
              onChange={(e) => setFromDate(e.target.value)}
              className="px-4 py-2 bg-[#111] border border-neutral-700 rounded-md outline-none"
            />
            <input
              type="date"
              value={toDate}
              onChange={(e) => setToDate(e.target.value)}
              className="px-4 py-2 bg-[#111] border border-neutral-700 rounded-md outline-none"
            />
            <button
              onClick={() => {
                setPage(1);
                fetchApplications();
              }}
              className="px-5 py-2 bg-indigo-600 hover:bg-indigo-700 rounded-md cursor-pointer"
            >
              Apply Filter
            </button>
          </div>
          {/* Table */}
          <div className="overflow-x-auto border border-neutral-800 rounded-lg">
            <table className="min-w-full text-sm">
              <thead className="bg-[#111] text-gray-300">
                <tr>
                  <th className="p-4 text-left">Name</th>
                  <th className="p-4 text-left">Email</th>
                  <th className="p-4 text-left">Job</th>
                  <th className="p-4 text-left">Date</th>
                  <th className="p-4 text-left">Resume</th>
                  <th className="p-4 text-left">Delete</th>
                </tr>
              </thead>
              <tbody>
                {loading ? (
                  <tr>
                    <td colSpan="5" className="p-6 text-center">
                      Loading...
                    </td>
                  </tr>
                ) : applications.length === 0 ? (
                  <tr>
                    <td colSpan="5" className="p-6 text-center text-gray-400">
                      No application found
                    </td>
                  </tr>
                ) : (
                  applications.map((app) => (
                    <tr
                      key={app._id}
                      className="border-t border-neutral-800 hover:bg-neutral-900"
                    >
                      <td className="p-4">{app.name}</td>
                      <td className="p-4">{app.email}</td>
                      <td className="p-4">{app.jobId?.title}</td>
                      <td className="p-4">
                        {new Date(app.createdAt).toLocaleDateString()}
                      </td>
                      <td className="p-4">
                        <a
                          onClick={() => downloadResume(app._id)}
                          className="text-indigo-400 hover:underline cursor-pointer"
                        >
                          Download
                        </a>
                      </td>
                      <td className="p-4">
                        <button
                          onClick={() => handleDelete(app._id)}
                          className="text-red-400 hover:underline cursor-pointer"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
          {/* Pagination */}
          <div className="flex justify-center items-center gap-4 mt-6">
            <button
              disabled={page === 1}
              onClick={() => setPage((prev) => prev - 1)}
              className="px-4 py-2 bg-neutral-800 rounded-md disabled:opacity-50"
            >
              Prev
            </button>
            <span className="text-gray-300">
              Page {page} of {totalPage}
            </span>
            <button
              disabled={page === totalPage}
              onClick={() => setPage((prev) => prev + 1)}
              className="px-4 py-2 bg-neutral-800 rounded-md disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </section>
      </AdminLayout>
    </>
  );
};

export default Applications;
