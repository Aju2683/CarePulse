import {
  BedDouble,
  Filter,
  Search,
} from "lucide-react";

import { useMemo, useState } from "react";
import toast from "react-hot-toast";

const initialBeds = [
  {
    id: "ICU-01",
    ward: "ICU",
    type: "Critical Care",
    patient: "Rahul Menon",
    status: "Occupied",
  },
  {
    id: "ICU-02",
    ward: "ICU",
    type: "Critical Care",
    patient: "-",
    status: "Available",
  },
  {
    id: "ICU-03",
    ward: "ICU",
    type: "Critical Care",
    patient: "-",
    status: "Cleaning",
  },
  {
    id: "WA-11",
    ward: "Ward A",
    type: "General",
    patient: "Anjali Rao",
    status: "Occupied",
  },
  {
    id: "WA-12",
    ward: "Ward A",
    type: "General",
    patient: "-",
    status: "Reserved",
  },
  {
    id: "WB-07",
    ward: "Ward B",
    type: "General",
    patient: "-",
    status: "Available",
  },
  {
    id: "MAT-04",
    ward: "Maternity",
    type: "Maternity",
    patient: "Divya R",
    status: "Occupied",
  },
  {
    id: "PED-08",
    ward: "Pediatrics",
    type: "Child Care",
    patient: "-",
    status: "Available",
  },
];

function Beds() {
  const [beds, setBeds] =
    useState(initialBeds);

  const [search, setSearch] = useState("");
  const [wardFilter, setWardFilter] =
    useState("All");

  const filteredBeds = useMemo(() => {
    return beds.filter((bed) => {
      const matchesSearch =
        bed.id
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        bed.patient
          .toLowerCase()
          .includes(search.toLowerCase());

      const matchesWard =
        wardFilter === "All" ||
        bed.ward === wardFilter;

      return matchesSearch && matchesWard;
    });
  }, [beds, search, wardFilter]);

  function updateStatus(id, newStatus) {
    setBeds((current) =>
      current.map((bed) =>
        bed.id === id
          ? {
              ...bed,
              status: newStatus,
              patient:
                newStatus === "Available"
                  ? "-"
                  : bed.patient,
            }
          : bed,
      ),
    );

    toast.success(
      `${id} updated to ${newStatus}`,
    );
  }

  const statusClasses = {
    Occupied:
      "border-red-100 bg-red-50 text-red-600",
    Available:
      "border-emerald-100 bg-emerald-50 text-emerald-600",
    Cleaning:
      "border-amber-100 bg-amber-50 text-amber-600",
    Reserved:
      "border-violet-100 bg-violet-50 text-violet-600",
  };

  return (
    <div className="mx-auto max-w-[1600px]">
      <div className="mb-6">
        <p className="text-sm font-medium text-[#149883]">
          Capacity Control
        </p>

        <h1 className="mt-1 text-2xl font-semibold text-[#173b3f]">
          Bed Management
        </h1>

        <p className="mt-1 text-sm text-slate-400">
          Monitor ward availability and bed turnover.
        </p>
      </div>

      <section className="mb-5 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {[
          ["Total Beds", "223"],
          ["Occupied", "164"],
          ["Available", "36"],
          ["Cleaning", "14"],
        ].map(([title, value]) => (
          <div
            key={title}
            className="rounded-[20px] border border-[#e5eeec] bg-white p-5"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-slate-400">
                  {title}
                </p>

                <p className="mt-2 text-2xl font-semibold text-[#173b3f]">
                  {value}
                </p>
              </div>

              <div className="grid h-11 w-11 place-items-center rounded-xl bg-[#edf8f6] text-[#149883]">
                <BedDouble size={20} />
              </div>
            </div>
          </div>
        ))}
      </section>

      <section className="rounded-[20px] border border-[#e5eeec] bg-white p-5">
        <div className="mb-5 flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
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
              placeholder="Search bed or patient..."
              className="w-full rounded-xl border border-slate-200 py-2.5 pl-10 pr-4 text-sm"
            />
          </div>

          <div className="flex items-center gap-2">
            <Filter
              size={17}
              className="text-slate-400"
            />

            <select
              value={wardFilter}
              onChange={(event) =>
                setWardFilter(event.target.value)
              }
              className="rounded-xl border border-slate-200 px-4 py-2.5 text-sm text-slate-500"
            >
              <option>All</option>
              <option>ICU</option>
              <option>Ward A</option>
              <option>Ward B</option>
              <option>Maternity</option>
              <option>Pediatrics</option>
            </select>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
          {filteredBeds.map((bed) => (
            <article
              key={bed.id}
              className="rounded-2xl border border-slate-100 p-4 transition hover:shadow-md"
            >
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-lg font-semibold text-[#173b3f]">
                    {bed.id}
                  </p>

                  <p className="mt-1 text-xs text-slate-400">
                    {bed.ward} · {bed.type}
                  </p>
                </div>

                <span
                  className={`rounded-full border px-2.5 py-1 text-[10px] font-medium ${
                    statusClasses[bed.status]
                  }`}
                >
                  {bed.status}
                </span>
              </div>

              <div className="mt-5 rounded-xl bg-[#f8fbfa] p-3">
                <p className="text-[10px] uppercase tracking-wide text-slate-400">
                  Patient
                </p>

                <p className="mt-1 text-sm font-medium text-[#173b3f]">
                  {bed.patient}
                </p>
              </div>

              <select
                value={bed.status}
                onChange={(event) =>
                  updateStatus(
                    bed.id,
                    event.target.value,
                  )
                }
                className="mt-4 w-full rounded-xl border border-slate-200 px-3 py-2.5 text-xs text-slate-500"
              >
                <option>Available</option>
                <option>Occupied</option>
                <option>Cleaning</option>
                <option>Reserved</option>
              </select>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Beds;