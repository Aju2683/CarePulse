import {
  BadgeCheck,
  CalendarDays,
  Filter,
  MoreHorizontal,
  Plus,
  Search,
  Stethoscope,
  UserRoundCheck,
} from "lucide-react";

import { useMemo, useState } from "react";
import { Link } from "react-router-dom";

const doctorData = [
  {
    id: "DR-1001",
    name: "Dr. Priya Raman",
    specialty: "Cardiology",
    department: "Cardiology",
    experience: "12 Years",
    patients: 34,
    schedule: "08:00 AM - 04:00 PM",
    status: "On Duty",
  },
  {
    id: "DR-1002",
    name: "Dr. Arun Kumar",
    specialty: "Orthopedics",
    department: "Orthopedics",
    experience: "10 Years",
    patients: 21,
    schedule: "09:00 AM - 05:00 PM",
    status: "In Surgery",
  },
  {
    id: "DR-1003",
    name: "Dr. Meera Nair",
    specialty: "Pediatrics",
    department: "Pediatrics",
    experience: "8 Years",
    patients: 26,
    schedule: "08:30 AM - 03:30 PM",
    status: "Available",
  },
  {
    id: "DR-1004",
    name: "Dr. Sanjay Rao",
    specialty: "Neurology",
    department: "Neurology",
    experience: "14 Years",
    patients: 18,
    schedule: "10:00 AM - 06:00 PM",
    status: "On Duty",
  },
  {
    id: "DR-1005",
    name: "Dr. Divya Krishnan",
    specialty: "Dermatology",
    department: "Dermatology",
    experience: "7 Years",
    patients: 16,
    schedule: "09:30 AM - 04:30 PM",
    status: "Off Duty",
  },
  {
    id: "DR-1006",
    name: "Dr. Karthik S",
    specialty: "General Medicine",
    department: "General Medicine",
    experience: "9 Years",
    patients: 29,
    schedule: "07:30 AM - 03:30 PM",
    status: "Available",
  },
];

