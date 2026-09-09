import { ArrowUpRight, Plus } from "lucide-react";

export default function DashboardHeader() {
  return (
    <div className="dashboard-header">
      <div className="dashboard-header-left">
        <div className="dashboard-status-row">
          <span className="status-pill status-green">
            <span className="status-dot" />
            Campus Internal Operations
          </span>

          <span className="status-pill status-purple">
            Attendance 28/32 Locked
          </span>
        </div>

        <h1>Good morning,</h1>

        <p>
          What needs attention today? — Institutional overview, real-time alerts
          & pending approvals
        </p>
      </div>

      <div className="dashboard-actions">
        <button className="dashboard-quick-action">
          <Plus size={13} />
          Quick Action
        </button>

        <button className="dashboard-add-button">Add Student</button>
      </div>
    </div>
  );
}
