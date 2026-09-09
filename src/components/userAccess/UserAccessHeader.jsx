import { ShieldCheck, UserPlus, FileText } from "lucide-react";

export default function UserAccessHeader({ onInvite, onAudit, onCreateRole }) {
  return (
    <div className="ua-header">
      <div>
        <div className="ua-breadcrumb">
          <span>Administration</span>
          <b>›</b>
          <strong>User & Access Console</strong>
          <em>AY 2026–27</em>
        </div>

        <h1>User & Access Management (RBAC & Scope Governance)</h1>

        <p>
          Manage institutional users, role assignments, organizational
          boundaries and granular access policies.
        </p>
      </div>

      <div className="ua-header-actions">
        <button onClick={onAudit}>
          <FileText size={12} />
          Audit Access Logs
        </button>

        <button onClick={onCreateRole}>
          <ShieldCheck size={12} />
          Create New Role
        </button>

        <button className="primary" onClick={onInvite}>
          <UserPlus size={12} />
          Invite / Add User
        </button>
      </div>
    </div>
  );
}
