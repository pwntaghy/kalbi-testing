import React from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import api from "../../pages/utils/axiosInstance.js";
import { useState } from "react";

const Careers = () => {
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await api.get("/api/v1/jobs/get-job");
        console.log("response for gettting all jobs", res.data);
        setJobs(res.data?.jobs || []);
      } catch (error) {
        console.log("error while fetching jobs", error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <section className="py-20 bg-black text-white">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-4xl font-bold mb-10 text-center">
            Join Kalbii Global
          </h1>
          <p className="text-center text-gray-400 max-w-2xl mx-auto mb-14">
            Build India’s first AI-powered Operating System and Cloud ecosystem.
            Explore the roles below and start your journey with us.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            {jobs && jobs.length > 0 ? (
              jobs.map((job, index) => (
                <div
                  key={index}
                  className="bg-neutral-900 border border-neutral-800 rounded-xl p-6 hover:border-indigo-600 transition"
                >
                  <h3 className="text-xl font-semibold mb-2">{job.title}</h3>
                  <p className="text-gray-400 text-sm mb-4">{job.desc}</p>
                  <div className="text-sm text-gray-300 space-y-1 mb-6">
                    <p>
                      <strong>Location: </strong>
                      {job.location}
                    </p>
                    <p>
                      <strong>Experience:</strong>
                      {job.experience}
                    </p>
                    <p>
                      <strong>Type:</strong>
                      {job.type}
                    </p>
                    <Link
                      to={`/careers/${job._id}`}
                      className="inline-block px-5 py-2 bg-indigo-600 rounded-lg hover:bg-indigo-700 mt-2"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center text-gray-400 mt-6"> No Jobs found</p>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Careers;
