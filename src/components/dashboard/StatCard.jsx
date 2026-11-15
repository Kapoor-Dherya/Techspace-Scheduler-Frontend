import { Users, Layers3, Cpu, CalendarDays, ArrowUpRight } from "lucide-react";

const icons = {
  users: Users,
  layers: Layers3,
  cpu: Cpu,
  calendar: CalendarDays,
};

export default function StatCard({ item }) {
  const Icon = icons[item.icon];

  return (
    <article className="stat-card">
      <div className={`stat-icon ${item.tone}`}>
        <Icon size={19} />
      </div>

      <div className="stat-topline">
        <span>{item.label}</span>
        <ArrowUpRight size={16} />
      </div>

      <strong className="stat-value">{item.value}</strong>
      <small>{item.note}</small>
    </article>
  );
}
