import { WalletCards, Settings2, ShieldCheck, Receipt } from "lucide-react";

const tabs = [
  {
    id: "overview",
    label: "Fee Overview & Invoicing",
    icon: WalletCards,
  },
  {
    id: "structure",
    label: "Fee Structure & Schedule",
    icon: Settings2,
  },
  {
    id: "concessions",
    label: "Concession & Remission Approvals",
    icon: ShieldCheck,
    badge: "5 Pending",
  },
  {
    id: "receipts",
    label: "Receipts & Ledger",
    icon: Receipt,
  },
];

export default function FinanceTabs({ activeTab, setActiveTab }) {
  return (
    <div className="finance-tabs">
      {tabs.map((tab) => {
        const Icon = tab.icon;

        return (
          <button
            key={tab.id}
            className={
              activeTab === tab.id ? "finance-tab active" : "finance-tab"
            }
            onClick={() => setActiveTab(tab.id)}
          >
            <Icon size={11} />

            <span>{tab.label}</span>

            {tab.badge && <b className="finance-tab-badge">{tab.badge}</b>}
          </button>
        );
      })}
    </div>
  );
}
