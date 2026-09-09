import { Megaphone, Zap, ShieldCheck, FileClock } from "lucide-react";

const tabs = [
  {
    id: "broadcasts",
    label: "Broadcasts & Announcements",
    icon: Megaphone,
  },
  {
    id: "automation",
    label: "Automated Event Triggers",
    icon: Zap,
    badge: "4 Active",
  },
  {
    id: "audit",
    label: "Delivery Logs & Audit Trail",
    icon: ShieldCheck,
    badge: "Real-Time",
  },
  {
    id: "sms",
    label: "SMS Gateway",
    icon: FileClock,
  },
];

export default function CommunicationTabs({ activeTab, setActiveTab }) {
  return (
    <div className="communication-tabs">
      {tabs.map((tab) => {
        const Icon = tab.icon;

        return (
          <button
            key={tab.id}
            className={
              activeTab === tab.id
                ? "communication-tab active"
                : "communication-tab"
            }
            onClick={() => setActiveTab(tab.id)}
          >
            <Icon size={11} />

            <span>{tab.label}</span>

            {tab.badge && <b>{tab.badge}</b>}
          </button>
        );
      })}
    </div>
  );
}
