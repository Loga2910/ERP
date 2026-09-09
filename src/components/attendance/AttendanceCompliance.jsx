import { ShieldCheck, LockKeyhole } from "lucide-react";

export default function AttendanceCompliance() {
  return (
    <div className="attendance-compliance">
      <div className="compliance-icon">
        <ShieldCheck size={15} />
      </div>

      <div className="compliance-content">
        <div className="compliance-title-row">
          <strong>Institutional Compliance Status:</strong>

          <span className="compliance-badge">
            ● ACTIVE LOCKED FOR 28 OF 32 SECTIONS
          </span>
        </div>

        <p>
          Once a section roll-call is locked by School Administration, direct
          teacher edits are disabled. Subsequent alterations must follow the
          formal Correction Flow: Teacher Request → School Admin Audit →
          Approved & Timestamped.
        </p>
      </div>

      <div className="freeze-deadline">
        <span>FREEZE DEADLINE</span>

        <strong>09:15 AM Daily</strong>
      </div>

      <div className="freeze-icon">
        <LockKeyhole size={15} />
      </div>
    </div>
  );
}
