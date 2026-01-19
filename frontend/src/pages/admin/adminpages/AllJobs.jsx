import React, { useEffect, useState } from "react";
import AdminLayout from "../AdminLayout";
import { toast } from "sonner";
import api from "../../utils/axiosInstance";

const AllJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchJobs = async () => {
    try {
      setLoading(true);
      const { data } = await api.get("/api/v1/jobs/get-job");

      if (data.success) {
        setJobs(data.jobs);
      }
    } catch (error) {
      toast.error("Failed to load jobs", error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchJobs();
  }, []);

  const deleteJob = async (id) => {
    if (!window.confirm("Ary you sure")) return;
    try {
      const { data } = await api.delete(`api/v1/jobs/delete-job/${id}`);

      if (data.success) {
        toast.success(data.success.message || "Job deleted");
        fetchJobs();
      }
    } catch (error) {
      toast.error("Error for deleting", error);
    }
  };

  return (
    <>
      <AdminLayout>
        <section className="p-6 bg-black text-white">
          <h2 className="text-3xl font-bold mb-6 text-indigo-500">All Job's</h2>

          {/* Table */}
          <div className="overflow-x-auto border border-neutral-800 rounded-lg">
            <table className="min-w-full text-sm">
              <thead className="bg-[#111] text-gray-300">
                <tr>
                  <th className="p-4 text-left">Title</th>
                  <th className="p-4 text-left">Location</th>
                  <th className="p-4 text-left">Experience</th>
                  <th className="p-4 text-left">Salary</th>
                  <th className="p-4 text-left">Action</th>
                </tr>
              </thead>
              <tbody>
                {loading ? (
                  <tr>
                    <td colSpan="5" className="p-6 text-center">
                      Loading...
                    </td>
                  </tr>
                ) : jobs.length === 0 ? (
                  <tr>
                    <td colSpan="5" className="p-6 text-center text-gray-400">
                      No Jobs Found
                    </td>
                  </tr>
                ) : (
                  jobs.map((job) => (
                    <tr
                      key={job._id}
                      className="border-t border-neutral-800 hover:bg-neutral-900"
                    >
                      <td className="p-4">{job.title}</td>
                      <td className="p-4">{job.location}</td>
                      <td className="p-4">{job.experince}</td>
                      <td className="p-4">{job.salary}</td>
                      <td className="flex gap-4 p-3">
                        <button
                          onClick={() => deleteJob(job._id)}
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
        </section>
      </AdminLayout>
    </>
  );
};

export default AllJobs;
