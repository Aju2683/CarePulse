import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  {
    time: "08 AM",
    opd: 24,
    emergency: 6,
  },
  {
    time: "10 AM",
    opd: 48,
    emergency: 12,
  },
  {
    time: "12 PM",
    opd: 72,
    emergency: 15,
  },
  {
    time: "02 PM",
    opd: 58,
    emergency: 11,
  },
  {
    time: "04 PM",
    opd: 82,
    emergency: 18,
  },
  {
    time: "06 PM",
    opd: 60,
    emergency: 13,
  },
  {
    time: "08 PM",
    opd: 39,
    emergency: 9,
  },
];

function PatientFlowChart() {
  return (
    <section className="rounded-[20px] border border-[#e6eeec] bg-white p-5">
      <div className="mb-6 flex items-start justify-between">
        <div>
          <h3 className="font-semibold text-[#173b3f]">
            Patient Flow
          </h3>

          <p className="mt-1 text-xs text-slate-400">
            OPD and emergency arrivals today
          </p>
        </div>

        <span className="rounded-lg bg-[#edf8f6] px-3 py-1.5 text-xs font-medium text-[#128677]">
          Today
        </span>
      </div>

      <div className="h-[280px]">
        <ResponsiveContainer
          width="100%"
          height="100%"
        >
          <AreaChart data={data}>
            <defs>
              <linearGradient
                id="opdGradient"
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop
                  offset="5%"
                  stopColor="#1aa690"
                  stopOpacity={0.24}
                />

                <stop
                  offset="95%"
                  stopColor="#1aa690"
                  stopOpacity={0}
                />
              </linearGradient>
            </defs>

            <CartesianGrid
              strokeDasharray="3 3"
              vertical={false}
              stroke="#edf2f1"
            />

            <XAxis
              dataKey="time"
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

            <Area
              type="monotone"
              dataKey="opd"
              stroke="#159782"
              strokeWidth={2.5}
              fill="url(#opdGradient)"
            />

            <Area
              type="monotone"
              dataKey="emergency"
              stroke="#fb7185"
              strokeWidth={2}
              fill="transparent"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
}

export default PatientFlowChart;