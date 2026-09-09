import { Users, TrendingUp, PieChart, ShieldCheck } from "lucide-react";

const icons = {
  students: Users,
  retention: TrendingUp,
  gender: PieChart,
  rte: ShieldCheck,
};

export default function ReportsStats({ stats }) {
  return (
    <div className="reports-stats">
      {stats.map((stat) => {
        const Icon = icons[stat.icon];

        return (
          <div className="reports-stat" key={stat.label}>
            <div className="reports-stat-top">
              <span>{stat.label}</span>

              <div className="reports-stat-icon">
                <Icon size={14} />
              </div>
            </div>

            <strong>{stat.value}</strong>

            <p>{stat.subtitle}</p>

            <div className="reports-stat-footer">
              <b>{stat.trend}</b>

              <span>{stat.footer}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
