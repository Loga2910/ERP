import { Building2, CalendarClock, ListChecks, Award } from "lucide-react";

const icons = [Building2, CalendarClock, ListChecks, Award];

export default function AcademicStats({ stats }) {
  return (
    <div className="academic-stats">
      {stats.map((stat, index) => {
        const Icon = icons[index];

        return (
          <div className={`academic-stat-card ${stat.type}`} key={stat.title}>
            <div className="academic-stat-top">
              <div>
                <span className="academic-stat-label">{stat.title}</span>

                <div className="academic-stat-value">{stat.value}</div>

                {stat.subtitle && (
                  <span className="academic-stat-subtitle">
                    {stat.subtitle}
                  </span>
                )}
              </div>

              <div className="academic-stat-icon">
                <Icon size={15} />
              </div>
            </div>

            <div className="academic-stat-detail">{stat.detail}</div>

            {stat.badge && (
              <span className="academic-stat-badge">{stat.badge}</span>
            )}

            {stat.change && (
              <span className="academic-stat-change">{stat.change}</span>
            )}
          </div>
        );
      })}
    </div>
  );
}
