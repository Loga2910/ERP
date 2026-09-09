import { MoreVertical, Pencil } from "lucide-react";

export default function StudentTable({
  students,
  selectedStudents,
  setSelectedStudents,
}) {
  const toggleStudent = (id) => {
    setSelectedStudents((current) =>
      current.includes(id)
        ? current.filter((studentId) => studentId !== id)
        : [...current, id],
    );
  };

  const toggleAll = () => {
    if (selectedStudents.length === students.length) {
      setSelectedStudents([]);
    } else {
      setSelectedStudents(students.map((student) => student.id));
    }
  };

  return (
    <div className="student-table-wrapper">
      <table className="student-table">
        <thead>
          <tr>
            <th>
              <input
                type="checkbox"
                checked={
                  students.length > 0 &&
                  selectedStudents.length === students.length
                }
                onChange={toggleAll}
              />
            </th>

            <th>STUDENT</th>
            <th>STUDENT ID</th>
            <th>CLASS</th>
            <th>SECTION</th>
            <th>STATUS</th>
            <th>ADMISSION INFORMATION</th>
            <th>ACTIONS</th>
          </tr>
        </thead>

        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td>
                <input
                  type="checkbox"
                  checked={selectedStudents.includes(student.id)}
                  onChange={() => toggleStudent(student.id)}
                />
              </td>

              {/* Student */}

              <td>
                <div className="student-person">
                  <div className="student-avatar">{student.avatar}</div>

                  <div className="student-person-info">
                    <strong>{student.name}</strong>

                    <span>{student.email}</span>
                  </div>
                </div>
              </td>

              {/* ID */}

              <td>
                <span className="student-id">{student.id}</span>
              </td>

              {/* Class */}

              <td>{student.className}</td>

              {/* Section */}

              <td>{student.section}</td>

              {/* Status */}

              <td>
                <span
                  className={`student-status ${
                    student.status === "Active" ? "active" : "inactive"
                  }`}
                >
                  <span />
                  {student.status}
                </span>
              </td>

              {/* Admission */}

              <td>
                <div className="admission-info">
                  <strong>{student.admissionId}</strong>

                  <span>{student.admissionType}</span>
                </div>
              </td>

              {/* Actions */}

              <td>
                <div className="student-row-actions">
                  <button
                    className="view-profile-button"
                    onClick={() => console.log("View profile:", student.id)}
                  >
                    View
                    <br />
                    Profile
                  </button>

                  <button
                    className="table-icon-button"
                    title="Edit student"
                    onClick={() => console.log("Edit:", student.id)}
                  >
                    <Pencil size={13} />
                  </button>

                  <button
                    className="table-icon-button"
                    title="More actions"
                    onClick={() => console.log("More actions:", student.id)}
                  >
                    <MoreVertical size={14} />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
