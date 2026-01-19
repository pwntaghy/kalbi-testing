import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../../pages/context/auth";

const PrivateRoute = () => {
  const [auth, setAuth, loading] = useAuth();

  if (loading) return <div className="text-gray-500 p-10">Loading.....</div>;

  return auth?.token ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
