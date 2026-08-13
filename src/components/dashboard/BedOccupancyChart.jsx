import {
  Cell,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

const data = [
  {
    name: "Occupied",
    value: 164,
    color: "#169b87",
  },
  {
    name: "Available",
    value: 36,
    color: "#61cdbb",
  },
  {
    name: "Cleaning",
    value: 14,
    color: "#fbbf24",
  },
  {
    name: "Reserved",
    value: 9,
    color: "#8b5cf6",
  },
];

function BedOccupancyChart() {
  return (
    <section className="rounded-[20px] border border-[#e6eeec] bg-white p-5">
      <div>
        <h3 className="font-semibold text-[#173b3f]">
          Bed Occupancy
        </h3>

        <p className="mt-1 text-xs text-slate-400">
          Live hospital capacity
        </p>
      </div>

      <div className="relative mt-4 h-[210px]">
        <ResponsiveContainer
          width="100%"
          height="100%"
        >
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              innerRadius={58}
              outerRadius={82}
              paddingAngle={4}
              stroke="none"
            >
              {data.map((item) => (
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
            <p className="text-3xl font-semibold text-[#173b3f]">
              82%
            </p>

            <p className="text-[11px] text-slate-400">
              Occupied
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3">
        {data.map((item) => (
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

              <span className="text-xs text-slate-500">
                {item.name}
              </span>
            </div>

            <span className="text-xs font-semibold text-[#173b3f]">
              {item.value}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default BedOccupancyChart;