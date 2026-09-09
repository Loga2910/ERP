import { Users, Shield, Monitor, LockKeyhole } from "lucide-react";

const icons = {
  users: Users,
  roles: Shield,
  sessions: Monitor,
  shield: LockKeyhole,
};

export default function UserAccessStats({ stats }) {
  return (
    <div className="ua-stats">
      {stats.map((stat) => {
        const Icon = icons[stat.icon];

        return (
          <div className="ua-stat" key={stat.label}>
            <div className="ua-stat-top">
              <span>{stat.label}</span>

              <div className="ua-stat-icon">
                <Icon size={15} />
              </div>
            </div>

            <strong>{stat.value}</strong>

            <div className="ua-stat-detail">
              <span>{stat.detail}</span>
              {stat.secondary && <span>{stat.secondary}</span>}
            </div>

            <div className="ua-stat-footer">
              <b>{stat.trend}</b>
              <span>{stat.trendText}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
