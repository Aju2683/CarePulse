import {
  Activity,
  CalendarDays,
  ChevronDown,
  Filter,
  MoreHorizontal,
  Plus,
  Search,
  ShieldAlert,
  UserCheck,
  Users,
} from "lucide-react";

import { useMemo, useState } from "react";
import { Link } from "react-router-dom";

const patientData = [
  {
    id: "P-1001",
    name: "Rahul Menon",
    age: 45,
    gender: "Male",
    department: "Cardiology",
    type: "Inpatient",
    lastVisit: "12 Aug 2026",
    status: "Admitted",
    priority: "High",
  },
  {
    id: "P-1002",
    name: "Anjali Rao",
    age: 32,
    gender: "Female",
    department: "General Medicine",
    type: "OPD",
    lastVisit: "12 Aug 2026",
    status: "OPD",
    priority: "Normal",
  },
  {
    id: "P-1003",
    name: "Karthik S",
    age: 28,
    gender: "Male",
    department: "Orthopedics",
    type: "Follow-up",
    lastVisit: "11 Aug 2026",
    status: "Discharged",
    priority: "Normal",
  },
  {
    id: "P-1004",
    name: "Maya Krishnan",
    age: 61,
    gender: "Female",
    department: "Neurology",
    type: "Inpatient",
    lastVisit: "12 Aug 2026",
    status: "Admitted",
    priority: "Critical",
  },
  {
    id: "P-1005",
    name: "Vignesh Kumar",
    age: 39,
    gender: "Male",
    department: "Dermatology",
    type: "OPD",
    lastVisit: "10 Aug 2026",
    status: "OPD",
    priority: "Normal",
  },
  {
    id: "P-1006",
    name: "Divya R",
    age: 30,
    gender: "Female",
    department: "Maternity",
    type: "Inpatient",
    lastVisit: "12 Aug 2026",
    status: "Admitted",
    priority: "Medium",
  },
];

