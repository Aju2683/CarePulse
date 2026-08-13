import {
  CalendarDays,
  CheckCircle2,
  Clock3,
  MoreHorizontal,
  Plus,
  Search,
  Trash2,
  X,
} from "lucide-react";

import { useMemo, useState } from "react";
import toast from "react-hot-toast";

const initialAppointments = [
  {
    id: "APT-2201",
    patient: "Maya Krishnan",
    doctor: "Dr. Priya Raman",
    department: "Cardiology",
    date: "11 Aug 2026",
    time: "09:30 AM",
    type: "Consultation",
    status: "Checked In",
  },
  {
    id: "APT-2202",
    patient: "Sanjay Kumar",
    doctor: "Dr. Meera Nair",
    department: "Pediatrics",
    date: "11 Aug 2026",
    time: "10:15 AM",
    type: "Follow Up",
    status: "Waiting",
  },
  {
    id: "APT-2203",
    patient: "Divya R",
    doctor: "Dr. Arun Kumar",
    department: "Orthopedics",
    date: "11 Aug 2026",
    time: "11:00 AM",
    type: "Consultation",
    status: "Scheduled",
  },
  {
    id: "APT-2204",
    patient: "Vignesh M",
    doctor: "Dr. Priya Raman",
    department: "Cardiology",
    date: "11 Aug 2026",
    time: "12:30 PM",
    type: "Review",
    status: "Completed",
  },
];

