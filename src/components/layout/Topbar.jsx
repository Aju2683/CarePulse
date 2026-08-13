import {
  Bell,
  ChevronDown,
  Menu,
  Search,
} from "lucide-react";

function Topbar({ openSidebar }) {
  const currentDate =
    new Intl.DateTimeFormat("en-IN", {
      weekday: "long",
      day: "numeric",
      month: "long",
    }).format(new Date());

  return (
    <header className="sticky top-0 z-30 flex h-[82px] items-center justify-between border-b border-[#e4ecea] bg-[#f7faf9]/95 px-4 backdrop-blur sm:px-6 lg:px-8">
      {/* LEFT SIDE */}
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={openSidebar}
          className="grid h-10 w-10 place-items-center rounded-xl border border-slate-200 bg-white text-slate-500 lg:hidden"
          aria-label="Open sidebar"
        >
          <Menu size={20} />
        </button>

        <div className="hidden md:block">
          <p className="text-xs text-slate-400">
            {currentDate}
          </p>

          <h2 className="mt-0.5 text-sm font-semibold text-[#173b3f]">
            Hospital Operations Center
          </h2>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="flex items-center gap-3">
        {/* SEARCH */}
        <div className="relative hidden xl:block">
          <Search
            size={17}
            className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
          />

          <input
            type="text"
            placeholder="Search patient, doctor, MRN..."
            className="w-[290px] rounded-xl border border-slate-200 bg-white py-2.5 pl-10 pr-4 text-sm text-[#173b3f] outline-none transition focus:border-[#149883] focus:ring-4 focus:ring-[#149883]/10"
          />
        </div>

        {/* NOTIFICATION */}
        <button
          type="button"
          className="relative grid h-10 w-10 place-items-center rounded-xl border border-slate-200 bg-white text-slate-500 transition hover:bg-slate-50"
          aria-label="Notifications"
        >
          <Bell size={18} />

          <span className="absolute right-2 top-2 h-2 w-2 rounded-full border-2 border-white bg-red-500" />
        </button>

        {/* PROFILE */}
        <button
          type="button"
          className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-2 py-1.5 transition hover:bg-slate-50 sm:px-3"
        >
          <div className="grid h-8 w-8 place-items-center rounded-lg bg-[#dff6f1] text-xs font-semibold text-[#128677]">
            AR
          </div>

          <div className="hidden text-left sm:block">
            <p className="text-xs font-semibold text-[#173b3f]">
              Aravind
            </p>

            <p className="text-[10px] text-slate-400">
              Administrator
            </p>
          </div>

          <ChevronDown
            size={15}
            className="hidden text-slate-400 sm:block"
          />
        </button>
      </div>
    </header>
  );
}

export default Topbar;