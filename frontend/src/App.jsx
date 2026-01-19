import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home";
import Address from "./pages/Address";
import Contact from "./pages/Contact";
import Careers from "./pages/careers/Careers";
import JobDetails from "./pages/careers/JobDetails";
import ApplyForm from "./pages/careers/ApplyForm";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { Toaster } from "sonner";
import Profile from "./pages/Profile";
import PrivateRoute from "./components/Layout/Routes/PrivateRoute";
import UserDashboard from "./pages/user/UserDashboard";
import AdminRoute from "./components/Layout/Routes/AdminRoute";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AllJobs from "./pages/admin/adminpages/AllJobs";
import AddJob from "./pages/admin/adminpages/AddJob";
import Applications from "./pages/admin/adminpages/Applications";
import AddMember from "./pages/admin/adminpages/AddMember";
import HrRoute from "./components/Layout/Routes/HrRoute";
import HrDashboard from "./pages/hr/HrDashboard";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Toaster position="top-center" variant="outline" />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route index element={<Home />} />
          <Route path="/address" element={<Address />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/careers/:id" element={<JobDetails />} />
          <Route path="*" element={<NotFound />} />

          <Route element={<PrivateRoute />}>
            <Route path="/profile" element={<Profile />} />
            <Route path="/dashboard" element={<UserDashboard />} />
            <Route path="/apply/:id" element={<ApplyForm />} />
          </Route>

          <Route element={<AdminRoute />}>
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/add-job" element={<AddJob />} />
            <Route path="/jobs" element={<AllJobs />} />
            <Route path="/applications" element={<Applications />} />
            <Route path="/add-member" element={<AddMember />} />
          </Route>
          <Route element={<HrRoute />}>
            <Route path="/hr" element={<HrDashboard />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
