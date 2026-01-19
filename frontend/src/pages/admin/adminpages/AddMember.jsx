import React from "react";
import AdminLayout from "../AdminLayout";
import { Link } from "react-router-dom";
import { useState } from "react";
import { toast } from "sonner";
import api from "../../utils/axiosInstance";

const AddMember = () => {
  const [register, setRegister] = useState({
    fname: "",
    lname: "",
    email: "",
    number: "",
    password: "",
    confirmPassword: "",
    role: "",
  });

  const handleChange = (e) => {
    setRegister({
      ...register,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (register.password !== register.confirmPassword) {
      toast("Password do not match");
      return;
    }
    try {
      const res = await api.post("/api/v1/admin/create-user", register);

      if (res.data.success) {
        toast.success(res.data.message || "User Created Succesfully!");
      } else {
        toast.error(res.data.message || "Something went wrong");
      }
    } catch (error) {
      toast.error("error in registration", error);
    }
  };
  return (
    <>
      <AdminLayout>
        <section className="py-20 bg-black text-white">
          <div className="px-6">
            <div className="border border-neutral-900 max-w-5xl mx-auto px-4 sm:px-6 md:px-6 py-6 md:py-10 bg-neutral-900 rounded-2xl">
              <h2 className="text-4xl font-bold mb-7 text-center text-indigo-500">
                Kalbii Global PVT LTD
              </h2>
              <h3 className="text-center text-2xl mb-2">
                Add Staff Member to Kalbii Global
              </h3>
              <form onSubmit={handleSubmit} className="space-y-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <label className="text-gray-300 text-md">First Name</label>
                    <input
                      className="mt-2 w-full px-4 py-3 bg-[#111] border border-neutral-700 rounded-lg focus:border-indigo-500 outline-none"
                      placeholder="First Name"
                      type="text"
                      name="fname"
                      id="fname"
                      value={register.fname}
                      required
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label className="text-gray-300 text-md">Last Name</label>
                    <input
                      placeholder="Last Name"
                      className="w-full mt-2 px-4 py-3 bg-[#111] border border-neutral-700 rounded-lg focus:border-indigo-500 outline-none"
                      required
                      type="text"
                      name="lname"
                      id="lname"
                      value={register.lname}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <label className="text-gray-300 text-md">Email Id</label>
                    <input
                      className="mt-2 w-full px-4 py-3 bg-[#111] border border-neutral-700 rounded-lg focus:border-indigo-500 outline-none"
                      placeholder="Email"
                      type="email"
                      id="email"
                      name="email"
                      value={register.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div>
                    <label className="text-gray-300 text-md">
                      Mobile Number
                    </label>
                    <input
                      className="mt-2 w-full px-4 py-3 bg-[#111] border border-neutral-700 rounded-lg focus:border-indigo-500 outline-none"
                      placeholder="Mobile Number"
                      type="number"
                      id="number"
                      name="number"
                      value={register.number}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <label className="text-gray-300 text-md">Password</label>
                    <input
                      className="mt-2 w-full px-4 py-3 bg-[#111] border border-neutral-700 rounded-lg focus:border-indigo-500 outline-none"
                      placeholder="Password"
                      type="password"
                      id="password"
                      name="password"
                      value={register.password}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div>
                    <label className="text-gray-300 text-md">
                      Confirm Password
                    </label>
                    <input
                      className="mt-2 w-full px-4 py-3 bg-[#111] border border-neutral-700 rounded-lg focus:border-indigo-500 outline-none"
                      placeholder="Confirm Password"
                      type="password"
                      id="confirmPassword"
                      name="confirmPassword"
                      value={register.confirmPassword}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div>
                    <label className="text-gray-300">Select Role</label>
                    <select
                      className="mt-2 w-full px-4 py-3 bg-[#111] border border-neutral-700 rounded-lg focus:border-indigo-500 outline-none"
                      name="role"
                      value={register.role}
                      onChange={handleChange}
                    >
                      <option value="">Select Role</option>
                      <option value="employee">Employee</option>
                      <option value="hr">HR</option>
                    </select>
                  </div>
                </div>
                <div>
                  <button
                    type="submit"
                    className="mx-auto block min-w-32 bg-indigo-600 hover:bg-indigo-700 transition transform-300 cursor-pointer text-white foucs:outline-indigo-800 py-3 px-6 rounded-md"
                  >
                    Create Account
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </AdminLayout>
    </>
  );
};

export default AddMember;