function Patients() {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [departmentFilter, setDepartmentFilter] = useState("All");
  const [sortBy, setSortBy] = useState("Name");

  const filteredPatients = useMemo(() => {
    let result = patientData.filter((patient) => {
      const matchesSearch =
        patient.name.toLowerCase().includes(search.toLowerCase()) ||
        patient.id.toLowerCase().includes(search.toLowerCase()) ||
        patient.department.toLowerCase().includes(search.toLowerCase());

      const matchesStatus =
        statusFilter === "All" || patient.status === statusFilter;

      const matchesDepartment =
        departmentFilter === "All" ||
        patient.department === departmentFilter;

      return matchesSearch && matchesStatus && matchesDepartment;
    });

    if (sortBy === "Name") {
      result = [...result].sort((a, b) =>
        a.name.localeCompare(b.name)
      );
    }

    if (sortBy === "Age") {
      result = [...result].sort((a, b) => b.age - a.age);
    }

    if (sortBy === "Patient ID") {
      result = [...result].sort((a, b) =>
        a.id.localeCompare(b.id)
      );
    }

    return result;
  }, [search, statusFilter, departmentFilter, sortBy]);

  const statusStyles = {
    Admitted:
      "border-blue-100 bg-blue-50 text-blue-600",
    OPD:
      "border-emerald-100 bg-emerald-50 text-emerald-600",
    Discharged:
      "border-slate-200 bg-slate-100 text-slate-500",
  };

  const priorityStyles = {
    Critical:
      "bg-red-50 text-red-600",
    High:
      "bg-orange-50 text-orange-600",
    Medium:
      "bg-amber-50 text-amber-600",
    Normal:
      "bg-emerald-50 text-emerald-600",
  };

  return (
    <div className="mx-auto max-w-[1600px]">
      {/* HEADER */}
      <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-sm font-medium text-[#149883]">
            Patient Operations
          </p>

          <h1 className="mt-1 text-2xl font-semibold tracking-tight text-[#173b3f] sm:text-3xl">
            Patient Management
          </h1>

          <p className="mt-2 text-sm text-slate-400">
            Monitor admissions, outpatient visits and patient status.
          </p>
        </div>

        <Link
          to="/patients/add"
          className="flex items-center justify-center gap-2 rounded-xl bg-[#149883] px-5 py-3 text-sm font-medium text-white transition hover:bg-[#107b6d]"
        >
          <Plus size={17} />
          Add Patient
        </Link>
      </div>

      {/* SUMMARY CARDS */}
      <section className="mb-5 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <article className="rounded-[20px] border border-[#e5eeec] bg-white p-5">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs text-slate-400">
                Total Patients
              </p>

              <p className="mt-2 text-2xl font-semibold text-[#173b3f]">
                1,248
              </p>

              <p className="mt-2 text-[11px] text-emerald-600">
                +8.4% this month
              </p>
            </div>

            <div className="grid h-11 w-11 place-items-center rounded-xl bg-[#edf8f6] text-[#149883]">
              <Users size={20} />
            </div>
          </div>
        </article>

        <article className="rounded-[20px] border border-[#e5eeec] bg-white p-5">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs text-slate-400">
                Currently Admitted
              </p>

              <p className="mt-2 text-2xl font-semibold text-[#173b3f]">
                164
              </p>

              <p className="mt-2 text-[11px] text-slate-400">
                Across 8 wards
              </p>
            </div>

            <div className="grid h-11 w-11 place-items-center rounded-xl bg-blue-50 text-blue-500">
              <UserCheck size={20} />
            </div>
          </div>
        </article>

        <article className="rounded-[20px] border border-[#e5eeec] bg-white p-5">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs text-slate-400">
                OPD Today
              </p>

              <p className="mt-2 text-2xl font-semibold text-[#173b3f]">
                248
              </p>

              <p className="mt-2 text-[11px] text-slate-400">
                17 currently waiting
              </p>
            </div>

            <div className="grid h-11 w-11 place-items-center rounded-xl bg-violet-50 text-violet-500">
              <CalendarDays size={20} />
            </div>
          </div>
        </article>

        <article className="rounded-[20px] border border-[#e5eeec] bg-white p-5">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs text-slate-400">
                High Priority
              </p>

              <p className="mt-2 text-2xl font-semibold text-[#173b3f]">
                12
              </p>

              <p className="mt-2 text-[11px] text-red-500">
                3 critical cases
              </p>
            </div>

            <div className="grid h-11 w-11 place-items-center rounded-xl bg-red-50 text-red-500">
              <ShieldAlert size={20} />
            </div>
          </div>
        </article>
      </section>

      {/* MAIN TABLE */}
      <section className="rounded-[22px] border border-[#e5eeec] bg-white">
        {/* TOOLBAR */}
        <div className="flex flex-col gap-4 border-b border-slate-100 p-5 xl:flex-row xl:items-center xl:justify-between">
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
              placeholder="Search patient, ID or department..."
              className="w-full rounded-xl border border-slate-200 py-3 pl-10 pr-4 text-sm text-[#173b3f] transition focus:border-[#149883] focus:ring-4 focus:ring-[#149883]/10"
            />
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <Filter size={17} className="text-slate-400" />

            <select
              value={statusFilter}
              onChange={(event) =>
                setStatusFilter(event.target.value)
              }
              className="rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-500"
            >
              <option>All</option>
              <option>Admitted</option>
              <option>OPD</option>
              <option>Discharged</option>
            </select>

            <select
              value={departmentFilter}
              onChange={(event) =>
                setDepartmentFilter(event.target.value)
              }
              className="rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-500"
            >
              <option>All</option>
              <option>Cardiology</option>
              <option>General Medicine</option>
              <option>Orthopedics</option>
              <option>Neurology</option>
              <option>Dermatology</option>
              <option>Maternity</option>
            </select>

            <div className="relative">
              <select
                value={sortBy}
                onChange={(event) =>
                  setSortBy(event.target.value)
                }
                className="appearance-none rounded-xl border border-slate-200 bg-white py-2.5 pl-4 pr-9 text-sm text-slate-500"
              >
                <option>Name</option>
                <option>Age</option>
                <option>Patient ID</option>
              </select>

              <ChevronDown
                size={15}
                className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-400"
              />
            </div>
          </div>
        </div>

        {/* QUICK STATUS TABS */}
        <div className="flex gap-2 overflow-x-auto border-b border-slate-100 px-5 py-4">
          {[
            ["All", "1,248"],
            ["Admitted", "164"],
            ["OPD", "248"],
            ["Discharged", "836"],
          ].map(([label, count]) => (
            <button
              key={label}
              type="button"
              onClick={() => setStatusFilter(label)}
              className={`flex items-center gap-2 whitespace-nowrap rounded-xl px-4 py-2 text-xs font-medium transition ${
                statusFilter === label
                  ? "bg-[#eaf7f4] text-[#149883]"
                  : "bg-slate-50 text-slate-400"
              }`}
            >
              {label}

              <span
                className={`rounded-md px-1.5 py-0.5 text-[10px] ${
                  statusFilter === label
                    ? "bg-white text-[#149883]"
                    : "bg-white text-slate-400"
                }`}
              >
                {count}
              </span>
            </button>
          ))}
        </div>

        {/* TABLE */}
        <div className="overflow-x-auto">
          <table className="w-full min-w-[1200px] text-left">
            <thead>
              <tr className="border-b border-slate-100 text-xs text-slate-400">
                <th className="px-5 py-4 font-medium">
                  Patient
                </th>
                <th className="px-5 py-4 font-medium">
                  Age / Gender
                </th>
                <th className="px-5 py-4 font-medium">
                  Department
                </th>
                <th className="px-5 py-4 font-medium">
                  Visit Type
                </th>
                <th className="px-5 py-4 font-medium">
                  Last Visit
                </th>
                <th className="px-5 py-4 font-medium">
                  Priority
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
              {filteredPatients.map((patient) => (
                <tr
                  key={patient.id}
                  className="border-b border-slate-50 text-sm transition hover:bg-[#fbfefd]"
                >
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-3">
                      <div className="grid h-10 w-10 place-items-center rounded-xl bg-[#e8f7f3] text-xs font-semibold text-[#149883]">
                        {patient.name
                          .split(" ")
                          .map((word) => word[0])
                          .slice(0, 2)
                          .join("")}
                      </div>

                      <div>
                        <p className="font-semibold text-[#173b3f]">
                          {patient.name}
                        </p>

                        <p className="mt-1 text-xs text-slate-400">
                          {patient.id}
                        </p>
                      </div>
                    </div>
                  </td>

                  <td className="px-5 py-4">
                    <p className="text-slate-600">
                      {patient.age} Years
                    </p>

                    <p className="mt-1 text-xs text-slate-400">
                      {patient.gender}
                    </p>
                  </td>

                  <td className="px-5 py-4 text-slate-500">
                    {patient.department}
                  </td>

                  <td className="px-5 py-4">
                    <span className="rounded-lg bg-slate-50 px-2.5 py-1.5 text-xs text-slate-500">
                      {patient.type}
                    </span>
                  </td>

                  <td className="px-5 py-4 text-slate-500">
                    {patient.lastVisit}
                  </td>

                  <td className="px-5 py-4">
                    <span
                      className={`rounded-full px-3 py-1 text-xs font-medium ${
                        priorityStyles[patient.priority]
                      }`}
                    >
                      {patient.priority}
                    </span>
                  </td>

                  <td className="px-5 py-4">
                    <span
                      className={`rounded-full border px-3 py-1 text-xs font-medium ${
                        statusStyles[patient.status]
                      }`}
                    >
                      {patient.status}
                    </span>
                  </td>

                  <td className="px-5 py-4">
                    <div className="flex items-center gap-2">
                      <Link
                        to={`/patients/${patient.id}`}
                        className="rounded-lg bg-[#edf8f6] px-3 py-2 text-xs font-medium text-[#149883] transition hover:bg-[#dff3ef]"
                      >
                        View Details
                      </Link>

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

        {/* EMPTY RESULT */}
        {filteredPatients.length === 0 && (
          <div className="py-16 text-center">
            <div className="mx-auto grid h-12 w-12 place-items-center rounded-2xl bg-[#edf8f6] text-[#149883]">
              <Search size={20} />
            </div>

            <h3 className="mt-4 font-semibold text-[#173b3f]">
              No patients found
            </h3>

            <p className="mt-2 text-sm text-slate-400">
              Try changing your search or filters.
            </p>
          </div>
        )}

        {/* FOOTER */}
        <div className="flex flex-col gap-4 border-t border-slate-100 px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-2">
            <Activity size={15} className="text-[#149883]" />

            <p className="text-xs text-slate-400">
              Showing {filteredPatients.length} patient records
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              className="rounded-lg border border-slate-200 px-3 py-2 text-xs text-slate-400"
            >
              Previous
            </button>

            <button
              type="button"
              className="rounded-lg bg-[#149883] px-3 py-2 text-xs text-white"
            >
              1
            </button>

            <button
              type="button"
              className="rounded-lg border border-slate-200 px-3 py-2 text-xs text-slate-500"
            >
              2
            </button>

            <button
              type="button"
              className="rounded-lg border border-slate-200 px-3 py-2 text-xs text-slate-500"
            >
              3
            </button>

            <button
              type="button"
              className="rounded-lg border border-slate-200 px-3 py-2 text-xs text-slate-500"
            >
              Next
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Patients;