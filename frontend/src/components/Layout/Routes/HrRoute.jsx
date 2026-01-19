import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../../pages/context/auth";

const HrRoute = () => {
  const [auth, setAuth, loading] = useAuth();

  if (loading) {
    return <p>Loading......</p>;
  }

  if (!auth?.token) {
    return <Navigate to="/login" />;
  }

  if (auth?.user?.role !== "hr") {
    return <Navigate to="/" />;
  }
  return <Outlet />;
};

export default HrRoute;
