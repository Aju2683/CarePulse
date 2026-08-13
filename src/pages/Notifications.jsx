import {
  AlertTriangle,
  BedDouble,
  Bell,
  CheckCheck,
  CircleDollarSign,
  Clock3,
  Filter,
  HeartPulse,
  Pill,
  Search,
  ShieldAlert,
  Trash2,
} from "lucide-react";

import { useMemo, useState } from "react";

const initialNotifications = [
  {
    id: 1,
    title: "Critical patient admitted",
    description:
      "Emergency patient ER-1048 requires immediate cardiology assessment.",
    time: "2 minutes ago",
    category: "Emergency",
    severity: "Critical",
    unread: true,
  },
  {
    id: 2,
    title: "Pharmacy stock warning",
    description:
      "Amoxicillin 500mg has dropped below the minimum reorder level.",
    time: "18 minutes ago",
    category: "Pharmacy",
    severity: "Warning",
    unread: true,
  },
  {
    id: 3,
    title: "ICU bed available",
    description:
      "ICU-02 has completed cleaning and is now available for allocation.",
    time: "35 minutes ago",
    category: "Bed",
    severity: "Info",
    unread: false,
  },
  {
    id: 4,
    title: "Insurance claim updated",
    description:
      "Insurance claim linked to INV-5044 has moved to review status.",
    time: "1 hour ago",
    category: "Billing",
    severity: "Info",
    unread: false,
  },
  {
    id: 5,
    title: "Emergency queue increasing",
    description:
      "Emergency waiting queue has reached 11 active patients.",
    time: "1 hour ago",
    category: "Emergency",
    severity: "Warning",
    unread: true,
  },
  {
    id: 6,
    title: "Bed occupancy above threshold",
    description:
      "Overall hospital bed occupancy has crossed 85%.",
    time: "2 hours ago",
    category: "Bed",
    severity: "Warning",
    unread: false,
  },
];