function Appointments() {
  const [appointments, setAppointments] =
    useState(initialAppointments);

  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] =
    useState("All");

  const [modalOpen, setModalOpen] =
    useState(false);

  const [form, setForm] = useState({
    patient: "",
    doctor: "Dr. Priya Raman",
    department: "Cardiology",
    time: "09:30 AM",
    type: "Consultation",
  });

  const filteredAppointments = useMemo(() => {
    return appointments.filter((appointment) => {
      const matchesSearch =
        appointment.patient
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        appointment.doctor
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        appointment.id
          .toLowerCase()
          .includes(search.toLowerCase());

      const matchesStatus =
        statusFilter === "All" ||
        appointment.status === statusFilter;

      return matchesSearch && matchesStatus;
    });
  }, [appointments, search, statusFilter]);

  function handleAddAppointment(event) {
    event.preventDefault();

    if (!form.patient.trim()) {
      toast.error("Enter patient name.");
      return;
    }

    const newAppointment = {
      id: `APT-${2200 + appointments.length + 1}`,
      ...form,
      date: "11 Aug 2026",
      status: "Scheduled",
    };

    setAppointments((current) => [
      newAppointment,
      ...current,
    ]);

    setModalOpen(false);

    setForm({
      patient: "",
      doctor: "Dr. Priya Raman",
      department: "Cardiology",
      time: "09:30 AM",
      type: "Consultation",
    });

    toast.success("Appointment created.");
  }

  function deleteAppointment(id) {
    setAppointments((current) =>
      current.filter(
        (appointment) => appointment.id !== id,
      ),
    );

    toast.success("Appointment removed.");
  }

  const statusClass = {
    "Checked In":
      "bg-blue-50 text-blue-600",
    Waiting:
      "bg-amber-50 text-amber-600",
    Scheduled:
      "bg-violet-50 text-violet-600",
    Completed:
      "bg-emerald-50 text-emerald-600",
  };

  return (
    <div className="mx-auto max-w-[1600px]">
      <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm font-medium text-[#149883]">
            Clinical Scheduling
          </p>

          <h1 className="mt-1 text-2xl font-semibold text-[#173b3f]">
            Appointments
          </h1>

          <p className="mt-1 text-sm text-slate-400">
            Manage consultations and patient visits.
          </p>
        </div>

        <button
          type="button"
          onClick={() => setModalOpen(true)}
          className="flex items-center justify-center gap-2 rounded-xl bg-[#149883] px-4 py-3 text-sm font-medium text-white hover:bg-[#107b6d]"
        >
          <Plus size={17} />
          New Appointment
        </button>
      </div>

      <section className="mb-5 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {[
          {
            title: "Today's Visits",
            value: "96",
            icon: CalendarDays,
          },
          {
            title: "Waiting",
            value: "17",
            icon: Clock3,
          },
          {
            title: "Completed",
            value: "58",
            icon: CheckCircle2,
          },
          {
            title: "Cancelled",
            value: "4",
            icon: X,
          },
        ].map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="rounded-[20px] border border-[#e5eeec] bg-white p-5"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs text-slate-400">
                    {item.title}
                  </p>

                  <p className="mt-2 text-2xl font-semibold text-[#173b3f]">
                    {item.value}
                  </p>
                </div>

                <div className="grid h-11 w-11 place-items-center rounded-xl bg-[#edf8f6] text-[#149883]">
                  <Icon size={20} />
                </div>
              </div>
            </div>
          );
        })}
      </section>

      <section className="rounded-[20px] border border-[#e5eeec] bg-white">
        <div className="flex flex-col gap-3 border-b border-slate-100 p-5 lg:flex-row lg:items-center lg:justify-between">
          <div className="relative w-full max-w-sm">
            <Search
              size={17}
              className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
            />

            <input
              value={search}
              onChange={(event) =>
                setSearch(event.target.value)
              }
              placeholder="Search patient or doctor..."
              className="w-full rounded-xl border border-slate-200 py-2.5 pl-10 pr-4 text-sm"
            />
          </div>

          <select
            value={statusFilter}
            onChange={(event) =>
              setStatusFilter(event.target.value)
            }
            className="rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-500"
          >
            <option>All</option>
            <option>Checked In</option>
            <option>Waiting</option>
            <option>Scheduled</option>
            <option>Completed</option>
          </select>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[1050px] text-left">
            <thead>
              <tr className="border-b border-slate-100 text-xs text-slate-400">
                <th className="px-5 py-4 font-medium">
                  ID
                </th>
                <th className="px-5 py-4 font-medium">
                  Patient
                </th>
                <th className="px-5 py-4 font-medium">
                  Doctor
                </th>
                <th className="px-5 py-4 font-medium">
                  Department
                </th>
                <th className="px-5 py-4 font-medium">
                  Date & Time
                </th>
                <th className="px-5 py-4 font-medium">
                  Type
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
              {filteredAppointments.map(
                (appointment) => (
                  <tr
                    key={appointment.id}
                    className="border-b border-slate-50 text-sm"
                  >
                    <td className="px-5 py-4 font-medium text-[#149883]">
                      {appointment.id}
                    </td>

                    <td className="px-5 py-4 font-medium text-[#173b3f]">
                      {appointment.patient}
                    </td>

                    <td className="px-5 py-4 text-slate-500">
                      {appointment.doctor}
                    </td>

                    <td className="px-5 py-4 text-slate-500">
                      {appointment.department}
                    </td>

                    <td className="px-5 py-4">
                      <p className="text-slate-600">
                        {appointment.date}
                      </p>

                      <p className="mt-1 text-xs text-slate-400">
                        {appointment.time}
                      </p>
                    </td>

                    <td className="px-5 py-4 text-slate-500">
                      {appointment.type}
                    </td>

                    <td className="px-5 py-4">
                      <span
                        className={`rounded-full px-3 py-1 text-xs font-medium ${
                          statusClass[
                            appointment.status
                          ]
                        }`}
                      >
                        {appointment.status}
                      </span>
                    </td>

                    <td className="px-5 py-4">
                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          className="grid h-8 w-8 place-items-center rounded-lg bg-slate-50 text-slate-400"
                        >
                          <MoreHorizontal size={16} />
                        </button>

                        <button
                          type="button"
                          onClick={() =>
                            deleteAppointment(
                              appointment.id,
                            )
                          }
                          className="grid h-8 w-8 place-items-center rounded-lg bg-red-50 text-red-500"
                        >
                          <Trash2 size={15} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ),
              )}
            </tbody>
          </table>
        </div>
      </section>

      {modalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/30 p-4">
          <form
            onSubmit={handleAddAppointment}
            className="w-full max-w-lg rounded-[22px] bg-white p-6 shadow-xl"
          >
            <div className="mb-6 flex items-center justify-between">
              <div>
                <h2 className="text-lg font-semibold text-[#173b3f]">
                  Create Appointment
                </h2>

                <p className="mt-1 text-xs text-slate-400">
                  Schedule a new consultation.
                </p>
              </div>

              <button
                type="button"
                onClick={() => setModalOpen(false)}
                className="grid h-9 w-9 place-items-center rounded-lg bg-slate-50 text-slate-400"
              >
                <X size={18} />
              </button>
            </div>

            <div className="space-y-4">
              <input
                value={form.patient}
                onChange={(event) =>
                  setForm({
                    ...form,
                    patient: event.target.value,
                  })
                }
                placeholder="Patient name"
                className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm"
              />

              <select
                value={form.doctor}
                onChange={(event) =>
                  setForm({
                    ...form,
                    doctor: event.target.value,
                  })
                }
                className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm"
              >
                <option>
                  Dr. Priya Raman
                </option>
                <option>
                  Dr. Meera Nair
                </option>
                <option>
                  Dr. Arun Kumar
                </option>
              </select>

              <select
                value={form.department}
                onChange={(event) =>
                  setForm({
                    ...form,
                    department:
                      event.target.value,
                  })
                }
                className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm"
              >
                <option>Cardiology</option>
                <option>Pediatrics</option>
                <option>Orthopedics</option>
              </select>

              <div className="grid gap-4 sm:grid-cols-2">
                <input
                  value={form.time}
                  onChange={(event) =>
                    setForm({
                      ...form,
                      time: event.target.value,
                    })
                  }
                  className="rounded-xl border border-slate-200 px-4 py-3 text-sm"
                />

                <select
                  value={form.type}
                  onChange={(event) =>
                    setForm({
                      ...form,
                      type: event.target.value,
                    })
                  }
                  className="rounded-xl border border-slate-200 px-4 py-3 text-sm"
                >
                  <option>Consultation</option>
                  <option>Follow Up</option>
                  <option>Review</option>
                </select>
              </div>
            </div>

            <button
              type="submit"
              className="mt-6 w-full rounded-xl bg-[#149883] py-3 text-sm font-semibold text-white"
            >
              Create Appointment
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

export default Appointments;