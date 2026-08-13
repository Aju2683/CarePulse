import {
  Activity,
  BadgeCheck,
  Building2,
  CalendarDays,
  CheckCircle2,
  Clock3,
  Edit3,
  Mail,
  MapPin,
  Phone,
  Save,
  ShieldCheck,
  Stethoscope,
  UserRound,
} from "lucide-react";

import { useState } from "react";
import toast from "react-hot-toast";

function Profile() {
  const [form, setForm] = useState({
    name: "Aravind",
    email: "admin@carepulse.com",
    phone: "+91 98765 43210",
    role: "Hospital Administrator",
    hospital: "CarePulse Medical Center",
    department: "Hospital Operations",
    location: "Coimbatore, Tamil Nadu",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setForm((current) => ({
      ...current,
      [name]: value,
    }));
  }

  function saveProfile(event) {
    event.preventDefault();
    toast.success("Profile updated successfully.");
  }

  const activity = [
    {
      title: "Updated patient record",
      text: "Patient P-1003 profile was updated.",
      time: "18 min ago",
      icon: UserRound,
    },
    {
      title: "Reviewed bed allocation",
      text: "ICU capacity status reviewed.",
      time: "42 min ago",
      icon: Activity,
    },
    {
      title: "Appointment schedule checked",
      text: "Today's cardiology appointments reviewed.",
      time: "1 hr ago",
      icon: CalendarDays,
    },
  ];

  return (
    <div className="mx-auto max-w-[1500px]">
      {/* PAGE TITLE */}
      <div className="mb-6">
        <p className="text-sm font-medium text-[#149883]">
          Account Workspace
        </p>

        <h1 className="mt-1 text-2xl font-semibold tracking-tight text-[#173b3f] sm:text-3xl">
          My Profile
        </h1>

        <p className="mt-2 text-sm text-slate-400">
          Manage your hospital account, contact details and security information.
        </p>
      </div>

      {/* PROFILE HERO */}
      <section className="relative overflow-hidden rounded-[26px] bg-[#123f3b] p-6 text-white sm:p-8">
        <div className="absolute -right-16 -top-20 h-64 w-64 rounded-full border border-white/10" />

        <div className="absolute right-16 top-10 h-32 w-32 rounded-full border border-white/10" />

        <div className="relative z-10 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
            <div className="relative">
              <div className="grid h-24 w-24 place-items-center rounded-[26px] border-4 border-white/20 bg-[#dff6f1] text-2xl font-semibold text-[#149883]">
                AR
              </div>

              <span className="absolute -bottom-1 -right-1 grid h-8 w-8 place-items-center rounded-full border-4 border-[#123f3b] bg-emerald-500">
                <CheckCircle2 size={15} />
              </span>
            </div>

            <div>
              <div className="flex flex-wrap items-center gap-2">
                <h2 className="text-2xl font-semibold">
                  {form.name}
                </h2>

                <BadgeCheck size={19} className="text-[#65e5cf]" />
              </div>

              <p className="mt-1 text-sm text-white/60">
                {form.role}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                <span className="rounded-full bg-white/10 px-3 py-1.5 text-xs text-white/80">
                  Hospital Operations
                </span>

                <span className="rounded-full bg-[#2dd4bf]/15 px-3 py-1.5 text-xs text-[#7ce7d5]">
                  Active
                </span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
              <p className="text-xl font-semibold">24</p>
              <p className="mt-1 text-[11px] text-white/50">
                Tasks handled
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
              <p className="text-xl font-semibold">98%</p>
              <p className="mt-1 text-[11px] text-white/50">
                Profile complete
              </p>
            </div>

            <div className="col-span-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 sm:col-span-1">
              <p className="text-xl font-semibold">12</p>
              <p className="mt-1 text-[11px] text-white/50">
                Activities today
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* MAIN GRID */}
      <div className="mt-5 grid gap-5 xl:grid-cols-[1.45fr_0.75fr]">
        {/* LEFT SIDE */}
        <div className="space-y-5">
          {/* EDIT PROFILE */}
          <section className="rounded-[22px] border border-[#e5eeec] bg-white p-6">
            <div className="mb-6 flex items-start justify-between">
              <div>
                <div className="flex items-center gap-2">
                  <Edit3 size={18} className="text-[#149883]" />

                  <h2 className="font-semibold text-[#173b3f]">
                    Personal Information
                  </h2>
                </div>

                <p className="mt-1 text-xs text-slate-400">
                  Update your account and hospital details.
                </p>
              </div>

              <span className="rounded-lg bg-[#edf8f6] px-3 py-1.5 text-[11px] font-medium text-[#149883]">
                Verified Profile
              </span>
            </div>

            <form
              onSubmit={saveProfile}
              className="grid gap-5 md:grid-cols-2"
            >
              <label>
                <span className="mb-2 block text-xs font-medium text-slate-500">
                  Full Name
                </span>

                <div className="relative">
                  <UserRound
                    size={17}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                  />

                  <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-slate-200 py-3.5 pl-11 pr-4 text-sm text-[#173b3f] transition focus:border-[#149883] focus:ring-4 focus:ring-[#149883]/10"
                  />
                </div>
              </label>

              <label>
                <span className="mb-2 block text-xs font-medium text-slate-500">
                  Email Address
                </span>

                <div className="relative">
                  <Mail
                    size={17}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                  />

                  <input
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-slate-200 py-3.5 pl-11 pr-4 text-sm text-[#173b3f] transition focus:border-[#149883] focus:ring-4 focus:ring-[#149883]/10"
                  />
                </div>
              </label>

              <label>
                <span className="mb-2 block text-xs font-medium text-slate-500">
                  Phone
                </span>

                <div className="relative">
                  <Phone
                    size={17}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                  />

                  <input
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-slate-200 py-3.5 pl-11 pr-4 text-sm text-[#173b3f] transition focus:border-[#149883] focus:ring-4 focus:ring-[#149883]/10"
                  />
                </div>
              </label>

              <label>
                <span className="mb-2 block text-xs font-medium text-slate-500">
                  Role
                </span>

                <div className="relative">
                  <ShieldCheck
                    size={17}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                  />

                  <input
                    name="role"
                    value={form.role}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-slate-200 py-3.5 pl-11 pr-4 text-sm text-[#173b3f] transition focus:border-[#149883] focus:ring-4 focus:ring-[#149883]/10"
                  />
                </div>
              </label>

              <label>
                <span className="mb-2 block text-xs font-medium text-slate-500">
                  Department
                </span>

                <div className="relative">
                  <Stethoscope
                    size={17}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                  />

                  <input
                    name="department"
                    value={form.department}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-slate-200 py-3.5 pl-11 pr-4 text-sm text-[#173b3f] transition focus:border-[#149883] focus:ring-4 focus:ring-[#149883]/10"
                  />
                </div>
              </label>

              <label>
                <span className="mb-2 block text-xs font-medium text-slate-500">
                  Location
                </span>

                <div className="relative">
                  <MapPin
                    size={17}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                  />

                  <input
                    name="location"
                    value={form.location}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-slate-200 py-3.5 pl-11 pr-4 text-sm text-[#173b3f] transition focus:border-[#149883] focus:ring-4 focus:ring-[#149883]/10"
                  />
                </div>
              </label>

              <label className="md:col-span-2">
                <span className="mb-2 block text-xs font-medium text-slate-500">
                  Hospital
                </span>

                <div className="relative">
                  <Building2
                    size={17}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                  />

                  <input
                    name="hospital"
                    value={form.hospital}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-slate-200 py-3.5 pl-11 pr-4 text-sm text-[#173b3f] transition focus:border-[#149883] focus:ring-4 focus:ring-[#149883]/10"
                  />
                </div>
              </label>

              <div className="md:col-span-2 flex flex-col gap-3 border-t border-slate-100 pt-5 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-xs text-slate-400">
                  Last profile update: Today, 09:45 AM
                </p>

                <button
                  type="submit"
                  className="flex items-center justify-center gap-2 rounded-xl bg-[#149883] px-5 py-3 text-sm font-medium text-white transition hover:bg-[#107b6d]"
                >
                  <Save size={17} />
                  Save Changes
                </button>
              </div>
            </form>
          </section>

          {/* SECURITY */}
          <section className="grid gap-4 md:grid-cols-2">
            <div className="rounded-[20px] border border-[#e5eeec] bg-white p-5">
              <div className="flex items-center gap-3">
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-emerald-50 text-emerald-600">
                  <ShieldCheck size={20} />
                </div>

                <div>
                  <p className="text-sm font-semibold text-[#173b3f]">
                    Account Security
                  </p>

                  <p className="mt-1 text-xs text-slate-400">
                    Your account is protected
                  </p>
                </div>
              </div>

              <div className="mt-5 h-2 overflow-hidden rounded-full bg-slate-100">
                <div className="h-full w-[92%] rounded-full bg-emerald-500" />
              </div>

              <p className="mt-2 text-xs text-slate-400">
                Security score: 92%
              </p>
            </div>

            <div className="rounded-[20px] border border-[#e5eeec] bg-white p-5">
              <div className="flex items-center gap-3">
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-violet-50 text-violet-600">
                  <Clock3 size={20} />
                </div>

                <div>
                  <p className="text-sm font-semibold text-[#173b3f]">
                    Last Login
                  </p>

                  <p className="mt-1 text-xs text-slate-400">
                    Today at 08:42 AM
                  </p>
                </div>
              </div>

              <p className="mt-5 text-xs leading-6 text-slate-400">
                Device: Windows Desktop
                <br />
                Location: Coimbatore
              </p>
            </div>
          </section>
        </div>

        {/* RIGHT SIDE */}
        <div className="space-y-5">
          {/* CONTACT CARD */}
          <section className="rounded-[22px] border border-[#e5eeec] bg-white p-5">
            <h2 className="font-semibold text-[#173b3f]">
              Contact Overview
            </h2>

            <p className="mt-1 text-xs text-slate-400">
              Account communication details
            </p>

            <div className="mt-5 space-y-4">
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-[#edf8f6] text-[#149883]">
                  <Mail size={17} />
                </div>

                <div>
                  <p className="text-[11px] text-slate-400">
                    Email
                  </p>

                  <p className="mt-0.5 text-sm font-medium text-[#173b3f]">
                    {form.email}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-blue-50 text-blue-500">
                  <Phone size={17} />
                </div>

                <div>
                  <p className="text-[11px] text-slate-400">
                    Phone
                  </p>

                  <p className="mt-0.5 text-sm font-medium text-[#173b3f]">
                    {form.phone}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-violet-50 text-violet-500">
                  <Building2 size={17} />
                </div>

                <div>
                  <p className="text-[11px] text-slate-400">
                    Hospital
                  </p>

                  <p className="mt-0.5 text-sm font-medium text-[#173b3f]">
                    {form.hospital}
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* PROFILE COMPLETION */}
          <section className="rounded-[22px] border border-[#e5eeec] bg-white p-5">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="font-semibold text-[#173b3f]">
                  Profile Completion
                </h2>

                <p className="mt-1 text-xs text-slate-400">
                  Keep your information updated
                </p>
              </div>

              <span className="text-xl font-semibold text-[#149883]">
                98%
              </span>
            </div>

            <div className="mt-5 h-2.5 overflow-hidden rounded-full bg-slate-100">
              <div className="h-full w-[98%] rounded-full bg-[#149883]" />
            </div>

            <p className="mt-3 text-xs text-slate-400">
              Almost complete. Add a profile photo to reach 100%.
            </p>
          </section>

          {/* ACTIVITY */}
          <section className="rounded-[22px] border border-[#e5eeec] bg-white p-5">
            <div className="mb-5 flex items-center justify-between">
              <div>
                <h2 className="font-semibold text-[#173b3f]">
                  Recent Activity
                </h2>

                <p className="mt-1 text-xs text-slate-400">
                  Your latest hospital actions
                </p>
              </div>

              <Activity size={18} className="text-[#149883]" />
            </div>

            <div className="space-y-4">
              {activity.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="flex gap-3"
                  >
                    <div className="grid h-9 w-9 flex-shrink-0 place-items-center rounded-xl bg-[#edf8f6] text-[#149883]">
                      <Icon size={16} />
                    </div>

                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-medium text-[#173b3f]">
                        {item.title}
                      </p>

                      <p className="mt-1 text-xs leading-5 text-slate-400">
                        {item.text}
                      </p>

                      <p className="mt-1 text-[10px] text-slate-300">
                        {item.time}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Profile;