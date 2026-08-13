import {
  ArrowDownRight,
  ArrowUpRight,
} from "lucide-react";

function SummaryCard({
  title,
  value,
  subtitle,
  icon: Icon,
  accent = "teal",
  trend,
  trendDirection = "up",
}) {
  const colors = {
    teal: {
      box: "bg-[#e7f7f3]",
      icon: "text-[#149883]",
    },
    blue: {
      box: "bg-blue-50",
      icon: "text-blue-500",
    },
    violet: {
      box: "bg-violet-50",
      icon: "text-violet-500",
    },
    orange: {
      box: "bg-orange-50",
      icon: "text-orange-500",
    },
  };

  const selected =
    colors[accent] || colors.teal;

  return (
    <article className="rounded-[20px] border border-[#e6eeec] bg-white p-5 transition hover:-translate-y-0.5 hover:shadow-[0_14px_40px_rgba(34,89,82,0.07)]">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm text-slate-500">
            {title}
          </p>

          <h3 className="mt-3 text-3xl font-semibold tracking-tight text-[#173b3f]">
            {value}
          </h3>
        </div>

        <div
          className={`grid h-11 w-11 place-items-center rounded-xl ${selected.box} ${selected.icon}`}
        >
          <Icon size={21} />
        </div>
      </div>

      <div className="mt-5 flex items-center justify-between gap-2">
        <p className="text-xs text-slate-400">
          {subtitle}
        </p>

        {trend && (
          <span
            className={`flex items-center gap-1 text-xs font-medium ${
              trendDirection === "up"
                ? "text-emerald-600"
                : "text-red-500"
            }`}
          >
            {trendDirection === "up" ? (
              <ArrowUpRight size={14} />
            ) : (
              <ArrowDownRight size={14} />
            )}

            {trend}
          </span>
        )}
      </div>
    </article>
  );
}

export default SummaryCard;