import {
  Activity,
  BedDouble,
  Bell,
  CalendarDays,
  CreditCard,
  LayoutDashboard,
  LogOut,
  Pill,
  Settings as SettingsIcon,
  Stethoscope,
  UserRound,
  Users,
  X,
} from "lucide-react";

import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

import { useAuth } from "../../context/AuthContext.jsx";

function Sidebar({ sidebarOpen, closeSidebar }) {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const [showLogoutModal, setShowLogoutModal] =
    useState(false);

  const menuItems = [
    {
      name: "Command Center",
      path: "/dashboard",
      icon: LayoutDashboard,
    },
    {
      name: "Patients",
      path: "/patients",
      icon: Users,
    },
    {
      name: "Doctors",
      path: "/doctors",
      icon: Stethoscope,
    },
    {
      name: "Appointments",
      path: "/appointments",
      icon: CalendarDays,
    },
    {
      name: "Bed Management",
      path: "/beds",
      icon: BedDouble,
    },
    {
      name: "Pharmacy",
      path: "/pharmacy",
      icon: Pill,
    },
    {
      name: "Billing",
      path: "/billing",
      icon: CreditCard,
    },
    {
      name: "Notifications",
      path: "/notifications",
      icon: Bell,
    },
    {
      name: "Settings",
      path: "/settings",
      icon: SettingsIcon,
    },
  ];

  function handleLogout() {
    logout();
    setShowLogoutModal(false);
    closeSidebar?.();
    navigate("/login");
  }

  function openLogoutModal() {
    setShowLogoutModal(true);
  }

  function closeLogoutModal() {
    setShowLogoutModal(false);
  }

  return (
    <>
      {/* MOBILE OVERLAY */}
      {sidebarOpen && (
        <button
          type="button"
          onClick={closeSidebar}
          className="fixed inset-0 z-40 bg-black/30 lg:hidden"
          aria-label="Close sidebar"
        />
      )}

      {/* SIDEBAR */}
      <aside
        className={`fixed left-0 top-0 z-50 flex h-screen w-[270px] flex-col border-r border-[#e5eeec] bg-white transition-transform duration-300 ${
          sidebarOpen
            ? "translate-x-0"
            : "-translate-x-full lg:translate-x-0"
        }`}
      >
        {/* LOGO */}
        <div className="flex h-[82px] items-center justify-between border-b border-[#e5eeec] px-5">
          <div className="flex items-center gap-3">
            <div className="grid h-11 w-11 place-items-center rounded-2xl bg-[#149883] text-white">
              <Activity size={24} />
            </div>

            <div>
              <h1 className="text-base font-semibold text-[#173b3f]">
                CarePulse
              </h1>

              <p className="text-[10px] uppercase tracking-[0.18em] text-slate-400">
                Hospital OS
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={closeSidebar}
            className="grid h-9 w-9 place-items-center rounded-xl text-slate-400 transition hover:bg-slate-100 lg:hidden"
          >
            <X size={18} />
          </button>
        </div>

        {/* NAVIGATION */}
        <div className="flex-1 overflow-y-auto px-4 py-5">
          <p className="mb-3 px-3 text-[10px] font-medium uppercase tracking-[0.18em] text-slate-400">
            Operations
          </p>

          <nav className="space-y-1">
            {menuItems.map((item) => {
              const Icon = item.icon;

              return (
                <NavLink
                  key={item.name}
                  to={item.path}
                  onClick={() => closeSidebar?.()}
                  className={({ isActive }) =>
                    `flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium transition ${
                      isActive
                        ? "bg-[#e8f6f3] text-[#149883]"
                        : "text-slate-600 hover:bg-slate-50 hover:text-[#173b3f]"
                    }`
                  }
                >
                  <Icon size={19} />

                  <span>{item.name}</span>
                </NavLink>
              );
            })}
          </nav>

          {/* LIVE OPERATIONS CARD */}
          <div className="mt-6 rounded-[20px] bg-[#123f3b] p-4 text-white">
            <div className="flex items-center gap-2">
              <Activity size={17} />

              <p className="text-xs font-semibold">
                Live Operations
              </p>
            </div>

            <p className="mt-4 text-2xl font-semibold">
              98.7%
            </p>

            <p className="mt-1 text-[11px] text-white/60">
              Hospital service availability
            </p>

            <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/10">
              <div className="h-full w-[98%] rounded-full bg-[#47d7bf]" />
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="border-t border-[#e5eeec] p-4">
          <NavLink
            to="/profile"
            onClick={() => closeSidebar?.()}
            className={({ isActive }) =>
              `flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium transition ${
                isActive
                  ? "bg-[#e8f6f3] text-[#149883]"
                  : "text-slate-600 hover:bg-slate-50"
              }`
            }
          >
            <UserRound size={18} />

            <span>My Profile</span>
          </NavLink>

          <button
            type="button"
            onClick={openLogoutModal}
            className="mt-1 flex w-full items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium text-red-500 transition hover:bg-red-50"
          >
            <LogOut size={18} />

            <span>Sign Out</span>
          </button>
        </div>
      </aside>

      {/* LOGOUT CONFIRMATION MODAL */}
      {showLogoutModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40 px-4 backdrop-blur-sm">
          <div className="w-full max-w-[420px] rounded-[24px] border border-slate-200 bg-white p-6 shadow-2xl">
            <div className="flex items-start justify-between">
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-red-50 text-red-500">
                <LogOut size={22} />
              </div>

              <button
                type="button"
                onClick={closeLogoutModal}
                className="grid h-9 w-9 place-items-center rounded-xl text-slate-400 transition hover:bg-slate-100"
              >
                <X size={18} />
              </button>
            </div>

            <div className="mt-5">
              <h2 className="text-xl font-semibold text-[#173b3f]">
                Sign out of CarePulse?
              </h2>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                Are you sure you want to sign out of your
                Hospital Operations account?
              </p>
            </div>

            <div className="mt-6 flex justify-end gap-3">
              <button
                type="button"
                onClick={closeLogoutModal}
                className="rounded-xl border border-slate-200 bg-white px-5 py-2.5 text-sm font-medium text-slate-600 transition hover:bg-slate-50"
              >
                Cancel
              </button>

              <button
                type="button"
                onClick={handleLogout}
                className="flex items-center gap-2 rounded-xl bg-red-500 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-red-600"
              >
                <LogOut size={16} />
                Sign Out
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Sidebar;