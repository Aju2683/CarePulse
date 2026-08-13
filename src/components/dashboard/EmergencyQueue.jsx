import { Clock3 } from "lucide-react";

const queue = [
  {
    id: "ER-1048",
    patient: "Rahul Menon",
    issue: "Chest pain",
    priority: "Critical",
    wait: "02 min",
  },
  {
    id: "ER-1049",
    patient: "Anjali Rao",
    issue: "High fever",
    priority: "Moderate",
    wait: "08 min",
  },
  {
    id: "ER-1050",
    patient: "Karthik S",
    issue: "Minor injury",
    priority: "Stable",
    wait: "14 min",
  },
];

function EmergencyQueue() {
  const priorityClasses = {
    Critical:
      "bg-red-50 text-red-600 border-red-100",
    Moderate:
      "bg-amber-50 text-amber-600 border-amber-100",
    Stable:
      "bg-emerald-50 text-emerald-600 border-emerald-100",
  };

  return (
    <section className="rounded-[20px] border border-[#e6eeec] bg-white p-5">
      <div className="mb-5 flex items-start justify-between">
        <div>
          <h3 className="font-semibold text-[#173b3f]">
            Emergency Queue
          </h3>

          <p className="mt-1 text-xs text-slate-400">
            Live triage waiting list
          </p>
        </div>

        <span className="flex items-center gap-2 text-xs text-red-500">
          <span className="h-2 w-2 animate-pulse rounded-full bg-red-500" />

          LIVE
        </span>
      </div>

      <div className="space-y-3">
        {queue.map((patient) => (
          <article
            key={patient.id}
            className="rounded-xl border border-slate-100 p-3.5"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="flex items-center gap-2">
                  <p className="text-sm font-semibold text-[#173b3f]">
                    {patient.patient}
                  </p>

                  <span className="text-[10px] text-slate-400">
                    {patient.id}
                  </span>
                </div>

                <p className="mt-1 text-xs text-slate-500">
                  {patient.issue}
                </p>
              </div>

              <span
                className={`rounded-full border px-2.5 py-1 text-[10px] font-medium ${
                  priorityClasses[
                    patient.priority
                  ]
                }`}
              >
                {patient.priority}
              </span>
            </div>

            <div className="mt-3 flex items-center gap-1.5 text-[11px] text-slate-400">
              <Clock3 size={13} />

              Waiting {patient.wait}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default EmergencyQueue;