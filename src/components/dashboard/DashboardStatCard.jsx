import { ArrowUpRight } from "lucide-react";

export default function DashboardStatCard({
  title,
  subtitle,
  value,
  footer,
  footerValue,
  icon,
  iconType = "default",
}) {
  const Icon = icon;

  return (
    <div className="dashboard-stat-card">
      <div className="stat-card-top">
        <div>
          <div className="stat-card-title">{title}</div>

          <div className="stat-card-subtitle">{subtitle}</div>
        </div>

        <div className="stat-card-icon">{Icon && <Icon size={13} />}</div>
      </div>

      <div className="stat-card-value">{value}</div>

      <div className={`stat-card-footer ${iconType}`}>
        <span className="stat-footer-value">{footerValue}</span>

        <span>{footer}</span>
      </div>
    </div>
  );
}
