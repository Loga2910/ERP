import { AlertCircle, CheckCircle2 } from "lucide-react";

export default function AttentionCard({
  category,
  categoryType = "purple",
  title,
  description,
  meta,
  action,
  status,
}) {
  return (
    <div className="attention-card">
      <div className="attention-top">
        <span className={`attention-category attention-${categoryType}`}>
          {category}
        </span>

        {status && <span className="attention-status">{status}</span>}
      </div>

      <h3>{title}</h3>

      <p>{description}</p>

      {meta && <div className="attention-meta">{meta}</div>}

      <button className="attention-action">{action}</button>
    </div>
  );
}
