import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../utils/axiosInstance.js";
import { toast } from "sonner";

const ApplyForm = () => {
  const { id } = useParams();
  const [job, setJob] = useState(null);
  const [pageLoading, setPageLoading] = useState(true);
  const [submitLoading, setSubmitLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    qualifictaion: "",
    city: "",
    state: "",
    pincode: "",
    address: "",
    message: "",
    resume: null,
  });

  const inputRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await api.get(`/api/v1/jobs/single-job/${id}`);
        console.log("data fetch", data);
        if (data.success) {
          setJob(data.jobs);
        }
      } catch (error) {
        console.log("error", error);
        toast.error(error.message || "Error While fetching details");
      } finally {
        setPageLoading(false);
      }
    };
    fetchData();
  }, [id]);

  if (pageLoading) {
    return <p className="text-white text-center mt-10">Loading....</p>;
  }

  if (!job) {
    return <p className="text-red-500 text-center mt-10">Job Not Found</p>;
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.number.length !== 10) {
      return toast.error("please enter 10 digit numbers");
    }
    if (!formData.resume) {
      return toast.error("Please upload your resume");
    }
    try {
      setSubmitLoading(true);
      const fd = new FormData();
      fd.append("jobId", id);
      fd.append("name", formData.name);
      fd.append("email", formData.email);
      fd.append("number", formData.number);
      fd.append("qualification", formData.qualifictaion);
      fd.append("city", formData.city);
      fd.append("state", formData.state);
      fd.append("pincode", formData.pincode);
      fd.append("address", formData.address);
      fd.append("message", formData.message);
      fd.append("resume", formData.resume);

      const res = await api.post("/api/v1/application/apply", fd);
      if (res?.data?.success) {
        toast.success(
          res.data.success.message || "Application Submited Succesfully"
        );
        setFormData({
          name: "",
          email: "",
          number: "",
          qualifictaion: "",
          city: "",
          state: "",
          pincode: "",
          address: "",
          message: "",
          resume: null,
        });
      }
      if (inputRef.current) inputRef.current.value = "";
    } catch (error) {
      console.log("error", error);
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        toast.error(error.response.data.message);
      } else {
        toast.error(error.message || "Application not submitted");
      }
    } finally {
      setSubmitLoading(false);
    }
  };

  return (
    <>
      <section className="py-20 bg-black text-white">
        <div className="px-5">
          <div className="max-w-5xl mx-auto bg-neutral-900 border border-neutral-800 px-4 sm:px-6 md:px-10 py-6 md:py-10 rounded-2xl">
            <h1 className="text-2xl md:text-3xl mb-8 md:mb-10 font-bold mb-10 text-indigo-400">
              Apply for {job?.title || "Loading..."}
            </h1>
            <form onSubmit={handleSubmit} className="space-y-10">
              {/* Row 1 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label className="text-gray-300 text-sm">Full Name</label>
                  <input
                    name="name"
                    type="text"
                    placeholder="Full Name"
                    className="mt-2 w-full px-4 py-3 bg-[#111] border border-neutral-700 rounded-lg focus:border-indigo-500 outline-none"
                    onChange={handleChange}
                    value={formData.name}
                    required
                  />
                </div>
                <div>
                  <label>Email</label>
                  <input
                    type="email"
                    name="email"
                    className="mt-2 w-full px-4 py-3 bg-[#111] border border-neutral-700 rounded-lg focus:border-indigo-500 outline-none"
                    placeholder="Email"
                    onChange={handleChange}
                    value={formData.email}
                    required
                  />
                </div>
              </div>
              {/* Row 2 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label className="text-gray-300 text-sm">
                    Contact Number
                  </label>
                  <input
                    type="number"
                    name="number"
                    placeholder="Contact Number"
                    className="mt-2 w-full px-4 py-3 bg-[#111] border border-neutral-700 rounded-lg focus:border-indigo-500 outline-none"
                    onChange={handleChange}
                    value={formData.number}
                    required
                  />
                </div>
                <div>
                  <label>Highest Qualification</label>
                  <input
                    type="text"
                    name="qualifictaion"
                    placeholder="Qualificatioin"
                    className="mt-2 w-full px-4 py-3 bg-[#111] border border-neutral-700 rounded-lg focus:border-indigo-500 outline-none"
                    onChange={handleChange}
                    value={formData.qualifictaion}
                    required
                  />
                </div>
              </div>
              {/* Row 3 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label className="text-gray-300 text-sm">City</label>
                  <input
                    name="city"
                    type="text"
                    placeholder="City"
                    className="mt-2 w-full px-4 py-3 bg-[#111] border border-neutral-700 rounded-lg
            focus:border-indigo-500 outline-none"
                    onChange={handleChange}
                    value={formData.city}
                    required
                  />
                </div>

                <div>
                  <label className="text-gray-300 text-sm">State</label>
                  <input
                    name="state"
                    type="text"
                    placeholder="State"
                    className="mt-2 w-full px-4 py-3 bg-[#111] border border-neutral-700 rounded-lg
            focus:border-indigo-500 outline-none"
                    onChange={handleChange}
                    value={formData.state}
                    required
                  />
                </div>
              </div>
              {/* ROW 4 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label className="text-gray-300 text-sm">Pincode</label>
                  <input
                    name="pincode"
                    type="number"
                    placeholder="Pincode"
                    className="mt-2 w-full px-4 py-3 bg-[#111] border border-neutral-700 rounded-lg
            focus:border-indigo-500 outline-none"
                    onChange={handleChange}
                    value={formData.pincode}
                    required
                  />
                </div>

                <div>
                  <label className="text-gray-300 text-sm">Full Address</label>
                  <input
                    name="address"
                    type="text"
                    placeholder="House No, Street, Area..."
                    className="mt-2 w-full px-4 py-3 bg-[#111] border border-neutral-700 rounded-lg
            focus:border-indigo-500 outline-none"
                    onChange={handleChange}
                    value={formData.address}
                    required
                  />
                </div>
              </div>
              {/* Resume Upload */}
              <div>
                <label>Upload Resume (PDF)</label>
                <input
                  ref={inputRef}
                  name="resume"
                  type="file"
                  accept=".pdf"
                  className="mt-2 w-full bg-[#111] border border-neutral-700 rounded-lg text-gray-400 file:bg-indigo-600 file:text-white file:px-4 file:py-2 file:rounded-lg file:border-none cursor-pointer"
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      resume: e.target.files[0],
                    })
                  }
                  required
                />
              </div>
              {/* Message */}
              <div>
                <label className="text-gray-300 text-sm">
                  Why should we hire you?
                </label>
                <textarea
                  name="message"
                  rows="4"
                  placeholder="Write something..."
                  className="mt-2 w-full px-4 py-3 bg-[#111] border border-neutral-700 rounded-lg focus:border-indigo-500 outline-none"
                  onChange={handleChange}
                  value={formData.message}
                  required
                ></textarea>
              </div>
              {/* Button */}
              <button
                type="submit"
                disabled={submitLoading}
                className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition font-semibold cursor-pointer"
              >
                {submitLoading ? "Processing..." : "Submit"}
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default ApplyForm;
