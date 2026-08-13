import {
  Activity,
  Bell,
  BedDouble,
  CalendarDays,
  CreditCard,
  HeartPulse,
  LayoutDashboard,
  LogOut,
  Pill,
  Settings as SettingsIcon,
  Stethoscope,
  UserRound,
  Users,
  X,
} from "lucide-react";

import {
  NavLink,
  useNavigate,
} from "react-router-dom";

import { useAuth } from "../../context/AuthContext.jsx";

const menu = [
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

function Sidebar({
  sidebarOpen,
  closeSidebar,
}) {
  const navigate = useNavigate();

  const { logout } = useAuth();

  function handleLogout() {
    logout();
    navigate("/login");
  }

  return (
    <>
      {sidebarOpen && (
        <button
          type="button"
          aria-label="Close sidebar overlay"
          onClick={closeSidebar}
          className="fixed inset-0 z-40 bg-black/30 lg:hidden"
        />
      )}

      <aside
        className={`fixed left-0 top-0 z-50 flex h-screen w-[270px] flex-col border-r border-[#e3edeb] bg-white transition-transform duration-300 lg:translate-x-0 ${
          sidebarOpen
            ? "translate-x-0"
            : "-translate-x-full"
        }`}
      >
        <div className="flex h-[82px] items-center justify-between border-b border-[#edf2f1] px-6">
          <div className="flex items-center gap-3">
            <div className="grid h-11 w-11 place-items-center rounded-2xl bg-[#149883] text-white">
              <HeartPulse size={24} />
            </div>

            <div>
              <h1 className="font-semibold text-[#173b3f]">
                CarePulse
              </h1>

              <p className="text-[10px] uppercase tracking-[0.14em] text-slate-400">
                Hospital OS
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={closeSidebar}
            className="text-slate-400 lg:hidden"
          >
            <X size={21} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-4 py-6">
          <p className="mb-3 px-3 text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-400">
            Operations
          </p>

          <nav className="space-y-1.5">
            {menu.map((item) => {
              const Icon = item.icon;

              return (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={closeSidebar}
                  className={({ isActive }) =>
                    `flex items-center gap-3 rounded-xl px-3.5 py-3 text-sm font-medium transition ${
                      isActive
                        ? "bg-[#eaf7f4] text-[#107f70]"
                        : "text-slate-500 hover:bg-slate-50 hover:text-[#173b3f]"
                    }`
                  }
                >
                  <Icon size={19} />

                  {item.name}
                </NavLink>
              );
            })}
          </nav>

          <div className="mt-7 rounded-2xl bg-[#123f3b] p-4 text-white">
            <div className="flex items-center gap-2">
              <Activity size={17} />

              <p className="text-xs font-medium">
                Live Operations
              </p>
            </div>

            <p className="mt-3 text-2xl font-semibold">
              98.7%
            </p>

            <p className="mt-1 text-xs text-white/55">
              Hospital service availability
            </p>

            <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-white/10">
              <div className="h-full w-[88%] rounded-full bg-[#38d6bb]" />
            </div>
          </div>
        </div>

        <div className="border-t border-[#edf2f1] p-4">
          <NavLink
            to="/profile"
            className="mb-2 flex items-center gap-3 rounded-xl px-3 py-3 text-sm text-slate-500 hover:bg-slate-50"
          >
            <UserRound size={18} />

            My Profile
          </NavLink>

          <button
            type="button"
            onClick={handleLogout}
            className="flex w-full items-center gap-3 rounded-xl px-3 py-3 text-sm text-red-500 transition hover:bg-red-50"
          >
            <LogOut size={18} />

            Sign Out
          </button>
        </div>
      </aside>
    </>
  );
}

export default Sidebar;