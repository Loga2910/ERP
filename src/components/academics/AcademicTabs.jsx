import { CalendarDays, ClipboardCheck, FileText, Network } from "lucide-react";

const tabs = [
  {
    id: "exams",
    label: "Exams & Timetable Schedule",
    icon: CalendarDays,
  },
  {
    id: "marks",
    label: "Marks Verification & Moderation",
    icon: ClipboardCheck,
    count: "4 Pending Review",
  },
  {
    id: "reports",
    label: "Report Cards & Transcripts",
    icon: FileText,
  },
  {
    id: "hierarchy",
    label: "Academic Hierarchy (Year → Term → Class → Section → Subject)",
    icon: Network,
  },
];

export default function AcademicTabs({ activeTab, setActiveTab }) {
  return (
    <div className="academic-tabs">
      {tabs.map((tab) => {
        const Icon = tab.icon;

        return (
          <button
            key={tab.id}
            className={
              activeTab === tab.id ? "academic-tab active" : "academic-tab"
            }
            onClick={() => setActiveTab(tab.id)}
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
