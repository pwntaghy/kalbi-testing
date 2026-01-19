import { useEffect, useState } from "react";
import api from "../utils/axiosInstance";
import AdminLayout from "./AdminLayout";
import { Users, Briefcase, ClipboardList } from "lucide-react";
import { toast } from "sonner";

const AdminDashboard = () => {
  const [stats, setStats] = useState({
    totalUsers: 0,
    totalJobs: 0,
    totalApplication: 0,
  });

  const [loading, setLoading] = useState(true);

  const fetchDashboardStats = async () => {
    try {
      const { data } = await api.get("/api/v1/admin/dashboard-stats");

      if (data.success) {
        setStats(data.data);
      }
    } catch (error) {
      toast.error("Dashboard Stats error", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDashboardStats();
  }, []);

  return (
    <AdminLayout>
      {/* Page Title */}
      <h1 className="text-3xl font-bold mb-8">Dashboard</h1>

      {/* Cards Section */}
      <div className="grid md:grid-cols-3 gap-6">
        {/* Total Users */}
        <div className="p-6 bg-gradient-to-r from-indigo-700 to-indigo-900 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300">
          <div className="flex items-center gap-4">
            <Users size={32} className="text-yellow-400" />
            <div>
              <h2 className="text-lg font-semibold">Total Users</h2>
              <p className="text-2xl font-bold">
                {loading ? "..." : stats.totalUsers}
              </p>
            </div>
          </div>
        </div>

        {/* Total Jobs */}
        <div className="p-6 bg-gradient-to-r from-indigo-700 to-indigo-900 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300">
          <div className="flex items-center gap-4">
            <Briefcase size={32} className="text-green-400" />
            <div>
              <h2 className="text-lg font-semibold">Total Jobs</h2>
              <p className="text-2xl font-bold">
                {loading ? "..." : stats.totalJobs}
              </p>
            </div>
          </div>
        </div>

        {/* Applications */}
        <div className="p-6 bg-gradient-to-r from-indigo-700 to-indigo-900 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300">
          <div className="flex items-center gap-4">
            <ClipboardList size={32} className="text-pink-400" />
            <div>
              <h2 className="text-lg font-semibold">Applications</h2>
              <p className="text-2xl font-bold">
                {loading ? "..." : stats.totalApplication}
              </p>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminDashboard;
