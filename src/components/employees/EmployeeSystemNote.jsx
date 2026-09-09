import { Info } from "lucide-react";

export default function EmployeeSystemNote() {
  return (
    <div className="employee-system-note">
      <div className="system-note-icon">
        <Info size={14} />
      </div>

      <div>
        <strong>System Architecture Note:</strong>

        <span>
          Teacher assignments directly configure automated daily attendance
          rosters and gradebook write permissions in the Academic Module. Any
          allocation change triggers an audit entry in the central EIS log.
        </span>
      </div>

      <button>Review Access Policy</button>
    </div>
  );
}
