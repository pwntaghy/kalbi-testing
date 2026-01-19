// src/pages/utils/axiosInstance.js
import axios from "axios";

// Ensure VITE_API is set; fallback to localhost for local dev
const BASE_URL = import.meta.env.VITE_API || "http://localhost:5000/api/v1";

const api = axios.create({
  baseURL: BASE_URL,
  withCredentials: true, // send cookies if any
});

// Automatically attach auth token if available
api.interceptors.request.use((config) => {
  const auth = localStorage.getItem("auth");
  if (auth) {
    try {
      const parsed = JSON.parse(auth);
      if (parsed.token) {
        config.headers.Authorization = `Bearer ${parsed.token}`;
      }
    } catch (error) {
      console.error("Failed to parse auth token", error);
    }
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});

// Optional: handle response errors globally
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      // maybe redirect to login if token expired
      console.warn("Unauthorized! Redirect to login.");
    }
    return Promise.reject(error);
  }
);

export default api;

