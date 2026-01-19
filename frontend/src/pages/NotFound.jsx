import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white px-6">
      <div className="text-center max-w-md">
        <h1 className="text-4xl font-bold text-red-500 mb-4">
          404 – Page Not Found
        </h1>

        <p className="text-gray-400 mb-6">
          The page you are looking for doesn’t exist or has been removed.
        </p>

        <Link
          to="/"
          className="inline-block bg-indigo-600 px-6 py-2 rounded hover:bg-indigo-700 transition"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
