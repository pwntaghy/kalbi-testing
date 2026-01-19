import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import api from "../utils/axiosInstance.js";
import { useAuth } from "../context/auth.jsx";

const JobDetails = () => {
  const { id } = useParams();
  const [job, setJob] = useState(null);
  const [auth] = useAuth();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await api.get(`/api/v1/jobs/single-job/${id}`);
        console.log("dat for id", data);
        setJob(data.jobs);
      } catch (error) {
        console.log("error while fetching job details", error);
      }
    };
    fetchData();
  }, [id]);

  if (!job) {
    return <p className="text-white text-center mt-10">Loading...</p>;
  }

  return (
    <>
      <section className="py-20 bg-black text-white">
        <div className="max-w-5xl mx-auto px-6">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
              {job.title}
            </h1>

            <div className="flex flex-wrap gap-4 mt-4 text-gray-400">
              <span className="px-4 py-2 border border-neutral-700 rounded-full">
                📍 {job.location}
              </span>

              <span className="px-4 py-2 border border-neutral-700 rounded-full">
                🧩 {job.type}
              </span>

              <span className="px-4 py-2 border border-neutral-700 rounded-full">
                💼 {job.experince}
              </span>
            </div>

            <p className="mt-6 text-gray-300 text-lg leading-relaxed">
              {job.description}
            </p>
          </div>

          {/* Requirements */}
          <div className="mb-14 bg-neutral-900 p-8 rounded-2xl border border-neutral-800 shadow-lg">
            <h2 className="text-2xl font-bold mb-6 text-indigo-400">
              Requirements
            </h2>
            <div className="flex flex-wrap gap-3 text-gray-300 mt-2">
              {(Array.isArray(job.requirements)
                ? job.requirements
                : job.requirements.split(",")
              ).map((req, index) => (
                <span
                  key={index}
                  className="px-3 py-1 text-sm rounded-full border border-indigo-500 
      text-indigo-300 bg-black/40 backdrop-blur-sm shadow-md 
      hover:bg-indigo-600 hover:text-white transition"
                >
                  {req.trim()}
                </span>
              ))}
            </div>
          </div>

          {/* Apply Button */}
          {!auth?.user ? (
            <div className="text-center mt-10">
              <p className="text-red-500 mb-3 text-lg font-medium">
                Please Login to Apply for this job
              </p>
              <Link
                to="/login"
                className="px-8 py-2 bg-indigo-600 hover:bg-indigo-700 rounded-xl text-white font-semibold"
              >
                Login
              </Link>
            </div>
          ) : (
            <Link
              to={`/apply/${job._id}`}
              className="inline-block px-10 py-2 text-lg font-semibold bg-indigo-600 hover:bg-indigo-700 rounded-xl shadow-lg transition-all duration-300"
            >
              Apply Now
            </Link>
          )}
        </div>
      </section>
    </>
  );
};

export default JobDetails;
