import { ShieldCheck, CheckCircle2 } from "lucide-react";

export default function UserAccessScopeBanner() {
  return (
    <div className="ua-scope-banner">
      <div className="ua-scope-icon">
        <ShieldCheck size={17} />
      </div>

      <div className="ua-scope-content">
        <div className="ua-scope-title">
          <strong>RBAC & ORGANIZATIONAL SCOPE ENFORCEMENT (V2.0)</strong>

          <span>Zero-Trust Active</span>

          <span>ISO/IEC 27001 Certified</span>
        </div>

        <p>
          Access rights are dynamically resolved by combining Role Templates
          with Organizational Scopes (e.g. Grade/Wing or Department). Super
          Administrators require dual-factor validation. Teachers and staff have
          access restricted strictly to their assigned classes and departmental
          scopes.
        </p>
      </div>

      <div className="ua-scope-live">
        <CheckCircle2 size={10} />
        Auth Matrix Live
      </div>
    </div>
  );
}
