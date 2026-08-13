import {
  Activity,
  ArrowRight,
  Eye,
  EyeOff,
  HeartPulse,
  ShieldCheck,
} from "lucide-react";

import { useState } from "react";

import {Link,useNavigate,} from "react-router-dom";

import toast from "react-hot-toast";

import { useAuth } from "../../context/AuthContext.jsx";

function Login() {
  const navigate = useNavigate();

  const { login } = useAuth();

  const [showPassword, setShowPassword] =
    useState(false);

  const [form, setForm] = useState({
    email: "admin@carepulse.com",
    password: "admin123",
  });

  const [errors, setErrors] = useState({});

  function handleChange(event) {
    const { name, value } = event.target;

    setForm((current) => ({
      ...current,
      [name]: value,
    }));

    setErrors((current) => ({
      ...current,
      [name]: "",
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    const nextErrors = {};

    if (!form.email.trim()) {
      nextErrors.email = "Email is required.";
    }

    if (!form.password.trim()) {
      nextErrors.password =
        "Password is required.";
    }

    if (
      form.email &&
      !/\S+@\S+\.\S+/.test(form.email)
    ) {
      nextErrors.email =
        "Enter a valid email address.";
    }

    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      return;
    }

    login(form.email);

    toast.success("Welcome back to CarePulse");

    navigate("/dashboard");
  }

  return (
    <main className="min-h-screen bg-[#eef7f5] p-4 lg:p-6">
      <div className="mx-auto grid min-h-[calc(100vh-32px)] max-w-[1450px] overflow-hidden rounded-[28px] bg-white shadow-[0_30px_80px_rgba(15,77,73,0.10)] lg:grid-cols-[1.05fr_0.95fr]">
        {/* LEFT PANEL */}

        <section className="relative hidden overflow-hidden bg-[#123f3b] p-12 text-white lg:flex lg:flex-col lg:justify-between">
          <div className="absolute -right-32 -top-32 h-[420px] w-[420px] rounded-full border border-white/10" />

          <div className="absolute -right-12 top-24 h-[250px] w-[250px] rounded-full border border-white/10" />

          <div className="absolute bottom-0 left-0 h-48 w-48 rounded-tr-full bg-[#23b5a2]/10" />

          <div className="relative z-10">
            <div className="flex items-center gap-3">
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-[#24b9a5] shadow-lg shadow-black/10">
                <HeartPulse size={26} />
              </div>

              <div>
                <h1 className="text-xl font-semibold">
                  CarePulse
                </h1>

                <p className="text-xs text-white/60">
                  Hospital Operations Center
                </p>
              </div>
            </div>
          </div>

          <div className="relative z-10 max-w-xl">
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs text-white/80">
              <Activity size={15} />

              Live hospital operations
            </div>

            <h2 className="max-w-lg text-5xl font-semibold leading-[1.08]">
              Better visibility.
              <br />
              Faster decisions.
              <br />
              Better care.
            </h2>

            <p className="mt-6 max-w-lg text-base leading-7 text-white/65">
              Monitor patients, doctors,
              emergency queues, beds and hospital
              resources from a single clinical
              command center.
            </p>

            <div className="mt-10 grid grid-cols-3 gap-4">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-2xl font-semibold">
                  248
                </p>

                <p className="mt-1 text-xs text-white/55">
                  Active patients
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-2xl font-semibold">
                  34
                </p>

                <p className="mt-1 text-xs text-white/55">
                  Doctors on duty
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-2xl font-semibold">
                  82%
                </p>

                <p className="mt-1 text-xs text-white/55">
                  Bed occupancy
                </p>
              </div>
            </div>
          </div>

          <div className="relative z-10 flex items-center gap-2 text-xs text-white/50">
            <ShieldCheck size={15} />

            Secure hospital administration system
          </div>
        </section>

        {/* RIGHT PANEL */}

        <section className="flex items-center justify-center px-6 py-12 sm:px-10 lg:px-16">
          <div className="w-full max-w-[430px]">
            <div className="mb-10 flex items-center gap-3 lg:hidden">
              <div className="grid h-11 w-11 place-items-center rounded-2xl bg-[#15a894] text-white">
                <HeartPulse size={23} />
              </div>

              <div>
                <h1 className="font-semibold text-[#173b3f]">
                  CarePulse
                </h1>

                <p className="text-xs text-slate-400">
                  Hospital Operations
                </p>
              </div>
            </div>

            <p className="mb-2 text-sm font-medium text-[#149883]">
              Welcome back
            </p>

            <h2 className="text-3xl font-semibold tracking-tight text-[#173b3f]">
              Sign in to CarePulse
            </h2>

            <p className="mt-3 text-sm leading-6 text-slate-500">
              Access your hospital operations
              workspace and manage today's clinical
              activities.
            </p>

            <form
              onSubmit={handleSubmit}
              className="mt-9 space-y-5"
            >
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Email address
                </label>

                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="admin@carepulse.com"
                  className={`w-full rounded-xl border px-4 py-3.5 text-sm transition focus:border-[#19a58f] focus:ring-4 focus:ring-[#19a58f]/10 ${
                    errors.email
                      ? "border-red-300 bg-red-50"
                      : "border-slate-200 bg-white"
                  }`}
                />

                {errors.email && (
                  <p className="mt-1.5 text-xs text-red-500">
                    {errors.email}
                  </p>
                )}
              </div>

              <div>
                <div className="mb-2 flex items-center justify-between">
                  <label className="text-sm font-medium text-slate-700">
                    Password
                  </label>

                  <Link
                    to="/forgot-password"
                    className="text-xs font-medium text-[#149883]"
                  >
                    Forgot password?
                  </Link>
                </div>

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
                    placeholder="Enter your password"
                    className={`w-full rounded-xl border px-4 py-3.5 pr-12 text-sm transition focus:border-[#19a58f] focus:ring-4 focus:ring-[#19a58f]/10 ${
                      errors.password
                        ? "border-red-300 bg-red-50"
                        : "border-slate-200 bg-white"
                    }`}
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

                {errors.password && (
                  <p className="mt-1.5 text-xs text-red-500">
                    {errors.password}
                  </p>
                )}
              </div>

              <label className="flex items-center gap-2 text-sm text-slate-500">
                <input
                  type="checkbox"
                  className="h-4 w-4 accent-[#149883]"
                />

                Keep me signed in
              </label>

              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#149883] px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-[#107b6d]"
              >
                Sign In

                <ArrowRight size={17} />
              </button>
            </form>

            <div className="mt-7 rounded-xl bg-[#f3faf8] px-4 py-3 text-xs text-[#537270]">
              Demo Login:
              <strong className="ml-1">
                admin@carepulse.com
              </strong>

              <span className="mx-2">•</span>

              Password:
              <strong className="ml-1">
                admin123
              </strong>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

export default Login;