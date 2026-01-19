import React, { useState } from "react";
import AdminLayout from "../AdminLayout";
import { toast } from "sonner";
import api from "../../utils/axiosInstance";

const AddJob = () => {
  const [formData, setFormData] = useState({
    title: "",
    location: "",
    description: "",
    salary: "",
    experince: "",
    requirements: "",
    type: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]:
        name === "requirements"
          ? value.split(",").map((item) => item.trim())
          : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await api.post("/api/v1/jobs/create-job", formData);

      if (res?.data?.success) {
        toast.success(res?.data?.success?.message || "Job Created Succesfully");
        setFormData({
          title: "",
          location: "",
          description: "",
          salary: "",
          experince: "",
          requirements: "",
          type: "",
        });
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Something Went wrong");
    }
  };

  return (
    <>
      <AdminLayout>
        <section className="py-20 bg-black text-white">
          <div className="px-5">
            {/* Mainbox */}
            <div className="max-w-5xl mx-auto bg-neutral-900 border border-neutral-800 px-4 sm:px-6 md:px-10 py-6 md:py-10 rounded-2xl">
              <h1 className="text-2xl md:text-3xl font-bold text-indigo-400 mb-10">
                Create New Job Posting
              </h1>
              <form onSubmit={handleSubmit} className="space-y-2">
                {/* Row 1 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <label className="text-gray-300 text-sm">Job Title</label>
                    <input
                      type="text"
                      name="title"
                      value={formData.title}
                      onChange={handleChange}
                      placeholder="Job Title"
                      className="mt-2 w-full px-4 py-3 bg-[#111] border border-neutral-700 rounded-lg focus:border-indigo-500 outline-none"
                      required
                    />
                  </div>
                  <div>
                    <label className="text-gray-300 text-sm">Location</label>
                    <input
                      type="text"
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      placeholder="Location"
                      className="mt-2 w-full px-4 py-3 bg-[#111] border border-neutral-700 rounded-lg focus:border-indigo-500 outline-none"
                      required
                    />
                  </div>
                </div>
                {/* Row 2 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <label className="text-gray-300 text-sm">Salary</label>
                    <input
                      type="number"
                      name="salary"
                      value={formData.salary}
                      onChange={handleChange}
                      placeholder="Salary"
                      className="mt-2 w-full px-4 py-3 bg-[#111] border border-neutral-700 rounded-lg focus:border-indigo-500 outline-none"
                      required
                    />
                  </div>
                  <div>
                    <label className="text-gray-300 text-sm">Experience</label>
                    <input
                      type="text"
                      name="experince"
                      value={formData.experince}
                      onChange={handleChange}
                      placeholder="Experience"
                      className="mt-2 w-full px-4 py-3 bg-[#111] border border-neutral-700 rounded-lg focus:border-indigo-500 outline-none"
                      required
                    />
                  </div>
                </div>
                {/* Row 3 */}
                <div>
                  <label className="text-gray-300 text-sm">
                    Job Description
                  </label>
                  <textarea
                    name="description"
                    rows="4"
                    value={formData.description}
                    onChange={handleChange}
                    placeholder="Write Job description"
                    className="mt-2 w-full px-4 py-2 bg-[#111] border border-neutral-700 rounded-lg focus:border-indigo-500 outline-none"
                    required
                  />
                </div>
                {/* Row 4 */}
                <div>
                  <label className="text-gray-300 text-sm">Requirements</label>
                  <textarea
                    name="requirements"
                    rows="4"
                    value={
                      Array.isArray(formData.requirements)
                        ? formData.requirements.join(",")
                        : formData.requirements
                    }
                    onChange={handleChange}
                    placeholder="Job Requirements..."
                    className="mt-2 w-full px-4 py-3 bg-[#111] border border-neutral-700 
                  rounded-lg focus:border-indigo-500 outline-none"
                    required
                  />
                </div>
                {/* Row 5 */}
                <div>
                  <label className="text-gray-300 text-sm">Job Type</label>
                  <select
                    name="type"
                    value={formData.type}
                    onChange={handleChange}
                    className="mt-2 w-full px-4 py-3 bg-[#111] border border-neutral-700 rounded-lg focus:border-indigo-500 outline-none"
                  >
                    <option value="">Select Job Type</option>
                    <option className="bg-black" value="Full Time">
                      Full Time
                    </option>
                    <option className="bg-black" value="Part Time">
                      Part Time
                    </option>
                    <option className="bg-black" value="Internship">
                      Internship
                    </option>
                  </select>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition font-bold"
                >
                  {loading ? "Processing..." : "Create Job"}
                </button>
              </form>
            </div>
          </div>
        </section>
      </AdminLayout>
    </>
  );
};

export default AddJob;
