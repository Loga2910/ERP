import { Check, X, ArrowRight, Clock } from "lucide-react";

export default function CorrectionApprovals({ requests }) {
  return (
    <aside className="correction-panel">
      <div className="correction-header">
        <div>
          <h3>Correction Approvals</h3>

          <p>Post-lock teacher rectification requests</p>
        </div>

        <span>{requests.length} Pending</span>
      </div>

      <div className="correction-list">
        {requests.map((request) => (
          <div className="correction-card" key={request.id}>
            <div className="correction-card-top">
              <strong>{request.grade}</strong>

              <span>{request.time}</span>
            </div>

            <div className="correction-student">
              <div className="correction-avatar">
                {request.student
                  .split(" ")
                  .map((x) => x[0])
                  .join("")}
              </div>

              <div>
                <strong>{request.student}</strong>

                <span>Teacher: {request.teacher}</span>
              </div>
            </div>

            <div className="correction-statuses">
              <div>
                <small>RECORDED</small>

                <strong>{request.recorded}</strong>
              </div>

              <ArrowRight size={15} />

              <div>
                <small>PROPOSED</small>

                <strong>{request.proposed}</strong>
              </div>
            </div>

            <p className="correction-reason">
              <b>Reason:</b> {request.reason}
            </p>

            <div className="correction-actions">
              <button
                className="approve-button"
                onClick={() => console.log("Approved:", request.id)}
              >
                <Check size={12} />
                Approve
                {request.id === 1 && " & Apply"}
              </button>

              <button
                className="reject-button"
                onClick={() => console.log("Rejected:", request.id)}
              >
                <X size={12} />
                Reject
              </button>
            </div>
          </div>
        ))}
      </div>

      <button
        className="historical-button"
        onClick={() => console.log("Open historical corrections")}
      >
        View All 18 Resolved Historical Corrections →
      </button>
    </aside>
  );
}
