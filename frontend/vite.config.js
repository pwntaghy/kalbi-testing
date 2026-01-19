import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  preview: {
    host: true, // allow any host
    port: 5173,
    allowedHosts: ["kalbii.org", "www.kalbii.org"], // yahan aapke domain add karo
  },
});

