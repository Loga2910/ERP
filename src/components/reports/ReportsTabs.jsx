import {
  Users,
  BriefcaseBusiness,
  ClipboardCheck,
  GraduationCap,
} from "lucide-react";

const tabs = [
  {
    id: "census",
    label: "SIS Reports (Census & Wings)",
    icon: Users,
  },
  {
    id: "staff",
    label: "EIS Staff & Faculty Matrix",
    icon: BriefcaseBusiness,
  },
  {
    id: "attendance",
    label: "Attendance Registers",
    icon: ClipboardCheck,
  },
  {
    id: "academic",
    label: "Academic Gazette & Moderation",
    icon: GraduationCap,
  },
];

export default function ReportsTabs({ activeTab, setActiveTab }) {
  return (
    <div className="reports-tabs">
      {tabs.map((tab) => {
        const Icon = tab.icon;

        return (
          <button
            key={tab.id}
            className={
              activeTab === tab.id ? "reports-tab active" : "reports-tab"
            }
            onClick={() => setActiveTab(tab.id)}
          >
            <Icon size={11} />
            {tab.label}
          </button>
        );
      })}
    </div>
  );
}
