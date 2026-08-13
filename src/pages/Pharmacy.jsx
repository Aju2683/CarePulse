import {
  AlertTriangle,
  PackagePlus,
  Pill,
  Search,
  Trash2,
  X,
} from "lucide-react";

import { useMemo, useState } from "react";
import toast from "react-hot-toast";

const initialMedicines = [
  {
    id: "MED-1001",
    name: "Paracetamol 500mg",
    category: "Analgesic",
    stock: 420,
    reorder: 100,
    expiry: "Dec 2027",
    supplier: "MedCare Pharma",
  },
  {
    id: "MED-1002",
    name: "Amoxicillin 500mg",
    category: "Antibiotic",
    stock: 72,
    reorder: 100,
    expiry: "Apr 2027",
    supplier: "Zenith Labs",
  },
  {
    id: "MED-1003",
    name: "Atorvastatin 10mg",
    category: "Cardiac",
    stock: 31,
    reorder: 80,
    expiry: "Jan 2027",
    supplier: "Nova Med",
  },
  {
    id: "MED-1004",
    name: "Cetirizine 10mg",
    category: "Antihistamine",
    stock: 255,
    reorder: 60,
    expiry: "Nov 2027",
    supplier: "HealthPlus",
  },
];

function Pharmacy() {
  const [medicines, setMedicines] =
    useState(initialMedicines);

  const [search, setSearch] = useState("");
  const [onlyLowStock, setOnlyLowStock] =
    useState(false);

  const [modalOpen, setModalOpen] =
    useState(false);

  const [form, setForm] = useState({
    name: "",
    category: "",
    stock: "",
    supplier: "",
  });

  const filteredMedicines = useMemo(() => {
    return medicines.filter((medicine) => {
      const matchesSearch =
        medicine.name
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        medicine.category
          .toLowerCase()
          .includes(search.toLowerCase());

      const matchesLowStock =
        !onlyLowStock ||
        medicine.stock <= medicine.reorder;

      return matchesSearch && matchesLowStock;
    });
  }, [medicines, search, onlyLowStock]);

  function addMedicine(event) {
    event.preventDefault();

    if (!form.name.trim()) {
      toast.error("Medicine name is required.");
      return;
    }

    setMedicines((current) => [
      {
        id: `MED-${1000 + current.length + 1}`,
        name: form.name,
        category:
          form.category || "General",
        stock: Number(form.stock) || 0,
        reorder: 80,
        expiry: "Dec 2027",
        supplier:
          form.supplier || "Not Assigned",
      },
      ...current,
    ]);

    setForm({
      name: "",
      category: "",
      stock: "",
      supplier: "",
    });

    setModalOpen(false);
    toast.success("Medicine added.");
  }

  function removeMedicine(id) {
    setMedicines((current) =>
      current.filter(
        (medicine) => medicine.id !== id,
      ),
    );

    toast.success("Medicine removed.");
  }

  return (
    <div className="mx-auto max-w-[1600px]">
      <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm font-medium text-[#149883]">
            Medication Inventory
          </p>

          <h1 className="mt-1 text-2xl font-semibold text-[#173b3f]">
            Pharmacy
          </h1>

          <p className="mt-1 text-sm text-slate-400">
            Monitor medicine stock and supply alerts.
          </p>
        </div>

        <button
          type="button"
          onClick={() => setModalOpen(true)}
          className="flex items-center justify-center gap-2 rounded-xl bg-[#149883] px-4 py-3 text-sm font-medium text-white"
        >
          <PackagePlus size={17} />
          Add Medicine
        </button>
      </div>

      <section className="mb-5 grid gap-4 md:grid-cols-3">
        <div className="rounded-[20px] border border-[#e5eeec] bg-white p-5">
          <Pill
            size={21}
            className="text-[#149883]"
          />

          <p className="mt-4 text-2xl font-semibold text-[#173b3f]">
            1,284
          </p>

          <p className="mt-1 text-xs text-slate-400">
            Medicines in inventory
          </p>
        </div>

        <div className="rounded-[20px] border border-[#e5eeec] bg-white p-5">
          <AlertTriangle
            size={21}
            className="text-amber-500"
          />

          <p className="mt-4 text-2xl font-semibold text-[#173b3f]">
            18
          </p>

          <p className="mt-1 text-xs text-slate-400">
            Low stock alerts
          </p>
        </div>

        <div className="rounded-[20px] border border-[#e5eeec] bg-white p-5">
          <PackagePlus
            size={21}
            className="text-violet-500"
          />

          <p className="mt-4 text-2xl font-semibold text-[#173b3f]">
            12
          </p>

          <p className="mt-1 text-xs text-slate-400">
            Pending restock orders
          </p>
        </div>
      </section>

      <section className="rounded-[20px] border border-[#e5eeec] bg-white">
        <div className="flex flex-col gap-3 border-b border-slate-100 p-5 md:flex-row md:items-center md:justify-between">
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
              placeholder="Search medicine..."
              className="w-full rounded-xl border border-slate-200 py-2.5 pl-10 pr-4 text-sm"
            />
          </div>

          <label className="flex items-center gap-2 text-xs text-slate-500">
            <input
              type="checkbox"
              checked={onlyLowStock}
              onChange={(event) =>
                setOnlyLowStock(
                  event.target.checked,
                )
              }
              className="accent-[#149883]"
            />

            Show low stock only
          </label>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[950px] text-left">
            <thead>
              <tr className="border-b border-slate-100 text-xs text-slate-400">
                <th className="px-5 py-4 font-medium">
                  Medicine
                </th>
                <th className="px-5 py-4 font-medium">
                  Category
                </th>
                <th className="px-5 py-4 font-medium">
                  Stock
                </th>
                <th className="px-5 py-4 font-medium">
                  Expiry
                </th>
                <th className="px-5 py-4 font-medium">
                  Supplier
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
              {filteredMedicines.map(
                (medicine) => {
                  const lowStock =
                    medicine.stock <=
                    medicine.reorder;

                  return (
                    <tr
                      key={medicine.id}
                      className="border-b border-slate-50 text-sm"
                    >
                      <td className="px-5 py-4">
                        <p className="font-medium text-[#173b3f]">
                          {medicine.name}
                        </p>

                        <p className="mt-1 text-xs text-slate-400">
                          {medicine.id}
                        </p>
                      </td>

                      <td className="px-5 py-4 text-slate-500">
                        {medicine.category}
                      </td>

                      <td className="px-5 py-4 font-semibold text-[#173b3f]">
                        {medicine.stock}
                      </td>

                      <td className="px-5 py-4 text-slate-500">
                        {medicine.expiry}
                      </td>

                      <td className="px-5 py-4 text-slate-500">
                        {medicine.supplier}
                      </td>

                      <td className="px-5 py-4">
                        <span
                          className={`rounded-full px-3 py-1 text-xs font-medium ${
                            lowStock
                              ? "bg-amber-50 text-amber-600"
                              : "bg-emerald-50 text-emerald-600"
                          }`}
                        >
                          {lowStock
                            ? "Low Stock"
                            : "Healthy"}
                        </span>
                      </td>

                      <td className="px-5 py-4">
                        <button
                          type="button"
                          onClick={() =>
                            removeMedicine(
                              medicine.id,
                            )
                          }
                          className="grid h-8 w-8 place-items-center rounded-lg bg-red-50 text-red-500"
                        >
                          <Trash2 size={15} />
                        </button>
                      </td>
                    </tr>
                  );
                },
              )}
            </tbody>
          </table>
        </div>
      </section>

      {modalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/30 p-4">
          <form
            onSubmit={addMedicine}
            className="w-full max-w-lg rounded-[22px] bg-white p-6"
          >
            <div className="mb-6 flex justify-between">
              <div>
                <h2 className="text-lg font-semibold text-[#173b3f]">
                  Add Medicine
                </h2>

                <p className="mt-1 text-xs text-slate-400">
                  Add medicine to pharmacy inventory.
                </p>
              </div>

              <button
                type="button"
                onClick={() => setModalOpen(false)}
              >
                <X
                  size={19}
                  className="text-slate-400"
                />
              </button>
            </div>

            <div className="space-y-4">
              <input
                value={form.name}
                onChange={(event) =>
                  setForm({
                    ...form,
                    name: event.target.value,
                  })
                }
                placeholder="Medicine name"
                className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm"
              />

              <input
                value={form.category}
                onChange={(event) =>
                  setForm({
                    ...form,
                    category:
                      event.target.value,
                  })
                }
                placeholder="Category"
                className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm"
              />

              <input
                type="number"
                value={form.stock}
                onChange={(event) =>
                  setForm({
                    ...form,
                    stock: event.target.value,
                  })
                }
                placeholder="Opening stock"
                className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm"
              />

              <input
                value={form.supplier}
                onChange={(event) =>
                  setForm({
                    ...form,
                    supplier:
                      event.target.value,
                  })
                }
                placeholder="Supplier"
                className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm"
              />
            </div>

            <button
              className="mt-6 w-full rounded-xl bg-[#149883] py-3 text-sm font-semibold text-white"
            >
              Save Medicine
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

export default Pharmacy;