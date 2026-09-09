import { CalendarDays, ClipboardCheck, LockKeyhole, Users } from "lucide-react";

const tabs = [
  {
    label: "Daily Overview & Class Rosters",
    icon: CalendarDays,
  },
  {
    label: "Attendance Correction Approvals",
    icon: ClipboardCheck,
    count: 3,
  },
  {
    label: "Section Lock & Freeze Controls",
    icon: LockKeyhole,
  },
  {
    label: "Student Attendance",
    icon: Users,
  },
];

export default function AttendanceTabs({ activeTab, setActiveTab }) {
  return (
    <div className="attendance-tabs">
      {tabs.map((tab) => {
        const Icon = tab.icon;

        return (
          <button
            key={tab.label}
            className={
              activeTab === tab.label
                ? "attendance-tab active"
                : "attendance-tab"
            }
            onClick={() => setActiveTab(tab.label)}
          >
            <Icon size={12} />

            <span>{tab.label}</span>

            {tab.count && <b>{tab.count}</b>}
          </button>
        );
      })}
    </div>
  );
}
