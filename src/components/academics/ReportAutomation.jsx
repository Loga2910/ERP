import { CheckCircle2, ShieldCheck, FileCheck2, Zap } from "lucide-react";

export default function ReportAutomation() {
  return (
    <aside className="report-automation">
      <div className="automation-header">
        <div>
          <span>AUTOMATION ENGINE</span>

          <h3>Report Cards Generation</h3>

          <p>CBSE Standard Term 1 Progress Report</p>
        </div>

        <div className="automation-icon">
          <FileCheck2 size={15} />
        </div>
      </div>

      <div className="automation-items">
        <div>
          <CheckCircle2 size={12} />

          <span>Grading Scheme</span>

          <strong>9-point (A1 to E)</strong>
        </div>

        <div>
          <CheckCircle2 size={12} />

          <span>Co-Scholastic & Attendance</span>

          <strong>Synced (94.2%)</strong>
        </div>

        <div>
          <ShieldCheck size={12} />

          <span>Principal Digital Seal</span>

          <strong>Verified & Signed</strong>
        </div>
      </div>

      <button className="generate-report-button">
        <Zap size={11} />
        Generate Class 10 Batch Cards (120)
      </button>
    </aside>
  );
}
