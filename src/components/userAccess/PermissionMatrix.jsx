import { Globe2, Network, Building2, UsersRound } from "lucide-react";

const icons = [Globe2, Network, Building2, UsersRound];

export default function OrganizationalScopes({ scopes }) {
  return (
    <div className="ua-side-card">
      <div className="ua-side-heading">
        <div>
          <span>ORGANIZATIONAL SCOPE DEFINITION</span>

          <h2>"Where Access Applies" boundary partitions.</h2>
        </div>
      </div>

      <div className="ua-scope-list">
        {scopes.map((scope, index) => {
          const Icon = icons[index];

          return (
            <div className="ua-org-scope" key={scope.name}>
              <div className="ua-org-icon">
                <Icon size={11} />
              </div>

              <div>
                <strong>{scope.name}</strong>

                <p>{scope.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
