import { GraduationCap, UserCheck, UserX, UserPlus } from "lucide-react";

const stats = [
  {
    title: "TOTAL ENROLLED",
    value: "1,248",
    icon: GraduationCap,
    type: "blue",
  },
  {
    title: "ACTIVE STUDENTS",
    value: "1,216",
    icon: UserCheck,
    type: "green",
  },
  {
    title: "INACTIVE / ON LEAVE",
    value: "32",
    icon: UserX,
    type: "purple",
  },
  {
    title: "NEW (2026–27)",
    value: "184",
    icon: UserPlus,
    type: "teal",
  },
];

export default function StudentStats() {
  return (
    <div className="student-stats">
      {stats.map((stat) => {
        const Icon = stat.icon;

        return (
          <div className="student-stat-card" key={stat.title}>
            <div className="student-stat-label">{stat.title}</div>

            <div className="student-stat-bottom">
              <strong>{stat.value}</strong>

              <div className={`student-stat-icon ${stat.type}`}>
                <Icon size={15} />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
