import {
  ArrowUpRight,
  Banknote,
  CircleDollarSign,
  CreditCard,
  FileText,
  MoreHorizontal,
  ReceiptText,
  Search,
  ShieldCheck,
  WalletCards,
} from "lucide-react";

import { useMemo, useState } from "react";

import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const invoices = [
  {
    invoice: "INV-5041",
    patient: "Rahul Menon",
    department: "Cardiology",
    amount: "₹18,450",
    payment: "Insurance",
    status: "Paid",
    date: "12 Aug 2026",
  },
  {
    invoice: "INV-5042",
    patient: "Anjali Rao",
    department: "General Medicine",
    amount: "₹4,850",
    payment: "UPI",
    status: "Paid",
    date: "12 Aug 2026",
  },
  {
    invoice: "INV-5043",
    patient: "Karthik S",
    department: "Orthopedics",
    amount: "₹12,200",
    payment: "Cash",
    status: "Pending",
    date: "12 Aug 2026",
  },
  {
    invoice: "INV-5044",
    patient: "Divya R",
    department: "Maternity",
    amount: "₹32,600",
    payment: "Insurance",
    status: "Claim Review",
    date: "11 Aug 2026",
  },
  {
    invoice: "INV-5045",
    patient: "Maya Krishnan",
    department: "Neurology",
    amount: "₹24,900",
    payment: "Card",
    status: "Paid",
    date: "11 Aug 2026",
  },
];

const revenueData = [
  { day: "Mon", collection: 1.8, pending: 0.4 },
  { day: "Tue", collection: 2.2, pending: 0.6 },
  { day: "Wed", collection: 1.9, pending: 0.5 },
  { day: "Thu", collection: 2.7, pending: 0.7 },
  { day: "Fri", collection: 2.4, pending: 0.8 },
  { day: "Sat", collection: 3.1, pending: 0.5 },
  { day: "Sun", collection: 2.84, pending: 0.68 },
];

const paymentData = [
  { name: "Insurance", value: 42, color: "#149883" },
  { name: "UPI", value: 26, color: "#6366f1" },
  { name: "Card", value: 18, color: "#3b82f6" },
  { name: "Cash", value: 14, color: "#f59e0b" },
];

const recentTransactions = [
  {
    patient: "Rahul Menon",
    method: "Insurance",
    amount: "₹18,450",
    time: "10:42 AM",
  },
  {
    patient: "Anjali Rao",
    method: "UPI",
    amount: "₹4,850",
    time: "10:18 AM",
  },
  {
    patient: "Maya Krishnan",
    method: "Card",
    amount: "₹24,900",
    time: "09:55 AM",
  },
];

