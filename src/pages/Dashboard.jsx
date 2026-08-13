import {
  BedDouble,
  CalendarCheck,
  Clock3,
  Stethoscope,
  Users,
} from "lucide-react";


import SummaryCard from "../components/dashboard/SummaryCard.jsx";

import BedOccupancyChart from "../components/dashboard/BedOccupancyChart.jsx";
import EmergencyQueue from "../components/dashboard/EmergencyQueue.jsx";
import PatientFlowChart from "../components/dashboard/PatientFlowChart.jsx";
import TodayAppointments from "../components/dashboard/TodayAppointments.jsx";

const doctors = [
  {
    initials: "PR",
    name: "Dr. Priya Raman",
    specialty: "Cardiology",
    status: "On Duty",
  },
  {
    initials: "AK",
    name: "Dr. Arun Kumar",
    specialty: "Orthopedics",
    status: "In Surgery",
  },
  {
    initials: "MN",
    name: "Dr. Meera Nair",
    specialty: "Pediatrics",
    status: "Available",
  },
];

function Dashboard() {
  return (
    <div className="mx-auto max-w-[1600px]">
      <div className="mb-7 flex flex-col justify-between gap-4 md:flex-row md:items-end">
        <div>
          <p className="mb-1 text-sm font-medium text-[#159782]">
            Hospital Command Center
          </p>

          <h1 className="text-2xl font-semibold tracking-tight text-[#173b3f] sm:text-3xl">
            Good morning, Aravind
          </h1>

          <p className="mt-2 text-sm text-slate-400">
            Here's what is happening across
            CarePulse Hospital today.
          </p>
        </div>

        <div className="inline-flex items-center gap-2 self-start rounded-xl border border-[#dfe9e7] bg-white px-4 py-2.5 text-xs text-slate-500 md:self-auto">
          <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" />

          All hospital systems operational
        </div>
      </div>

      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
        <SummaryCard
          title="Patients Today"
          value="248"
          subtitle="31 currently admitted"
          trend="+12.4%"
          icon={Users}
          accent="teal"
        />

        <SummaryCard
          title="Doctors On Duty"
          value="34"
          subtitle="8 departments active"
          trend="+3"
          icon={Stethoscope}
          accent="blue"
        />

        <SummaryCard
          title="Appointments"
          value="96"
          subtitle="17 waiting now"
          trend="+8.2%"
          icon={CalendarCheck}
          accent="violet"
        />

        <SummaryCard
          title="Beds Available"
          value="36"
          subtitle="223 total beds"
          trend="-4.1%"
          trendDirection="down"
          icon={BedDouble}
          accent="orange"
        />

        <SummaryCard
          title="Average OPD Wait"
          value="18m"
          subtitle="Target below 20m"
          trend="-6m"
          icon={Clock3}
          accent="teal"
        />
      </section>

      <section className="mt-5 grid gap-5 xl:grid-cols-[1.6fr_0.8fr]">
        <PatientFlowChart />

        <BedOccupancyChart />
      </section>

      <section className="mt-5 grid gap-5 xl:grid-cols-3">
        <EmergencyQueue />

        <TodayAppointments />

        <section className="rounded-[20px] border border-[#e6eeec] bg-white p-5">
          <div className="mb-5">
            <h3 className="font-semibold text-[#173b3f]">
              Doctors On Duty
            </h3>

            <p className="mt-1 text-xs text-slate-400">
              Current clinical availability
            </p>
          </div>

          <div className="space-y-3">
            {doctors.map((doctor) => (
              <article
                key={doctor.name}
                className="flex items-center gap-3 rounded-xl border border-slate-100 p-3.5"
              >
                <div className="grid h-10 w-10 flex-shrink-0 place-items-center rounded-xl bg-[#e8f7f3] text-xs font-semibold text-[#128677]">
                  {doctor.initials}
                </div>

                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-semibold text-[#173b3f]">
                    {doctor.name}
                  </p>

                  <p className="mt-0.5 text-xs text-slate-400">
                    {doctor.specialty}
                  </p>
                </div>

                <span
                  className={`h-2.5 w-2.5 rounded-full ${
                    doctor.status ===
                    "Available"
                      ? "bg-emerald-500"
                      : doctor.status ===
                          "In Surgery"
                        ? "bg-violet-500"
                        : "bg-blue-500"
                  }`}
                />
              </article>
            ))}
          </div>
        </section>
      </section>
    </div>
  );
}

export default Dashboard;