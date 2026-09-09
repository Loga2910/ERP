import { MoreVertical, Eye, Pencil, ShieldCheck } from "lucide-react";

export default function UserRoster({ users, onInspect, onEdit }) {
  return (
    <div className="ua-roster">
      <div className="ua-roster-header">
        <div>
          <span>ACTIVE DIRECTORY</span>

          <h2>Institutional User Directory & Role Assignment</h2>

          <p>
            Live registry of campus staff, teachers, bursars, and verified
            parent portal accounts.
          </p>
        </div>
      </div>

      <div className="ua-table-wrap">
        <table className="ua-table">
          <thead>
            <tr>
              <th>
                <input type="checkbox" />
              </th>

              <th>USER IDENTITY & UID</th>

              <th>ASSIGNED ROLE(S)</th>

              <th>ENFORCED SCOPE</th>

              <th>STATUS</th>

              <th>ACTIONS</th>
            </tr>
          </thead>

          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>
                  <input type="checkbox" />
                </td>

                <td>
                  <div className="ua-user">
                    <div className="ua-avatar">{user.initials}</div>

                    <div>
                      <strong>{user.name}</strong>

                      <span>
                        {user.email} • {user.uid}
                      </span>
                    </div>
                  </div>
                </td>

                <td>
                  <div className="ua-role-tags">
                    <span>{user.role}</span>

                    {user.role2 && <span>{user.role2}</span>}
                  </div>
                </td>

                <td>
                  <div className="ua-scope-cell">
                    <ShieldCheck size={10} />
                    {user.scope}
                  </div>
                </td>

                <td>
                  <span className="ua-status">● {user.status}</span>
                </td>

                <td>
                  <div className="ua-row-actions">
                    <button onClick={() => onInspect(user)} title="Inspect">
                      <Eye size={11} />
                    </button>

                    <button onClick={() => onEdit(user)} title="Edit">
                      <Pencil size={10} />
                    </button>

                    <button
                      onClick={() => alert(`More options for ${user.name}`)}
                    >
                      <MoreVertical size={11} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="ua-pagination">
        <span>Showing 1–5 of 1,348 users</span>

        <div>
          <button>‹</button>
          <button className="active">1</button>
          <button>2</button>
          <button>3</button>
          <span>...</span>
          <button>270</button>
          <button>›</button>
        </div>
      </div>
    </div>
  );
}
