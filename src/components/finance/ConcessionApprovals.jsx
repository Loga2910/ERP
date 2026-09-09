import { Check, X, Clock3 } from "lucide-react";

export default function ConcessionApprovals({
  concessions,
  onApprove,
  onReject,
}) {
  return (
    <div className="concession-card">
      <div className="concession-header">
        <div>
          <span>GOVERNANCE</span>

          <h2>Concession Approvals</h2>

          <p>Multi-tier bursar sign-off queue.</p>
        </div>

        <b>5 Pending</b>
      </div>

      <div className="concession-list">
        {concessions.map((item) => (
          <div className="concession-item" key={item.id}>
            <div className="concession-top">
              <div>
                <strong>{item.student}</strong>

                <span>{item.className}</span>
              </div>

              <strong className="concession-amount">{item.amount}</strong>
            </div>

            <div className="concession-meta">
              <span>{item.type}</span>

              <span>Requested by {item.requestedBy}</span>
            </div>

            {item.status === "Pending" ? (
              <div className="concession-actions">
                <button className="approve" onClick={() => onApprove(item)}>
                  <Check size={11} />
                  Approve
                </button>

                <button className="reject" onClick={() => onReject(item)}>
                  <X size={11} />
                  Reject
                </button>
              </div>
            ) : (
              <div className="concession-approved">
                <Check size={10} />
                Approved
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
