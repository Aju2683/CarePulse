import {
  Eye,
  EyeOff,
  HeartPulse,
} from "lucide-react";

import { useState } from "react";

import { useNavigate } from "react-router-dom";

import toast from "react-hot-toast";

function ResetPassword() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] =
    useState(false);

  const [form, setForm] = useState({
    password: "",
    confirmPassword: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setForm((current) => ({
      ...current,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (form.password.length < 6) {
      toast.error(
        "Password must contain at least 6 characters.",
      );

      return;
    }

    if (
      form.password !== form.confirmPassword
    ) {
      toast.error("Passwords do not match.");
      return;
    }

    toast.success(
      "Password updated successfully.",
    );

    navigate("/login");
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#eef7f5] p-5">
      <section className="w-full max-w-md rounded-[28px] bg-white p-8 shadow-[0_25px_70px_rgba(15,77,73,0.10)] sm:p-10">
        <div className="mb-8 flex items-center gap-3">
          <div className="grid h-11 w-11 place-items-center rounded-2xl bg-[#149883] text-white">
            <HeartPulse size={23} />
          </div>

          <div>
            <h1 className="font-semibold text-[#173b3f]">
              CarePulse
            </h1>

            <p className="text-xs text-slate-400">
              Secure Account
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-semibold text-[#173b3f]">
          Create new password
        </h2>

        <p className="mt-3 text-sm leading-6 text-slate-500">
          Choose a secure password for your
          CarePulse account.
        </p>

        <form
          onSubmit={handleSubmit}
          className="mt-8 space-y-5"
        >
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">
              New password
            </label>

            <div className="relative">
              <input
                type={
                  showPassword
                    ? "text"
                    : "password"
                }
                name="password"
                value={form.password}
                onChange={handleChange}
                className="w-full rounded-xl border border-slate-200 px-4 py-3.5 pr-12 text-sm focus:border-[#149883] focus:ring-4 focus:ring-[#149883]/10"
              />

              <button
                type="button"
                onClick={() =>
                  setShowPassword(
                    (current) => !current,
                  )
                }
                className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400"
              >
                {showPassword ? (
                  <EyeOff size={18} />
                ) : (
                  <Eye size={18} />
                )}
              </button>
            </div>
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">
              Confirm password
            </label>

            <input
              type="password"
              name="confirmPassword"
              value={form.confirmPassword}
              onChange={handleChange}
              className="w-full rounded-xl border border-slate-200 px-4 py-3.5 text-sm focus:border-[#149883] focus:ring-4 focus:ring-[#149883]/10"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-xl bg-[#149883] py-3.5 text-sm font-semibold text-white transition hover:bg-[#107b6d]"
          >
            Update Password
          </button>
        </form>
      </section>
    </main>
  );
}

export default ResetPassword;