import { Users, GraduationCap, ClipboardCheck, Bus } from "lucide-react";

const stats = [
  {
    title: "TOTAL STAFF",
    value: "86",
    suffix: "Headcount",
    icon: Users,
    type: "blue",
    detail: "Active: 82",
    secondary: "On Leave: 4",
  },
  {
    title: "TEACHING FACULTY",
    value: "54",
    suffix: "62.8%",
    icon: GraduationCap,
    type: "green",
    detail: "Full-time: 48",
    secondary: "Visiting: 6",
  },
  {
    title: "NON-TEACHING & ADMIN",
    value: "18",
    suffix: "Personnel",
    icon: ClipboardCheck,
    type: "purple",
    detail: "Finance, Registrars",
    secondary: "Operations",
  },
  {
    title: "SUPPORT STAFF",
    value: "14",
    suffix: "Services",
    icon: Bus,
    type: "teal",
    detail: "Facilities",
    secondary: "Transport, Security",
  },
];

export default function EmployeeStats() {
  return (
    <div className="employee-stats">
      {stats.map((stat) => {
        const Icon = stat.icon;

        return (
          <div className={`employee-stat-card ${stat.type}`} key={stat.title}>
            <div className="employee-stat-top">
              <div>
                <div className="employee-stat-title">{stat.title}</div>

                <div className="employee-stat-value-row">
                  <strong>{stat.value}</strong>

                  <span>{stat.suffix}</span>
                </div>
              </div>

              <div className="employee-stat-icon">
                <Icon size={15} />
              </div>
            </div>

            <div className="employee-stat-footer">
              <span>{stat.detail}</span>

              <span>{stat.secondary}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
