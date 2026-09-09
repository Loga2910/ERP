import {
  ShieldCheck,
  GraduationCap,
  WalletCards,
  Users,
  UserRound,
  Eye,
  Plus,
} from "lucide-react";

const icons = {
  shield: ShieldCheck,
  school: GraduationCap,
  finance: WalletCards,
  teacher: Users,
  parent: UserRound,
};

export default function RoleTemplates({ roles, onCreate }) {
  return (
    <div className="ua-side-card">
      <div className="ua-side-heading">
        <div>
          <span>ROLE TEMPLATES & PRESETS</span>

          <h2>System-defined baseline roles</h2>
        </div>

        <b>12 Total</b>
      </div>

      <div className="ua-role-list">
        {roles.map((role) => {
          const Icon = icons[role.icon];

          return (
            <button
              className="ua-role-card"
              key={role.name}
              onClick={() => alert(`Inspecting ${role.name}`)}
            >
              <div className="ua-role-icon">
                <Icon size={13} />
              </div>

              <div>
                <strong>{role.name}</strong>

                <span>{role.locked ? "LOCKED" : "CUSTOM"}</span>

                <p>{role.description}</p>
              </div>

              <Eye size={11} />
            </button>
          );
        })}
      </div>

      <button className="ua-create-role" onClick={onCreate}>
        <Plus size={11} />
        Create Custom Role Template
      </button>
    </div>
  );
}
