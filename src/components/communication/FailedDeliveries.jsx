import { AlertTriangle, RefreshCcw } from "lucide-react";

export default function FailedDeliveries({ deliveries, onRetry }) {
  return (
    <div className="failed-deliveries">
      <div className="failed-header">
        <div>
          <div className="failed-title">
            <AlertTriangle size={13} />

            <h2>Failed Deliveries Queue</h2>
          </div>

          <p>
            Immediate attention needed to guarantee critical parent contact
            delivery compliance.
          </p>
        </div>

        <span>18 Failed</span>
      </div>

      <div className="failed-list">
        {deliveries.map((delivery) => (
          <div className="failed-item" key={delivery.id}>
            <div>
              <strong>{delivery.recipient}</strong>

              <small>
                {delivery.channel} • {delivery.time}
              </small>
            </div>

            <div className="failed-reason">
              <span>{delivery.reason}</span>

              <small>{delivery.attempts} attempts</small>
            </div>

            <button onClick={() => onRetry(delivery)}>
              <RefreshCcw size={9} />
              Retry
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