function Notifications() {
  const [notifications, setNotifications] =
    useState(initialNotifications);

  const [filter, setFilter] = useState("All");
  const [category, setCategory] = useState("All");
  const [search, setSearch] = useState("");

  const visibleNotifications = useMemo(() => {
    return notifications.filter((notification) => {
      const matchesRead =
        filter === "All" ||
        (filter === "Unread" && notification.unread) ||
        (filter === "Read" && !notification.unread);

      const matchesCategory =
        category === "All" ||
        notification.category === category;

      const matchesSearch =
        notification.title
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        notification.description
          .toLowerCase()
          .includes(search.toLowerCase());

      return (
        matchesRead &&
        matchesCategory &&
        matchesSearch
      );
    });
  }, [notifications, filter, category, search]);

  function markAllRead() {
    setNotifications((current) =>
      current.map((notification) => ({
        ...notification,
        unread: false,
      })),
    );
  }

  function toggleRead(id) {
    setNotifications((current) =>
      current.map((notification) =>
        notification.id === id
          ? {
              ...notification,
              unread: !notification.unread,
            }
          : notification,
      ),
    );
  }

  function removeNotification(id) {
    setNotifications((current) =>
      current.filter(
        (notification) =>
          notification.id !== id,
      ),
    );
  }

  function getIcon(category) {
    if (category === "Emergency") {
      return HeartPulse;
    }

    if (category === "Pharmacy") {
      return Pill;
    }

    if (category === "Bed") {
      return BedDouble;
    }

    return CircleDollarSign;
  }

  const severityStyles = {
    Critical:
      "border-red-100 bg-red-50 text-red-600",
    Warning:
      "border-amber-100 bg-amber-50 text-amber-600",
    Info:
      "border-blue-100 bg-blue-50 text-blue-600",
  };

  return (
    <div className="mx-auto max-w-[1500px]">
      {/* HEADER */}
      <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-sm font-medium text-[#149883]">
            Hospital Alert Center
          </p>

          <h1 className="mt-1 text-2xl font-semibold tracking-tight text-[#173b3f] sm:text-3xl">
            Notifications
          </h1>

          <p className="mt-2 text-sm text-slate-400">
            Monitor clinical, operational and financial alerts across the hospital.
          </p>
        </div>

        <button
          type="button"
          onClick={markAllRead}
          className="flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-600 transition hover:bg-slate-50"
        >
          <CheckCheck size={17} />
          Mark all as read
        </button>
      </div>

      {/* SUMMARY CARDS */}
      <section className="mb-5 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <article className="rounded-[20px] border border-[#e5eeec] bg-white p-5">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-xs text-slate-400">
                Total Alerts
              </p>

              <p className="mt-2 text-2xl font-semibold text-[#173b3f]">
                {notifications.length}
              </p>

              <p className="mt-2 text-[11px] text-slate-400">
                Across all departments
              </p>
            </div>

            <div className="grid h-11 w-11 place-items-center rounded-xl bg-[#edf8f6] text-[#149883]">
              <Bell size={20} />
            </div>
          </div>
        </article>

        <article className="rounded-[20px] border border-[#e5eeec] bg-white p-5">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-xs text-slate-400">
                Critical Alerts
              </p>

              <p className="mt-2 text-2xl font-semibold text-[#173b3f]">
                {
                  notifications.filter(
                    (item) =>
                      item.severity === "Critical",
                  ).length
                }
              </p>

              <p className="mt-2 text-[11px] text-red-500">
                Immediate attention
              </p>
            </div>

            <div className="grid h-11 w-11 place-items-center rounded-xl bg-red-50 text-red-500">
              <ShieldAlert size={20} />
            </div>
          </div>
        </article>

        <article className="rounded-[20px] border border-[#e5eeec] bg-white p-5">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-xs text-slate-400">
                Unread
              </p>

              <p className="mt-2 text-2xl font-semibold text-[#173b3f]">
                {
                  notifications.filter(
                    (item) => item.unread,
                  ).length
                }
              </p>

              <p className="mt-2 text-[11px] text-amber-600">
                Requires review
              </p>
            </div>

            <div className="grid h-11 w-11 place-items-center rounded-xl bg-amber-50 text-amber-500">
              <AlertTriangle size={20} />
            </div>
          </div>
        </article>

        <article className="rounded-[20px] border border-[#e5eeec] bg-white p-5">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-xs text-slate-400">
                Active Monitoring
              </p>

              <p className="mt-2 text-2xl font-semibold text-[#173b3f]">
                24/7
              </p>

              <p className="mt-2 text-[11px] text-emerald-600">
                System online
              </p>
            </div>

            <div className="grid h-11 w-11 place-items-center rounded-xl bg-emerald-50 text-emerald-500">
              <Clock3 size={20} />
            </div>
          </div>
        </article>
      </section>

      {/* MAIN GRID */}
      <div className="grid gap-5 xl:grid-cols-[1.45fr_0.55fr]">
        {/* LEFT */}
        <section className="rounded-[22px] border border-[#e5eeec] bg-white">
          {/* FILTER BAR */}
          <div className="border-b border-slate-100 p-5">
            <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
              <div className="relative w-full max-w-md">
                <Search
                  size={17}
                  className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
                />

                <input
                  value={search}
                  onChange={(event) =>
                    setSearch(event.target.value)
                  }
                  placeholder="Search alerts..."
                  className="w-full rounded-xl border border-slate-200 py-3 pl-10 pr-4 text-sm text-[#173b3f] focus:border-[#149883] focus:ring-4 focus:ring-[#149883]/10"
                />
              </div>

              <div className="flex flex-wrap items-center gap-2">
                <Filter
                  size={17}
                  className="text-slate-400"
                />

                <select
                  value={category}
                  onChange={(event) =>
                    setCategory(event.target.value)
                  }
                  className="rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-500"
                >
                  <option>All</option>
                  <option>Emergency</option>
                  <option>Pharmacy</option>
                  <option>Bed</option>
                  <option>Billing</option>
                </select>
              </div>
            </div>

            <div className="mt-4 flex gap-2">
              {["All", "Unread", "Read"].map(
                (item) => (
                  <button
                    key={item}
                    type="button"
                    onClick={() =>
                      setFilter(item)
                    }
                    className={`rounded-xl px-4 py-2 text-xs font-medium ${
                      filter === item
                        ? "bg-[#eaf7f4] text-[#149883]"
                        : "bg-slate-50 text-slate-400"
                    }`}
                  >
                    {item}
                  </button>
                ),
              )}
            </div>
          </div>

          {/* ALERT LIST */}
          <div className="divide-y divide-slate-100">
            {visibleNotifications.map(
              (notification) => {
                const Icon = getIcon(
                  notification.category,
                );

                return (
                  <article
                    key={notification.id}
                    className={`p-5 transition hover:bg-[#fbfefd] ${
                      notification.severity ===
                      "Critical"
                        ? "border-l-4 border-l-red-500 bg-red-50/20"
                        : notification.unread
                          ? "bg-[#fbfefd]"
                          : ""
                    }`}
                  >
                    <div className="flex gap-4">
                      <div
                        className={`grid h-12 w-12 flex-shrink-0 place-items-center rounded-2xl ${
                          notification.severity ===
                          "Critical"
                            ? "bg-red-50 text-red-500"
                            : notification.severity ===
                                "Warning"
                              ? "bg-amber-50 text-amber-500"
                              : "bg-[#edf8f6] text-[#149883]"
                        }`}
                      >
                        <Icon size={20} />
                      </div>

                      <div className="min-w-0 flex-1">
                        <div className="flex flex-wrap items-center gap-2">
                          <h3 className="text-sm font-semibold text-[#173b3f]">
                            {notification.title}
                          </h3>

                          {notification.unread && (
                            <span className="h-2 w-2 rounded-full bg-[#149883]" />
                          )}

                          <span
                            className={`rounded-full border px-2.5 py-1 text-[10px] font-medium ${
                              severityStyles[
                                notification.severity
                              ]
                            }`}
                          >
                            {notification.severity}
                          </span>
                        </div>

                        <p className="mt-2 text-sm leading-6 text-slate-500">
                          {notification.description}
                        </p>

                        <div className="mt-3 flex flex-wrap items-center gap-3">
                          <span className="rounded-lg bg-slate-50 px-2.5 py-1 text-[10px] font-medium text-slate-500">
                            {notification.category}
                          </span>

                          <span className="text-[11px] text-slate-400">
                            {notification.time}
                          </span>
                        </div>
                      </div>

                      <div className="flex flex-col gap-2">
                        <button
                          type="button"
                          onClick={() =>
                            toggleRead(
                              notification.id,
                            )
                          }
                          className="grid h-9 w-9 place-items-center rounded-lg bg-slate-50 text-slate-400 hover:text-[#149883]"
                        >
                          <Bell size={15} />
                        </button>

                        <button
                          type="button"
                          onClick={() =>
                            removeNotification(
                              notification.id,
                            )
                          }
                          className="grid h-9 w-9 place-items-center rounded-lg bg-red-50 text-red-500"
                        >
                          <Trash2 size={15} />
                        </button>
                      </div>
                    </div>
                  </article>
                );
              },
            )}
          </div>

          {visibleNotifications.length === 0 && (
            <div className="py-16 text-center">
              <Bell
                size={26}
                className="mx-auto text-slate-300"
              />

              <h3 className="mt-4 font-semibold text-[#173b3f]">
                No alerts found
              </h3>

              <p className="mt-2 text-sm text-slate-400">
                Try changing your search or filters.
              </p>
            </div>
          )}
        </section>

        {/* RIGHT */}
        <div className="space-y-5">
          {/* OPERATIONS STATUS */}
          <section className="rounded-[22px] bg-[#123f3b] p-5 text-white">
            <div className="flex items-center gap-3">
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-white/10">
                <HeartPulse size={20} />
              </div>

              <div>
                <h2 className="font-semibold">
                  Alert Monitoring
                </h2>

                <p className="mt-1 text-xs text-white/50">
                  Hospital alert engine
                </p>
              </div>
            </div>

            <div className="mt-6">
              <div className="flex items-center justify-between">
                <span className="text-xs text-white/60">
                  System Status
                </span>

                <span className="flex items-center gap-2 text-xs text-emerald-300">
                  <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
                  Online
                </span>
              </div>

              <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/10">
                <div className="h-full w-[94%] rounded-full bg-[#48d9c1]" />
              </div>

              <p className="mt-3 text-xs text-white/50">
                94% notification processing health
              </p>
            </div>
          </section>

          {/* CATEGORY BREAKDOWN */}
          <section className="rounded-[22px] border border-[#e5eeec] bg-white p-5">
            <h2 className="font-semibold text-[#173b3f]">
              Alert Categories
            </h2>

            <p className="mt-1 text-xs text-slate-400">
              Active alerts by department
            </p>

            <div className="mt-5 space-y-4">
              {[
                ["Emergency", 4, "bg-red-500"],
                ["Pharmacy", 3, "bg-amber-500"],
                ["Bed Management", 5, "bg-blue-500"],
                ["Billing", 2, "bg-violet-500"],
              ].map(([name, count, color]) => (
                <div key={name}>
                  <div className="mb-2 flex items-center justify-between">
                    <span className="text-xs text-slate-500">
                      {name}
                    </span>

                    <span className="text-xs font-semibold text-[#173b3f]">
                      {count}
                    </span>
                  </div>

                  <div className="h-2 rounded-full bg-slate-100">
                    <div
                      className={`h-full rounded-full ${color}`}
                      style={{
                        width: `${Math.min(
                          count * 16,
                          100,
                        )}%`,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ESCALATION */}
          <section className="rounded-[22px] border border-red-100 bg-red-50/40 p-5">
            <div className="flex items-center gap-3">
              <ShieldAlert
                size={20}
                className="text-red-500"
              />

              <div>
                <h2 className="font-semibold text-[#173b3f]">
                  Priority Escalation
                </h2>

                <p className="mt-1 text-xs text-slate-400">
                  Alerts needing attention
                </p>
              </div>
            </div>

            <div className="mt-5 rounded-xl bg-white p-4">
              <p className="text-xs text-slate-400">
                Critical alerts unresolved
              </p>

              <p className="mt-2 text-2xl font-semibold text-red-500">
                1
              </p>

              <p className="mt-2 text-xs text-slate-400">
                Emergency cardiology assessment pending.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Notifications;