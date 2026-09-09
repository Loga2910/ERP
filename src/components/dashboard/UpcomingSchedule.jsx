export default function UpcomingSchedule() {
  return (
    <div className="upcoming-card">
      <div className="section-card-header">
        <div>
          <span className="section-mini-label">Upcoming</span>

          <h2>Schedule</h2>
        </div>

        <span className="term-badge">
          Q3
          <br />
          Term
        </span>
      </div>

      <div className="schedule-list">
        <div className="schedule-item">
          <div className="schedule-item-top">
            <span className="schedule-type">EXAMINATIONS</span>

            <span className="schedule-date">Nov 28</span>
          </div>

          <strong>Mid-Term Exams Begin</strong>

          <span>Classes 9–12 across the campus</span>
        </div>

        <div className="schedule-item schedule-danger">
          <div className="schedule-item-top">
            <span className="schedule-type">IMPORTANT</span>

            <span className="schedule-date">Nov 05</span>
          </div>

          <strong>Fee Clearance Deadline</strong>

          <span>Term 2 overdue accounts</span>
        </div>
      </div>

      <button className="calendar-button">View Full Academic Calendar →</button>
    </div>
  );
}