function Doctors() {
  const [search, setSearch] = useState("");
  const [department, setDepartment] = useState("All");

  const filteredDoctors = useMemo(() => {
    return doctorData.filter((doctor) => {
      const matchesSearch =
        doctor.name
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        doctor.specialty
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        doctor.id
          .toLowerCase()
          .includes(search.toLowerCase());

      const matchesDepartment =
        department === "All" ||
        doctor.department === department;

      return matchesSearch && matchesDepartment;
    });
  }, [search, department]);

  const statusStyles = {
    "On Duty":
      "bg-blue-50 text-blue-600 border-blue-100",
    Available:
      "bg-emerald-50 text-emerald-600 border-emerald-100",
    "In Surgery":
      "bg-violet-50 text-violet-600 border-violet-100",
    "Off Duty":
      "bg-slate-100 text-slate-500 border-slate-200",
  };

  return (
    <div className="mx-auto max-w-[1600px]">
      {/* HEADER */}
      <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-sm font-medium text-[#149883]">
            Clinical Workforce
          </p>

          <h1 className="mt-1 text-2xl font-semibold text-[#173b3f] sm:text-3xl">
            Doctor Management
          </h1>

          <p className="mt-2 text-sm text-slate-400">
            Manage doctors, specialties, schedules and availability.
          </p>
        </div>

        <Link
          to="/doctors/add"
          className="flex items-center justify-center gap-2 rounded-xl bg-[#149883] px-4 py-3 text-sm font-medium text-white transition hover:bg-[#107b6d]"
        >
          <Plus size={17} />
          Add Doctor
        </Link>
      </div>

      {/* SUMMARY CARDS */}
      <section className="mb-5 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <article className="rounded-[20px] border border-[#e5eeec] bg-white p-5">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs text-slate-400">
                Total Doctors
              </p>

              <p className="mt-2 text-2xl font-semibold text-[#173b3f]">
                86
              </p>
            </div>

            <div className="grid h-11 w-11 place-items-center rounded-xl bg-[#edf8f6] text-[#149883]">
              <Stethoscope size={20} />
            </div>
          </div>
        </article>

        <article className="rounded-[20px] border border-[#e5eeec] bg-white p-5">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs text-slate-400">
                On Duty
              </p>

              <p className="mt-2 text-2xl font-semibold text-[#173b3f]">
                34
              </p>
            </div>

            <div className="grid h-11 w-11 place-items-center rounded-xl bg-blue-50 text-blue-500">
              <UserRoundCheck size={20} />
            </div>
          </div>
        </article>

        <article className="rounded-[20px] border border-[#e5eeec] bg-white p-5">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs text-slate-400">
                Available Now
              </p>

              <p className="mt-2 text-2xl font-semibold text-[#173b3f]">
                18
              </p>
            </div>

            <div className="grid h-11 w-11 place-items-center rounded-xl bg-emerald-50 text-emerald-500">
              <BadgeCheck size={20} />
            </div>
          </div>
        </article>

        <article className="rounded-[20px] border border-[#e5eeec] bg-white p-5">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs text-slate-400">
                Appointments Today
              </p>

              <p className="mt-2 text-2xl font-semibold text-[#173b3f]">
                96
              </p>
            </div>

            <div className="grid h-11 w-11 place-items-center rounded-xl bg-violet-50 text-violet-500">
              <CalendarDays size={20} />
            </div>
          </div>
        </article>
      </section>

      {/* FILTERS */}
      <section className="rounded-[22px] border border-[#e5eeec] bg-white">
        <div className="flex flex-col gap-3 border-b border-slate-100 p-5 lg:flex-row lg:items-center lg:justify-between">
          <div className="relative w-full max-w-sm">
            <Search
              size={17}
              className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
            />

            <input
              type="text"
              value={search}
              onChange={(event) =>
                setSearch(event.target.value)
              }
              placeholder="Search doctor, specialty or ID..."
              className="w-full rounded-xl border border-slate-200 py-2.5 pl-10 pr-4 text-sm text-[#173b3f] focus:border-[#149883] focus:ring-4 focus:ring-[#149883]/10"
            />
          </div>

          <div className="flex items-center gap-2">
            <Filter
              size={17}
              className="text-slate-400"
            />

            <select
              value={department}
              onChange={(event) =>
                setDepartment(event.target.value)
              }
              className="rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-500"
            >
              <option>All</option>
              <option>Cardiology</option>
              <option>Orthopedics</option>
              <option>Pediatrics</option>
              <option>Neurology</option>
              <option>Dermatology</option>
              <option>General Medicine</option>
            </select>
          </div>
        </div>

        {/* TABLE */}
        <div className="overflow-x-auto">
          <table className="w-full min-w-[1100px] text-left">
            <thead>
              <tr className="border-b border-slate-100 text-xs text-slate-400">
                <th className="px-5 py-4 font-medium">
                  Doctor
                </th>
                <th className="px-5 py-4 font-medium">
                  Department
                </th>
                <th className="px-5 py-4 font-medium">
                  Experience
                </th>
                <th className="px-5 py-4 font-medium">
                  Patients Today
                </th>
                <th className="px-5 py-4 font-medium">
                  Schedule
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
              {filteredDoctors.map((doctor) => (
                <tr
                  key={doctor.id}
                  className="border-b border-slate-50 text-sm transition hover:bg-[#fbfefd]"
                >
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-3">
                      <div className="grid h-10 w-10 place-items-center rounded-xl bg-[#e8f7f3] text-xs font-semibold text-[#149883]">
                        {doctor.name
                          .split(" ")
                          .slice(1, 3)
                          .map((word) => word[0])
                          .join("")}
                      </div>

                      <div>
                        <p className="font-semibold text-[#173b3f]">
                          {doctor.name}
                        </p>

                        <p className="mt-1 text-xs text-slate-400">
                          {doctor.id}
                        </p>
                      </div>
                    </div>
                  </td>

                  <td className="px-5 py-4">
                    <p className="text-slate-600">
                      {doctor.specialty}
                    </p>
                  </td>

                  <td className="px-5 py-4 text-slate-500">
                    {doctor.experience}
                  </td>

                  <td className="px-5 py-4">
                    <span className="font-semibold text-[#173b3f]">
                      {doctor.patients}
                    </span>
                  </td>

                  <td className="px-5 py-4 text-slate-500">
                    {doctor.schedule}
                  </td>

                  <td className="px-5 py-4">
                    <span
                      className={`rounded-full border px-3 py-1 text-xs font-medium ${
                        statusStyles[
                          doctor.status
                        ]
                      }`}
                    >
                      {doctor.status}
                    </span>
                  </td>

                  <td className="px-5 py-4">
                    <div className="flex items-center gap-2">
                      <Link
                        to={`/doctors/${doctor.id}`}
                        className="rounded-lg bg-[#edf8f6] px-3 py-2 text-xs font-medium text-[#149883]"
                      >
                        View
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

        {/* FOOTER */}
        <div className="flex flex-col gap-3 border-t border-slate-100 px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-slate-400">
            Showing {filteredDoctors.length} doctors
          </p>

          <div className="flex gap-2">
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
              Next
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Doctors;