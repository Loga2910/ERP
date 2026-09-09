import { Download, Printer, FileSpreadsheet } from "lucide-react";

export default function ReportsHeader({ onQuickExport }) {
  return (
    <div className="reports-header">
      <div>
        <div className="reports-breadcrumb">
          <span>ADMINISTRATION</span>
          <b>›</b>
          <span>REPORTS & GOVERNANCE</span>
          <b>›</b>
          <strong>PREDEFINED REPORTS</strong>

          <em>CONSOLE AY 2026–27</em>
        </div>

        <h1>Institutional Reports & Compliance Exports</h1>

        <p>
          Official statutory registers, demographic distributions, and
          compliance-grade exports.
        </p>
      </div>

      <div className="reports-header-actions">
        <button onClick={() => alert("Date range selector opened.")}>
          Apr 1, 2026 – Mar 31, 2027
        </button>

        <button onClick={() => window.print()}>
          <Printer size={11} />
          Print Gazette
        </button>

        <button className="primary" onClick={onQuickExport}>
          <Download size={11} />
          Quick Export All Summary
        </button>
      </div>
    </div>
  );
}
