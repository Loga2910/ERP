import { MoreVertical, Eye, Receipt } from "lucide-react";

const money = (value) => `₹${value.toLocaleString("en-IN")}`;

export default function FeeRosterTable({
  students,
  selectedStudents,
  setSelectedStudents,
  onViewStudent,
}) {
  const toggleStudent = (id) => {
    setSelectedStudents((current) => {
      if (current.includes(id)) {
        return current.filter((studentId) => studentId !== id);
      }

      return [...current, id];
    });
  };

  const toggleAll = () => {
    if (selectedStudents.length === students.length) {
      setSelectedStudents([]);
    } else {
      setSelectedStudents(students.map((student) => student.id));
    }
  };

  return (
    <div className="fee-table-wrapper">
      <div className="fee-table">
        <div className="fee-table-head">
          <div>
            <input
              type="checkbox"
              checked={
                students.length > 0 &&
                selectedStudents.length === students.length
              }
              onChange={toggleAll}
            />
          </div>

          <span>STUDENT / ID</span>
          <span>CATEGORY & FREQUENCY</span>
          <span>BILLED</span>
          <span>PAID / CONC.</span>
          <span>BALANCE DUE</span>
          <span>LATEST REF</span>
          <span>ACTIONS</span>
        </div>

        {students.map((student) => (
          <div className="fee-table-row" key={student.id}>
            <div>
              <input
                type="checkbox"
                checked={selectedStudents.includes(student.id)}
                onChange={() => toggleStudent(student.id)}
              />
            </div>

            <div className="fee-student-cell">
              <div className="fee-avatar">{student.initials}</div>

              <div>
                <strong>{student.name}</strong>

                <span>
                  {student.id} • {student.className}
                </span>
              </div>
            </div>

            <div className="fee-category">
              <strong>{student.category}</strong>

              <span>{student.frequency}</span>
            </div>

            <strong className="fee-amount">{money(student.billed)}</strong>

            <div className="paid-cell">
              <strong>{money(student.paid)}</strong>

              {student.paid === student.billed ? (
                <span className="paid-label">✓ Fully Cleared</span>
              ) : (
                <span className="partial-label">Partial</span>
              )}
            </div>

            <div className="balance-cell">
              <strong
                className={student.balance > 0 ? "has-balance" : "zero-balance"}
              >
                {money(student.balance)}
              </strong>

              <span
                className={
                  student.status === "Overdue"
                    ? "overdue-label"
                    : student.status === "Paid"
                      ? "paid-label"
                      : "due-label"
                }
              >
                {student.status === "Paid"
                  ? "Paid in Full"
                  : student.status === "Overdue"
                    ? `Overdue ${student.due}`
                    : `Due in ${student.due}`}
              </span>
            </div>

            <span className="reference">{student.reference}</span>

            <div className="fee-row-actions">
              <button
                title="View student"
                onClick={() => onViewStudent(student)}
              >
                <Eye size={11} />
              </button>

              <button
                title="Receipt"
                onClick={() => console.log("Receipt:", student.id)}
              >
                <Receipt size={11} />
              </button>

              <button
                title="More"
                onClick={() => console.log("More:", student.id)}
              >
                <MoreVertical size={12} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
