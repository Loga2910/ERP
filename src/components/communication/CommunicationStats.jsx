import { Send, Bell, Zap, AlertCircle } from "lucide-react";

const iconMap = {
  send: Send,
  bell: Bell,
  zap: Zap,
  alert: AlertCircle,
};

export default function CommunicationStats({ stats }) {
  return (
    <div className="communication-stats">
      {stats.map((stat) => {
        const Icon = iconMap[stat.icon];

        return (
          <div className={`communication-stat ${stat.tone}`} key={stat.label}>
            <div className="communication-stat-top">
              <div>
                <span className="communication-stat-label">{stat.label}</span>

                {stat.period && <small>{stat.period}</small>}

                <div className="communication-stat-value">{stat.value}</div>
              </div>

              <div className="communication-stat-icon">
                <Icon size={15} />
              </div>
            </div>

            <div className="communication-stat-change">
              <strong>{stat.change}</strong>

              <span>{stat.description}</span>
            </div>

            <div className="communication-stat-footer">
              <span>{stat.footer}</span>

              <strong>{stat.footerValue}</strong>
            </div>
          </div>
        );
      })}
    </div>
  );
}
