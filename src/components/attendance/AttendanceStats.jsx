import {
  GraduationCap,
  LockKeyhole,
  UserX,
  ClipboardCheck,
} from "lucide-react";

const stats = [
  {
    title: "TODAY'S ATTENDANCE",
    value: "94.2%",
    change: "+1.2%",
    description: "1,176 Present in session",
    secondary: "1,248 Enrolled",
    icon: GraduationCap,
    type: "teal",
  },
  {
    title: "SECTIONS SUBMITTED & LOCKED",
    value: "28",
    total: "/32",
    change: "87.5%",
    description: "4 Sections Pending",
    secondary: "View classes",
    icon: LockKeyhole,
    type: "blue",
  },
  {
    title: "ABSENTEEISM / UNEXCUSED",
    value: "72",
    change: "24 Unexcused",
    description: "48 Excused / Sick Slip",
    secondary: "SMS Alert Auto-Sent",
    icon: UserX,
    type: "red",
  },
  {
    title: "CORRECTION REQUESTS",
    value: "3",
    change: "Action Required",
    description: "Faculty post-lock adjustments",
    secondary: "Review 3 items",
    icon: ClipboardCheck,
    type: "purple",
  },
];

export default function AttendanceStats() {
  return (
    <div className="attendance-stats">
      {stats.map((stat) => {
        const Icon = stat.icon;

        return (
          <div className={`attendance-stat-card ${stat.type}`} key={stat.title}>
            <div className="attendance-stat-header">
              <span className="attendance-stat-title">{stat.title}</span>

              <div className="attendance-stat-icon">
                <Icon size={15} />
              </div>
            </div>

            <div className="attendance-stat-value-row">
              <strong>{stat.value}</strong>

              {stat.total && (
                <span className="attendance-stat-total">{stat.total}</span>
              )}

              <span className="attendance-stat-change">{stat.change}</span>
            </div>

            <div className="attendance-stat-footer">
              <span>{stat.description}</span>
              <span>{stat.secondary}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
