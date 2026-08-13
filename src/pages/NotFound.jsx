import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#f7faf9] p-6">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-[#149883]">
          404
        </h1>

        <h2 className="mt-4 text-2xl font-semibold text-[#173b3f]">
          Page Not Found
        </h2>

        <p className="mt-2 text-sm text-slate-500">
          The page you are looking for does not exist.
        </p>

        <Link
          to="/dashboard"
          className="mt-6 inline-block rounded-xl bg-[#149883] px-5 py-3 text-sm font-medium text-white"
        >
          Back to Dashboard
        </Link>
      </div>
    </div>
  );
}

export default NotFound;