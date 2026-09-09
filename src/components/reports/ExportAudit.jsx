import { CloudDownload, CheckCircle2 } from "lucide-react";

export default function ExportAudit({ auditTrail }) {
  return (
    <div className="audit-card">
      <div className="audit-title">
        <div>
          <h2>Recent Export Audit Trail</h2>

          <p>Immutable logging of all institutional report exports.</p>
        </div>

        <span>Live SHA-256</span>
      </div>

      <div className="audit-list">
        {auditTrail.map((item) => (
          <div className="audit-item" key={item.title}>
            <div className="audit-icon">
              <CloudDownload size={11} />
            </div>

            <div className="audit-info">
              <strong>{item.title}</strong>

              <span>
                {item.date} • {item.user}
              </span>
            </div>

            <div className="audit-status">
              <span>{item.format}</span>

              <b>
                <CheckCircle2 size={9} />
                {item.status}
              </b>
            </div>
          </div>
        ))}
      </div>

      <button
        className="view-audit"
        onClick={() => alert("Opening complete export audit trail.")}
      >
        View Complete Audit Trail →
      </button>
    </div>
  );
}