function Billing() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  const filteredInvoices = useMemo(() => {
    return invoices.filter((invoice) => {
      const matchesSearch =
        invoice.patient
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        invoice.invoice
          .toLowerCase()
          .includes(search.toLowerCase());

      const matchesFilter =
        filter === "All" ||
        invoice.status === filter;

      return matchesSearch && matchesFilter;
    });
  }, [search, filter]);

  const statusClass = {
    Paid: "bg-emerald-50 text-emerald-600",
    Pending: "bg-amber-50 text-amber-600",
    "Claim Review":
      "bg-violet-50 text-violet-600",
  };

  return (
    <div className="mx-auto max-w-[1600px]">
      {/* HEADER */}
      <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-sm font-medium text-[#149883]">
            Financial Operations
          </p>

          <h1 className="mt-1 text-2xl font-semibold tracking-tight text-[#173b3f] sm:text-3xl">
            Revenue & Billing Center
          </h1>

          <p className="mt-2 text-sm text-slate-400">
            Track hospital collections, invoices,
            insurance claims and payment activity.
          </p>
        </div>

        <button
          type="button"
          className="flex items-center justify-center gap-2 rounded-xl bg-[#149883] px-5 py-3 text-sm font-medium text-white transition hover:bg-[#107b6d]"
        >
          <ReceiptText size={17} />
          Create Invoice
        </button>
      </div>

      {/* SUMMARY */}
      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <article className="rounded-[20px] border border-[#e5eeec] bg-white p-5">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-xs text-slate-400">
                Today's Collection
              </p>

              <p className="mt-2 text-2xl font-semibold text-[#173b3f]">
                ₹2.84L
              </p>

              <p className="mt-2 flex items-center gap-1 text-[11px] text-emerald-600">
                <ArrowUpRight size={13} />
                12.8% from yesterday
              </p>
            </div>

            <div className="grid h-11 w-11 place-items-center rounded-xl bg-[#edf8f6] text-[#149883]">
              <CircleDollarSign size={20} />
            </div>
          </div>
        </article>

        <article className="rounded-[20px] border border-[#e5eeec] bg-white p-5">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-xs text-slate-400">
                Pending Bills
              </p>

              <p className="mt-2 text-2xl font-semibold text-[#173b3f]">
                ₹68K
              </p>

              <p className="mt-2 text-[11px] text-amber-600">
                14 invoices pending
              </p>
            </div>

            <div className="grid h-11 w-11 place-items-center rounded-xl bg-amber-50 text-amber-500">
              <FileText size={20} />
            </div>
          </div>
        </article>

        <article className="rounded-[20px] border border-[#e5eeec] bg-white p-5">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-xs text-slate-400">
                Insurance Claims
              </p>

              <p className="mt-2 text-2xl font-semibold text-[#173b3f]">
                24
              </p>

              <p className="mt-2 text-[11px] text-violet-600">
                ₹3.6L under review
              </p>
            </div>

            <div className="grid h-11 w-11 place-items-center rounded-xl bg-violet-50 text-violet-500">
              <ShieldCheck size={20} />
            </div>
          </div>
        </article>

        <article className="rounded-[20px] border border-[#e5eeec] bg-white p-5">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-xs text-slate-400">
                Payments Today
              </p>

              <p className="mt-2 text-2xl font-semibold text-[#173b3f]">
                132
              </p>

              <p className="mt-2 text-[11px] text-slate-400">
                Across 4 payment modes
              </p>
            </div>

            <div className="grid h-11 w-11 place-items-center rounded-xl bg-blue-50 text-blue-500">
              <CreditCard size={20} />
            </div>
          </div>
        </article>
      </section>

      {/* CHARTS */}
      <section className="mt-5 grid gap-5 xl:grid-cols-[1.4fr_0.8fr]">
        <article className="rounded-[22px] border border-[#e5eeec] bg-white p-5">
          <div className="mb-5">
            <h2 className="font-semibold text-[#173b3f]">
              Weekly Revenue Overview
            </h2>

            <p className="mt-1 text-xs text-slate-400">
              Collection vs pending billing amount
            </p>
          </div>

          <div className="h-[280px]">
            <ResponsiveContainer
              width="100%"
              height="100%"
            >
              <BarChart data={revenueData}>
                <CartesianGrid
                  strokeDasharray="3 3"
                  vertical={false}
                  stroke="#edf2f1"
                />

                <XAxis
                  dataKey="day"
                  axisLine={false}
                  tickLine={false}
                  tick={{
                    fontSize: 11,
                    fill: "#94a3b8",
                  }}
                />

                <YAxis
                  axisLine={false}
                  tickLine={false}
                  tick={{
                    fontSize: 11,
                    fill: "#94a3b8",
                  }}
                />

                <Tooltip />

                <Bar
                  dataKey="collection"
                  fill="#149883"
                  radius={[7, 7, 0, 0]}
                />

                <Bar
                  dataKey="pending"
                  fill="#fbbf24"
                  radius={[7, 7, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </article>

        <article className="rounded-[22px] border border-[#e5eeec] bg-white p-5">
          <div>
            <h2 className="font-semibold text-[#173b3f]">
              Payment Methods
            </h2>

            <p className="mt-1 text-xs text-slate-400">
              Today's payment distribution
            </p>
          </div>

          <div className="relative h-[210px]">
            <ResponsiveContainer
              width="100%"
              height="100%"
            >
              <PieChart>
                <Pie
                  data={paymentData}
                  dataKey="value"
                  innerRadius={55}
                  outerRadius={78}
                  paddingAngle={4}
                  stroke="none"
                >
                  {paymentData.map((item) => (
                    <Cell
                      key={item.name}
                      fill={item.color}
                    />
                  ))}
                </Pie>

                <Tooltip />
              </PieChart>
            </ResponsiveContainer>

            <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <p className="text-2xl font-semibold text-[#173b3f]">
                  132
                </p>

                <p className="text-[10px] text-slate-400">
                  Payments
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2">
            {paymentData.map((item) => (
              <div
                key={item.name}
                className="flex items-center justify-between rounded-lg bg-slate-50 px-3 py-2"
              >
                <div className="flex items-center gap-2">
                  <span
                    className="h-2.5 w-2.5 rounded-full"
                    style={{
                      backgroundColor: item.color,
                    }}
                  />

                  <span className="text-[11px] text-slate-500">
                    {item.name}
                  </span>
                </div>

                <span className="text-[11px] font-semibold text-[#173b3f]">
                  {item.value}%
                </span>
              </div>
            ))}
          </div>
        </article>
      </section>

      {/* CLAIM + TRANSACTIONS */}
      <section className="mt-5 grid gap-5 xl:grid-cols-[0.9fr_1.1fr]">
        <article className="rounded-[22px] border border-[#e5eeec] bg-white p-5">
          <div className="flex items-center gap-3">
            <div className="grid h-11 w-11 place-items-center rounded-xl bg-violet-50 text-violet-500">
              <WalletCards size={20} />
            </div>

            <div>
              <h2 className="font-semibold text-[#173b3f]">
                Insurance Claim Pipeline
              </h2>

              <p className="mt-1 text-xs text-slate-400">
                Current claim processing status
              </p>
            </div>
          </div>

          <div className="mt-6 space-y-5">
            <div>
              <div className="mb-2 flex justify-between text-xs">
                <span className="text-slate-500">
                  Approved
                </span>

                <span className="font-medium text-[#173b3f]">
                  12 claims
                </span>
              </div>

              <div className="h-2 rounded-full bg-slate-100">
                <div className="h-full w-[70%] rounded-full bg-emerald-500" />
              </div>
            </div>

            <div>
              <div className="mb-2 flex justify-between text-xs">
                <span className="text-slate-500">
                  Under Review
                </span>

                <span className="font-medium text-[#173b3f]">
                  8 claims
                </span>
              </div>

              <div className="h-2 rounded-full bg-slate-100">
                <div className="h-full w-[48%] rounded-full bg-violet-500" />
              </div>
            </div>

            <div>
              <div className="mb-2 flex justify-between text-xs">
                <span className="text-slate-500">
                  Documents Required
                </span>

                <span className="font-medium text-[#173b3f]">
                  4 claims
                </span>
              </div>

              <div className="h-2 rounded-full bg-slate-100">
                <div className="h-full w-[28%] rounded-full bg-amber-500" />
              </div>
            </div>
          </div>

          <div className="mt-6 rounded-xl bg-violet-50 p-4">
            <p className="text-xs text-violet-500">
              Claim Value Under Review
            </p>

            <p className="mt-2 text-xl font-semibold text-[#173b3f]">
              ₹3,60,000
            </p>
          </div>
        </article>

        <article className="rounded-[22px] border border-[#e5eeec] bg-white p-5">
          <div className="mb-5 flex items-center justify-between">
            <div>
              <h2 className="font-semibold text-[#173b3f]">
                Recent Transactions
              </h2>

              <p className="mt-1 text-xs text-slate-400">
                Latest successful hospital payments
              </p>
            </div>

            <Banknote
              size={19}
              className="text-[#149883]"
            />
          </div>

          <div className="space-y-3">
            {recentTransactions.map((item) => (
              <div
                key={`${item.patient}-${item.time}`}
                className="flex items-center gap-4 rounded-xl border border-slate-100 p-4"
              >
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-[#edf8f6] text-[#149883]">
                  <CreditCard size={17} />
                </div>

                <div className="min-w-0 flex-1">
                  <p className="text-sm font-semibold text-[#173b3f]">
                    {item.patient}
                  </p>

                  <p className="mt-1 text-xs text-slate-400">
                    {item.method} · {item.time}
                  </p>
                </div>

                <p className="text-sm font-semibold text-emerald-600">
                  {item.amount}
                </p>
              </div>
            ))}
          </div>
        </article>
      </section>

      {/* INVOICE TABLE */}
      <section className="mt-5 rounded-[22px] border border-[#e5eeec] bg-white">
        <div className="flex flex-col gap-4 border-b border-slate-100 p-5 xl:flex-row xl:items-center xl:justify-between">
          <div>
            <h2 className="font-semibold text-[#173b3f]">
              Invoice Management
            </h2>

            <p className="mt-1 text-xs text-slate-400">
              Search and review patient invoices
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <div className="relative w-full sm:w-[300px]">
              <Search
                size={17}
                className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
              />

              <input
                value={search}
                onChange={(event) =>
                  setSearch(event.target.value)
                }
                placeholder="Search invoice or patient..."
                className="w-full rounded-xl border border-slate-200 py-2.5 pl-10 pr-4 text-sm"
              />
            </div>

            <select
              value={filter}
              onChange={(event) =>
                setFilter(event.target.value)
              }
              className="rounded-xl border border-slate-200 px-4 py-2.5 text-sm text-slate-500"
            >
              <option>All</option>
              <option>Paid</option>
              <option>Pending</option>
              <option>Claim Review</option>
            </select>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[1000px] text-left">
            <thead>
              <tr className="border-b border-slate-100 text-xs text-slate-400">
                <th className="px-5 py-4 font-medium">
                  Invoice
                </th>
                <th className="px-5 py-4 font-medium">
                  Patient
                </th>
                <th className="px-5 py-4 font-medium">
                  Department
                </th>
                <th className="px-5 py-4 font-medium">
                  Date
                </th>
                <th className="px-5 py-4 font-medium">
                  Amount
                </th>
                <th className="px-5 py-4 font-medium">
                  Payment
                </th>
                <th className="px-5 py-4 font-medium">
                  Status
                </th>
                <th className="px-5 py-4 font-medium">
                  Action
                </th>
              </tr>
            </thead>

            <tbody>
              {filteredInvoices.map((invoice) => (
                <tr
                  key={invoice.invoice}
                  className="border-b border-slate-50 text-sm transition hover:bg-[#fbfefd]"
                >
                  <td className="px-5 py-4 font-medium text-[#149883]">
                    {invoice.invoice}
                  </td>

                  <td className="px-5 py-4 font-semibold text-[#173b3f]">
                    {invoice.patient}
                  </td>

                  <td className="px-5 py-4 text-slate-500">
                    {invoice.department}
                  </td>

                  <td className="px-5 py-4 text-slate-500">
                    {invoice.date}
                  </td>

                  <td className="px-5 py-4 font-semibold text-[#173b3f]">
                    {invoice.amount}
                  </td>

                  <td className="px-5 py-4 text-slate-500">
                    {invoice.payment}
                  </td>

                  <td className="px-5 py-4">
                    <span
                      className={`rounded-full px-3 py-1 text-xs font-medium ${
                        statusClass[
                          invoice.status
                        ]
                      }`}
                    >
                      {invoice.status}
                    </span>
                  </td>

                  <td className="px-5 py-4">
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        className="rounded-lg bg-[#edf8f6] px-3 py-2 text-xs font-medium text-[#149883]"
                      >
                        View
                      </button>

                      <button
                        type="button"
                        className="grid h-8 w-8 place-items-center rounded-lg bg-slate-50 text-slate-400"
                      >
                        <MoreHorizontal size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex flex-col gap-3 border-t border-slate-100 px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-slate-400">
            Showing {filteredInvoices.length} invoice records
          </p>

          <div className="flex gap-2">
            <button className="rounded-lg border border-slate-200 px-3 py-2 text-xs text-slate-400">
              Previous
            </button>

            <button className="rounded-lg bg-[#149883] px-3 py-2 text-xs text-white">
              1
            </button>

            <button className="rounded-lg border border-slate-200 px-3 py-2 text-xs text-slate-500">
              2
            </button>

            <button className="rounded-lg border border-slate-200 px-3 py-2 text-xs text-slate-500">
              Next
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Billing;