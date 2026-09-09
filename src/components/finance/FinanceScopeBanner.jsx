import { ShieldCheck, ArrowRight } from "lucide-react";

export default function FinanceScopeBanner() {
  return (
    <div className="finance-scope-banner">
      <div className="finance-scope-icon">
        <ShieldCheck size={15} />
      </div>

      <div className="finance-scope-content">
        <strong>ROLE-BASED FINANCE SCOPE (V1.4):</strong>

        <span>
          Teachers and non-finance staff hold zero access to student billing
          records, invoices, or ledger data. Only Bursar, Bursary Officers, and
          Super Admins hold operational privilege.
        </span>
      </div>

      <span className="audit-active">● Audit Logging Active</span>

      <button onClick={() => console.log("Review access policy")}>
        Review Access Policy
        <ArrowRight size={10} />
      </button>
    </div>
  );
}
