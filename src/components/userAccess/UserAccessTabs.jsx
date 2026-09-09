import { Users, ShieldCheck, Grid3X3, Map } from "lucide-react";

const tabs = [
  {
    id: "users",
    label: "User Roster & Assignments",
    badge: "Active",
    icon: Users,
  },
  {
    id: "roles",
    label: "Roles & Templates",
    badge: "12",
    icon: ShieldCheck,
  },
  {
    id: "permissions",
    label: "Granular Permission Matrix",
    icon: Grid3X3,
  },
  {
    id: "scopes",
    label: "Organizational Scopes",
    icon: Map,
  },
];

export default function UserAccessTabs({ activeTab, setActiveTab }) {
  return (
    <div className="ua-tabs">
      {tabs.map((tab) => {
        const Icon = tab.icon;

        return (
          <button
            key={tab.id}
            className={activeTab === tab.id ? "ua-tab active" : "ua-tab"}
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
