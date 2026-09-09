import { ShieldCheck, Radio } from "lucide-react";

export default function CommunicationScopeBanner() {
  return (
    <div className="communication-scope-banner">
      <div className="communication-scope-icon">
        <ShieldCheck size={15} />
      </div>

      <div className="communication-scope-content">
        <strong>V1 ARCHITECTURAL SCOPE</strong>

        <span>Gateway Live (DLT Approved)</span>

        <p>
          Official one-way broadcasts and certified automated event webhooks
          only. Direct 2-way messaging and student/parent chat are intentionally
          locked out in V1 to preserve institutional compliance and audit trail
          integrity.
        </p>
      </div>

      <div className="scope-sync">
        <span>Last Synchronized</span>

        <strong>09:34:21 AM IST</strong>
      </div>

      <Radio size={14} />
    </div>
  );
}
