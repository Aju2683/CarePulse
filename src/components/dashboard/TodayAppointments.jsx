const appointments = [
  {
    time: "09:30",
    patient: "Maya Krishnan",
    doctor: "Dr. Priya Raman",
    department: "Cardiology",
    status: "Checked In",
  },
  {
    time: "10:15",
    patient: "Sanjay Kumar",
    doctor: "Dr. Meera Nair",
    department: "Pediatrics",
    status: "Waiting",
  },
  {
    time: "11:00",
    patient: "Divya R",
    doctor: "Dr. Arun Shah",
    department: "Orthopedics",
    status: "Scheduled",
  },
];

function TodayAppointments() {
  return (
    <section className="rounded-[20px] border border-[#e6eeec] bg-white p-5">
      <div className="mb-5">
        <h3 className="font-semibold text-[#173b3f]">
          Today's Appointments
        </h3>

        <p className="mt-1 text-xs text-slate-400">
          Upcoming consultations
        </p>
      </div>

      <div className="space-y-3">
        {appointments.map((appointment) => (
          <article
            key={`${appointment.time}-${appointment.patient}`}
            className="flex items-center gap-4 rounded-xl bg-[#f8fbfa] p-3.5"
          >
            <div className="min-w-[54px] rounded-lg bg-white px-2 py-2 text-center shadow-sm">
              <p className="text-xs font-semibold text-[#128677]">
                {appointment.time}
              </p>
            </div>

            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-semibold text-[#173b3f]">
                {appointment.patient}
              </p>

              <p className="mt-1 truncate text-xs text-slate-400">
                {appointment.doctor} ·{" "}
                {appointment.department}
              </p>
            </div>

            <span className="hidden rounded-full bg-[#eaf7f4] px-2.5 py-1 text-[10px] font-medium text-[#128677] sm:block">
              {appointment.status}
            </span>
          </article>
        ))}
      </div>
    </section>
  );
}

export default TodayAppointments;