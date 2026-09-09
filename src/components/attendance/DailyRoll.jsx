import { LockKeyhole, MoreVertical } from "lucide-react";

export default function DailyRoll({ students }) {
  return (
    <div className="daily-roll">
      {/* Header */}

      <div className="daily-roll-header">
        <div>
          <div className="daily-roll-title">
            <span className="grade-badge">6A</span>

            <div>
              <h3>Grade 6 – Section A Daily Roll Call</h3>

              <p>
                Session Locked at 09:00 AM by Administrator (Audit #LK-9023)
              </p>
            </div>
          </div>
        </div>

        <div className="daily-roll-status">
          <span>
            <LockKeyhole size={10} />
            LOCKED BY ADMIN
          </span>

          <div>
            <b className="present-count">
              37
              <small>Present</small>
            </b>

            <b className="absent-count">
              2<small>Absent</small>
            </b>

            <b className="late-count">
              1<small>Late</small>
            </b>
          </div>
        </div>
      </div>

      {/* Table */}

      <div className="daily-roll-table">
        <div className="roll-table-head">
          <span>ROLL</span>
          <span>STUDENT PROFILE</span>
          <span>ATTENDANCE VERIFICATION</span>
          <span>NOTES & MEDICAL REASON</span>
          <span>GUARDIAN CHECK</span>
          <span>AUDIT</span>
        </div>

        {students.map((student) => (
          <div
            className={`roll-row ${
              student.status.startsWith("Absent") ? "roll-absent" : ""
            }`}
            key={student.id}
          >
            <div>
              <input type="checkbox" />
              <span>{student.roll}</span>
            </div>

            <div className="roll-student">
              <div className="roll-avatar">{student.initials}</div>

              <div>
                <strong>{student.name}</strong>

                <span>ID: {student.id}</span>

                <span>• {student.route}</span>
              </div>
            </div>

            <div>
              <span
                className={`roll-status ${
                  student.status.startsWith("Absent") ? "absent" : "present"
                }`}
              >
                ● {student.status}
              </span>
            </div>

            <div className="roll-reason">{student.reason}</div>

            <div className="guardian-check">{student.guardian}</div>

            <button
              className="roll-more"
              onClick={() => console.log("Attendance actions:", student.id)}
            >
              <MoreVertical size={14} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
