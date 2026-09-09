import { FileSpreadsheet, FileText, FileDown, Send } from "lucide-react";

export default function ReportsFilters({ onExport }) {
  return (
    <div className="reports-filter-panel">
      <div className="reports-filter-grid">
        <label>
          <span>ACADEMIC YEAR</span>

          <select defaultValue="2026">
            <option value="2026">2026–27 (Current)</option>

            <option>2025–26</option>
          </select>
        </label>

        <label>
          <span>WING / DIVISION</span>

          <select defaultValue="senior">
            <option value="senior">Senior Sec (Gr 9–12)</option>

            <option>Middle Wing (Gr 6–8)</option>

            <option>Primary Wing (Gr 1–5)</option>
          </select>
        </label>

        <label>
          <span>SECTION</span>

          <select>
            <option>All Sections</option>

            <option>Section A</option>

            <option>Section B</option>

            <option>Section C</option>
          </select>
        </label>

        <label>
          <span>QUOTA / CATEGORY</span>

          <select>
            <option>All Categories</option>

            <option>General</option>

            <option>RTE</option>

            <option>Staff / Merit</option>
          </select>
        </label>

        <label>
          <span>GENDER SEGMENT</span>

          <select>
            <option>Combined (All)</option>

            <option>Male</option>

            <option>Female</option>
          </select>
        </label>

        <div className="reports-active-scope">
          <span>ACTIVE SCOPE</span>

          <strong>● Senior Secondary • Full</strong>
        </div>
      </div>

      <div className="reports-export-row">
        <span>
          ✓ Format standard: CBSE Annexure-IX, ISO 27001 export compliant
        </span>

        <div>
          <button onClick={() => onExport("Excel")}>
            <FileSpreadsheet size={10} />
            Excel (.xlsx)
          </button>

          <button onClick={() => onExport("CSV")}>
            <FileText size={10} />
            CSV Export
          </button>

          <button onClick={() => onExport("PDF")}>
            <FileDown size={10} />
            PDF (Watermarked)
          </button>

          <button
            className="publish"
            onClick={() => alert("Report published to institutional board.")}
          >
            <Send size={10} />
            Publish to Board
          </button>
        </div>
      </div>
    </div>
  );
}
