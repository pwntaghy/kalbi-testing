import React, { useEffect, useState } from "react";
import { useAuth } from "../pages/context/auth";
import api from "./utils/axiosInstance";
import { toast } from "sonner";

const Profile = () => {
  const [auth, setAuth] = useAuth();

  const [form, setForm] = useState({
    fname: "",
    lname: "",
    email: "",
    number: "",
  });

  useEffect(() => {
    if (auth?.user) {
      setForm({
        fname: auth.user.fname,
        lname: auth.user.lname,
        email: auth.user.email,
        number: auth.user.number,
      });
    }
  }, [auth]);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await api.put("/api/v1/auth/update-profile", form);
      console.log("response", res);
      const stored = JSON.parse(localStorage.getItem("auth"));
      stored.user = res.data.user;
      localStorage.setItem("auth", JSON.stringify(stored));

      setAuth({
        ...auth,
        user: res.data.user,
      });

      toast.success("Profile updated succesfully");
    } catch (error) {
      console.log("error", error);
      toast.error("profile update failed");
    }
  };

  return (
    <>
      <section className="py-35 bg-black text-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6 md:p-8">
            <h2 className="text-2xl font-bold mb-4">Edit Profile</h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm text-gray-400">First name</label>
                  <input
                    name="fname"
                    id="fname"
                    value={form.fname}
                    onChange={handleChange}
                    className="mt-2 w-full px-4 py-3 bg-[#111] border border-neutral-700 rounded-lg outline-none"
                  />
                </div>
                <div>
                  <label className="text-sm text-gray-400">Last name</label>
                  <input
                    name="lname"
                    id="lname"
                    value={form.lname}
                    onChange={handleChange}
                    className="mt-2 w-full px-4 py-3 bg-[#111] border border-neutral-700 rounded-lg outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm text-gray-400">Mobile number</label>
                  <input
                    name="number"
                    id="number"
                    value={form.number}
                    onChange={handleChange}
                    className="mt-2 w-full px-4 py-3 bg-[#111] border border-neutral-700 rounded-lg outline-none"
                  />
                </div>
                <div>
                  <label className="text-sm text-gray-400">Email</label>
                  <input
                    name="email"
                    value={form.email}
                    disabled
                    className="mt-2 w-full px-4 py-3 bg-[#0f0f0f] border border-neutral-800 rounded-lg outline-none opacity-70"
                  />
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  className="px-4 py-2 bg-indigo-600 rounded-md hover:bg-indigo-700"
                >
                  Update
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Profile;
