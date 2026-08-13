import {
  ArrowLeft,
  HeartPulse,
  Mail,
} from "lucide-react";

import { useState } from "react";

import {
  Link,
  useNavigate,
} from "react-router-dom";

import toast from "react-hot-toast";

function ForgotPassword() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    if (!email.trim()) {
      toast.error("Please enter your email.");
      return;
    }

    toast.success(
      "Password reset instructions sent.",
    );

    navigate("/reset-password");
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
              Account Recovery
            </p>
          </div>
        </div>

        <Link
          to="/login"
          className="mb-8 inline-flex items-center gap-2 text-sm text-slate-500"
        >
          <ArrowLeft size={16} />

          Back to login
        </Link>

        <h2 className="text-2xl font-semibold text-[#173b3f]">
          Forgot your password?
        </h2>

        <p className="mt-3 text-sm leading-6 text-slate-500">
          Enter your registered hospital email
          address and we'll help you reset your
          password.
        </p>

        <form
          onSubmit={handleSubmit}
          className="mt-8"
        >
          <label className="mb-2 block text-sm font-medium text-slate-700">
            Email address
          </label>

          <div className="relative">
            <Mail
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
            />

            <input
              type="email"
              value={email}
              onChange={(event) =>
                setEmail(event.target.value)
              }
              placeholder="admin@carepulse.com"
              className="w-full rounded-xl border border-slate-200 py-3.5 pl-11 pr-4 text-sm focus:border-[#149883] focus:ring-4 focus:ring-[#149883]/10"
            />
          </div>

          <button
            type="submit"
            className="mt-6 w-full rounded-xl bg-[#149883] py-3.5 text-sm font-semibold text-white transition hover:bg-[#107b6d]"
          >
            Send Reset Instructions
          </button>
        </form>
      </section>
    </main>
  );
}

export default ForgotPassword;