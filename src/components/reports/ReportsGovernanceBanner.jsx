import { ShieldCheck, LockKeyhole } from "lucide-react";

export default function ReportsGovernanceBanner() {
  return (
    <div className="reports-governance">
      <div className="reports-governance-icon">
        <ShieldCheck size={17} />
      </div>

      <div className="reports-governance-content">
        <div className="reports-governance-title">
          <strong>PREDEFINED INSTITUTIONAL REPORTS (V1.0)</strong>

          <span>Scope Governed</span>

          <span>Enforcing: Super Administrator Scope (Full Campus)</span>
        </div>

        <p>
          All generated data views, calculations, and statutory exports strictly
          respect active role permissions and organizational wings. Teachers and
          non-finance staff are cryptographically restricted from accessing
          financial ledgers, remuneration registers, and ledger reconciliation
          tables.
        </p>
      </div>

      <div className="reports-zero-trust">
        <LockKeyhole size={10} />
        Zero-Trust RBAC V2
      </div>
    </div>
  );
}
