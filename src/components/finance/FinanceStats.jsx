import { Building2, WalletCards, AlertCircle, Tags } from "lucide-react";

const icons = {
  building: Building2,
  wallet: WalletCards,
  alert: AlertCircle,
  tag: Tags,
};

export default function FinanceStats({ stats }) {
  return (
    <div className="finance-stats">
      {stats.map((stat) => {
        const Icon = icons[stat.icon];

        return (
          <div className={`finance-stat-card ${stat.tone}`} key={stat.label}>
            <div className="finance-stat-card-top">
              <div>
                <span className="finance-stat-label">{stat.label}</span>

                <div className="finance-stat-value">{stat.value}</div>
              </div>

              <div className="finance-stat-icon">
                <Icon size={15} />
              </div>
            </div>

            <div className="finance-stat-meta">
              <span>{stat.subValue}</span>

              <strong>{stat.description}</strong>
            </div>

            <div className="finance-mini-progress">
              <span
                style={{
                  width:
                    stat.tone === "red"
                      ? "24%"
                      : stat.tone === "purple"
                        ? "38%"
                        : stat.percentage,
                }}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}
