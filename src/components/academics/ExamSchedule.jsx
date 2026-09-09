import { Printer, Armchair } from "lucide-react";

export default function ExamSchedule({ exams }) {
  return (
    <section className="exam-schedule">
      <div className="exam-schedule-header">
        <div>
          <h2>Term 1 Mid-Term Examination Master Schedule</h2>

          <p>
            Manage central exam seating, halls, invigilators, and hall-ticket
            access.
          </p>
        </div>

        <div className="exam-schedule-actions">
          <button>
            <Printer size={11} />
            Print Timetable
          </button>

          <button>
            <Armchair size={11} />
            Seating Matrix
          </button>
        </div>
      </div>

      <div className="exam-schedule-filters">
        <div>
          <span>TARGET COHORT</span>
          <strong>
            Grade 10 – All
            <br />
            Sections (A, B, C)
          </strong>
        </div>

        <div>
          <span>EXAM CATEGORY</span>
          <strong>
            Mid-Term Theory &
            <br />
            Practical
          </strong>
        </div>

        <div>
          <span>SESSION</span>
          <strong>
            AY 2026–27
            <br />
            (Monsoon)
          </strong>
        </div>
      </div>

      <div className="exam-table">
        <div className="exam-table-header">
          <span>SUBJECT & CODE</span>
          <span>EXAM DATE & TIME</span>
          <span>ROOMS & CAPACITY</span>
          <span>WEIGHTAGE</span>
          <span>STATUS</span>
        </div>

        {exams.map((exam) => (
          <div className="exam-row" key={exam.code}>
            <div className="exam-subject">
              <div className="exam-subject-icon">{exam.icon}</div>

              <div>
                <strong>{exam.subject}</strong>

                <span>
                  {exam.code} • {exam.type}
                </span>
              </div>
            </div>

            <div className="exam-date">
              <strong>{exam.date}</strong>

              <span>{exam.time}</span>

              <small>({exam.duration})</small>
            </div>

            <div className="exam-room">
              <strong>{exam.room}</strong>

              <div className="capacity-bar">
                <span
                  style={{
                    width: `${(parseInt(exam.capacity) / 120) * 100}%`,
                  }}
                />
              </div>

              <small>{exam.capacity}</small>
            </div>

            <div className="exam-weight">
              <strong>{exam.weightage}</strong>

              <span>{exam.percentage}</span>
            </div>

            <div>
              <span
                className={`exam-status ${
                  exam.status.toLowerCase().includes("released")
                    ? "released"
                    : ""
                }`}
              >
                {exam.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
