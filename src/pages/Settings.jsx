import {
  Bell,
  CheckCircle2,
  Database,
  Laptop,
  LockKeyhole,
  Moon,
  Save,
  ShieldCheck,
  SlidersHorizontal,
  Smartphone,
  Sun,
  UserCog,
} from "lucide-react";

import { useState } from "react";
import toast from "react-hot-toast";

import { useTheme } from "../context/ThemeContext.jsx";

function Settings() {
  const { darkMode, setDarkMode } = useTheme();

  const [emailAlerts, setEmailAlerts] = useState(true);
  const [criticalAlerts, setCriticalAlerts] = useState(true);
  const [appointmentAlerts, setAppointmentAlerts] = useState(true);
  const [bedAlerts, setBedAlerts] = useState(true);
  const [pharmacyAlerts, setPharmacyAlerts] = useState(true);

  const [sessionTimeout, setSessionTimeout] = useState("30 Minutes");
  const [defaultDepartment, setDefaultDepartment] = useState("All Departments");

  function saveSettings() {
    toast.success("Settings saved successfully.");
  }

  return (
    <div className="mx-auto max-w-[1500px]">
      {/* HEADER */}
      <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-sm font-medium text-[#149883]">
            System Control Center
          </p>

          <h1 className="mt-1 text-2xl font-semibold tracking-tight text-[#173b3f] sm:text-3xl">
            Settings
          </h1>

          <p className="mt-2 text-sm text-slate-400">
            Configure your dashboard preferences, alerts, security and hospital system behavior.
          </p>
        </div>

        <button
          type="button"
          onClick={saveSettings}
          className="flex items-center justify-center gap-2 rounded-xl bg-[#149883] px-5 py-3 text-sm font-medium text-white transition hover:bg-[#107b6d]"
        >
          <Save size={17} />
          Save Changes
        </button>
      </div>

      {/* QUICK STATUS */}
      <section className="mb-5 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <article className="rounded-[20px] border border-[#e5eeec] bg-white p-5">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-xs text-slate-400">
                Account Security
              </p>

              <p className="mt-2 text-2xl font-semibold text-[#173b3f]">
                92%
              </p>

              <p className="mt-2 text-[11px] text-emerald-600">
                Strong protection
              </p>
            </div>

            <div className="grid h-11 w-11 place-items-center rounded-xl bg-emerald-50 text-emerald-500">
              <ShieldCheck size={20} />
            </div>
          </div>
        </article>

        <article className="rounded-[20px] border border-[#e5eeec] bg-white p-5">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-xs text-slate-400">
                Active Sessions
              </p>

              <p className="mt-2 text-2xl font-semibold text-[#173b3f]">
                2
              </p>

              <p className="mt-2 text-[11px] text-slate-400">
                Desktop + Mobile
              </p>
            </div>

            <div className="grid h-11 w-11 place-items-center rounded-xl bg-blue-50 text-blue-500">
              <Laptop size={20} />
            </div>
          </div>
        </article>

        <article className="rounded-[20px] border border-[#e5eeec] bg-white p-5">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-xs text-slate-400">
                Alert Channels
              </p>

              <p className="mt-2 text-2xl font-semibold text-[#173b3f]">
                5
              </p>

              <p className="mt-2 text-[11px] text-violet-600">
                All configured
              </p>
            </div>

            <div className="grid h-11 w-11 place-items-center rounded-xl bg-violet-50 text-violet-500">
              <Bell size={20} />
            </div>
          </div>
        </article>

        <article className="rounded-[20px] border border-[#e5eeec] bg-white p-5">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-xs text-slate-400">
                System Preferences
              </p>

              <p className="mt-2 text-2xl font-semibold text-[#173b3f]">
                12
              </p>

              <p className="mt-2 text-[11px] text-[#149883]">
                Customized
              </p>
            </div>

            <div className="grid h-11 w-11 place-items-center rounded-xl bg-[#edf8f6] text-[#149883]">
              <SlidersHorizontal size={20} />
            </div>
          </div>
        </article>
      </section>

      {/* MAIN GRID */}
      <div className="grid gap-5 xl:grid-cols-[1.3fr_0.7fr]">
        {/* LEFT SIDE */}
        <div className="space-y-5">
          {/* APPEARANCE */}
          <section className="rounded-[22px] border border-[#e5eeec] bg-white p-6">
            <div className="flex items-center gap-3">
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-[#edf8f6] text-[#149883]">
                {darkMode ? <Moon size={20} /> : <Sun size={20} />}
              </div>

              <div>
                <h2 className="font-semibold text-[#173b3f]">
                  Appearance
                </h2>

                <p className="mt-1 text-xs text-slate-400">
                  Personalize how CarePulse looks.
                </p>
              </div>
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <button
                type="button"
                onClick={() => setDarkMode(false)}
                className={`rounded-2xl border p-5 text-left transition ${
                  !darkMode
                    ? "border-[#149883] bg-[#f1faf8]"
                    : "border-slate-200 bg-white"
                }`}
              >
                <Sun
                  size={22}
                  className={
                    !darkMode ? "text-[#149883]" : "text-slate-400"
                  }
                />

                <p className="mt-4 text-sm font-semibold text-[#173b3f]">
                  Light Mode
                </p>

                <p className="mt-1 text-xs text-slate-400">
                  Bright and clean hospital workspace
                </p>
              </button>

              <button
                type="button"
                onClick={() => setDarkMode(true)}
                className={`rounded-2xl border p-5 text-left transition ${
                  darkMode
                    ? "border-[#149883] bg-[#f1faf8]"
                    : "border-slate-200 bg-white"
                }`}
              >
                <Moon
                  size={22}
                  className={
                    darkMode ? "text-[#149883]" : "text-slate-400"
                  }
                />

                <p className="mt-4 text-sm font-semibold text-[#173b3f]">
                  Dark Mode
                </p>

                <p className="mt-1 text-xs text-slate-400">
                  Reduced brightness for long sessions
                </p>
              </button>
            </div>
          </section>

          {/* NOTIFICATIONS */}
          <section className="rounded-[22px] border border-[#e5eeec] bg-white p-6">
            <div className="flex items-center gap-3">
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-blue-50 text-blue-500">
                <Bell size={20} />
              </div>

              <div>
                <h2 className="font-semibold text-[#173b3f]">
                  Notification Preferences
                </h2>

                <p className="mt-1 text-xs text-slate-400">
                  Choose which hospital events should alert you.
                </p>
              </div>
            </div>

            <div className="mt-6 space-y-3">
              {[
                ["Email Notifications", emailAlerts, setEmailAlerts],
                ["Critical Patient Alerts", criticalAlerts, setCriticalAlerts],
                ["Appointment Updates", appointmentAlerts, setAppointmentAlerts],
                ["Bed Availability Alerts", bedAlerts, setBedAlerts],
                ["Pharmacy Stock Alerts", pharmacyAlerts, setPharmacyAlerts],
              ].map(([title, value, setter]) => (
                <div
                  key={title}
                  className="flex items-center justify-between rounded-xl border border-slate-100 p-4"
                >
                  <div>
                    <p className="text-sm font-medium text-[#173b3f]">
                      {title}
                    </p>

                    <p className="mt-1 text-xs text-slate-400">
                      Receive updates for this event type
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={() => setter(!value)}
                    className={`relative h-7 w-12 rounded-full transition ${
                      value ? "bg-[#149883]" : "bg-slate-200"
                    }`}
                  >
                    <span
                      className={`absolute top-1 h-5 w-5 rounded-full bg-white transition ${
                        value ? "left-6" : "left-1"
                      }`}
                    />
                  </button>
                </div>
              ))}
            </div>
          </section>

          {/* HOSPITAL PREFS */}
          <section className="rounded-[22px] border border-[#e5eeec] bg-white p-6">
            <div className="flex items-center gap-3">
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-violet-50 text-violet-500">
                <UserCog size={20} />
              </div>

              <div>
                <h2 className="font-semibold text-[#173b3f]">
                  Hospital Preferences
                </h2>

                <p className="mt-1 text-xs text-slate-400">
                  Configure your default dashboard behavior.
                </p>
              </div>
            </div>

            <div className="mt-6 grid gap-5 md:grid-cols-2">
              <label>
                <span className="mb-2 block text-xs font-medium text-slate-500">
                  Default Department
                </span>

                <select
                  value={defaultDepartment}
                  onChange={(event) =>
                    setDefaultDepartment(event.target.value)
                  }
                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-500"
                >
                  <option>All Departments</option>
                  <option>Cardiology</option>
                  <option>Orthopedics</option>
                  <option>Pediatrics</option>
                  <option>Neurology</option>
                </select>
              </label>

              <label>
                <span className="mb-2 block text-xs font-medium text-slate-500">
                  Session Timeout
                </span>

                <select
                  value={sessionTimeout}
                  onChange={(event) =>
                    setSessionTimeout(event.target.value)
                  }
                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-500"
                >
                  <option>15 Minutes</option>
                  <option>30 Minutes</option>
                  <option>1 Hour</option>
                  <option>2 Hours</option>
                </select>
              </label>
            </div>
          </section>
        </div>

        {/* RIGHT SIDE */}
        <div className="space-y-5">
          {/* SECURITY */}
          <section className="rounded-[22px] border border-[#e5eeec] bg-white p-5">
            <div className="flex items-center gap-3">
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-emerald-50 text-emerald-500">
                <LockKeyhole size={20} />
              </div>

              <div>
                <h2 className="font-semibold text-[#173b3f]">
                  Security
                </h2>

                <p className="mt-1 text-xs text-slate-400">
                  Protect your administrator account.
                </p>
              </div>
            </div>

            <div className="mt-5 rounded-xl bg-[#f8fbfa] p-4">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-[#173b3f]">
                  Security Score
                </span>

                <span className="text-sm font-semibold text-emerald-600">
                  92%
                </span>
              </div>

              <div className="mt-3 h-2 overflow-hidden rounded-full bg-slate-100">
                <div className="h-full w-[92%] rounded-full bg-emerald-500" />
              </div>
            </div>

            <button
              type="button"
              className="mt-4 w-full rounded-xl border border-slate-200 py-3 text-sm font-medium text-slate-600"
            >
              Change Password
            </button>
          </section>

          {/* ACTIVE DEVICES */}
          <section className="rounded-[22px] border border-[#e5eeec] bg-white p-5">
            <h2 className="font-semibold text-[#173b3f]">
              Active Devices
            </h2>

            <p className="mt-1 text-xs text-slate-400">
              Devices currently signed into your account.
            </p>

            <div className="mt-5 space-y-3">
              <div className="flex items-center gap-3 rounded-xl border border-slate-100 p-4">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-blue-50 text-blue-500">
                  <Laptop size={18} />
                </div>

                <div className="min-w-0 flex-1">
                  <p className="text-sm font-medium text-[#173b3f]">
                    Windows Desktop
                  </p>

                  <p className="mt-1 text-xs text-slate-400">
                    Coimbatore · Current Session
                  </p>
                </div>

                <CheckCircle2
                  size={17}
                  className="text-emerald-500"
                />
              </div>

              <div className="flex items-center gap-3 rounded-xl border border-slate-100 p-4">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-violet-50 text-violet-500">
                  <Smartphone size={18} />
                </div>

                <div className="min-w-0 flex-1">
                  <p className="text-sm font-medium text-[#173b3f]">
                    Android Mobile
                  </p>

                  <p className="mt-1 text-xs text-slate-400">
                    Last active 2 hours ago
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* DATA */}
          <section className="rounded-[22px] border border-[#e5eeec] bg-white p-5">
            <div className="flex items-center gap-3">
              <Database
                size={20}
                className="text-[#149883]"
              />

              <div>
                <h2 className="font-semibold text-[#173b3f]">
                  Data & Privacy
                </h2>

                <p className="mt-1 text-xs text-slate-400">
                  Manage stored account information.
                </p>
              </div>
            </div>

            <div className="mt-5 space-y-3">
              <button
                type="button"
                className="w-full rounded-xl border border-slate-200 px-4 py-3 text-left text-sm text-slate-600"
              >
                Export Account Data
              </button>

              <button
                type="button"
                className="w-full rounded-xl border border-red-100 bg-red-50 px-4 py-3 text-left text-sm text-red-500"
              >
                Clear Local Session Data
              </button>
            </div>
          </section>

          {/* SYSTEM */}
          <section className="rounded-[22px] bg-[#123f3b] p-5 text-white">
            <div className="flex items-center gap-3">
              <ShieldCheck size={20} />

              <div>
                <h2 className="font-semibold">
                  CarePulse System
                </h2>

                <p className="mt-1 text-xs text-white/50">
                  Hospital Operations Platform
                </p>
              </div>
            </div>

            <div className="mt-5 flex items-center justify-between">
              <span className="text-xs text-white/60">
                System Health
              </span>

              <span className="flex items-center gap-2 text-xs text-emerald-300">
                <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
                Operational
              </span>
            </div>

            <div className="mt-4 h-2 rounded-full bg-white/10">
              <div className="h-full w-[98%] rounded-full bg-[#48d9c1]" />
            </div>

            <p className="mt-3 text-xs text-white/50">
              Version 1.0.0 · All services available
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Settings;