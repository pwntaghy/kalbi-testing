import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "./utils/axiosInstance";
import { toast } from "sonner";
import { useAuth } from "./context/auth";

const Login = () => {
  const navigate = useNavigate();
  const [auth, setAuth] = useAuth();
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setLogin({
      ...login,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post("/api/v1/auth/login", {
        email: login.email,
        password: login.password,
      });
      console.log("response", res.data);
      if (res.data.success) {
        toast.success(res.data.message);
        setAuth({
          ...auth,
          user: res.data.user,
          token: res.data.token,
        });
        localStorage.setItem("auth", JSON.stringify(res.data));
        navigate("/");
      }
    } catch (error) {
      console.log("error", error);
      toast.error("Something went wrong");
    }
  };
  return (
    <>
      <section className="min-h-screen flex items-center justify-center bg-black text-white px-4">
        <div className="max-w-md w-full bg-neutral-900 border border-neutral-800 p-8 rounded-2xl">
          <h2 className="text-3xl font-bold mb-4 text-indigo-400">
            Kalbii Global PVT LTD
          </h2>
          <h3 className="text-xl font-bold mb-2">Login</h3>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label>Email</label>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="Enter Email"
                required
                className="mt-2 w-full px-4 py-3 bg-[#111] border border-neutral-700 rounded-lg oultine-none"
                onChange={handleChange}
                value={login.email}
              />
            </div>
            <div>
              <label>Password</label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Enter Password"
                required
                className="mt-2 w-full px-4 py-3 bg-[#111] border border-neutral-700 rounded-lg outline-none"
                onChange={handleChange}
                value={login.password}
              />
              <Link className="text-indigo-500 hover:underline transition">
                Forgot Password
              </Link>
            </div>

            <button
              type="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-700 transtion py-3 rounded-lg font-semibold"
            >
              Login
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Login;
