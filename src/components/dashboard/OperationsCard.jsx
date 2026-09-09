export default function OperationsCard({
  type,
  title,
  value,
  description,
  status,
  statusType = "normal",
}) {
  return (
    <div className="operation-card">
      <div className="operation-card-header">
        <span className="operation-type">{type}</span>

        {status && (
          <span className={`operation-status ${statusType}`}>{status}</span>
        )}
      </div>

      <h3>{title}</h3>

      {value && <div className="operation-value">{value}</div>}

      <p>{description}</p>
    </div>
  );
}
