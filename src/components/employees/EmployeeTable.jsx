import { MoreVertical, Pencil, FolderOpen } from "lucide-react";

export default function EmployeeTable({
  employees,
  selectedEmployees,
  setSelectedEmployees,
}) {
  const toggleEmployee = (id) => {
    setSelectedEmployees((current) =>
      current.includes(id)
        ? current.filter((employeeId) => employeeId !== id)
        : [...current, id],
    );
  };

  const toggleAll = () => {
    if (selectedEmployees.length === employees.length) {
      setSelectedEmployees([]);
    } else {
      setSelectedEmployees(employees.map((employee) => employee.id));
    }
  };

  return (
    <div className="employee-table-wrapper">
      <table className="employee-table">
        <thead>
          <tr>
            <th className="employee-check">
              <input
                type="checkbox"
                checked={
                  employees.length > 0 &&
                  selectedEmployees.length === employees.length
                }
                onChange={toggleAll}
              />
            </th>

            <th>STAFF MEMBER</th>

            <th>STAFF CODE</th>

            <th>TYPE</th>

            <th>
              DEPARTMENT &
              <br />
              DESIGNATION
            </th>

            <th>
              ALLOCATIONS /
              <br />
              ROLE SCOPE
            </th>

            <th>STATUS</th>

            <th>ACTIONS</th>
          </tr>
        </thead>

        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td className="employee-check">
                <input
                  type="checkbox"
                  checked={selectedEmployees.includes(employee.id)}
                  onChange={() => toggleEmployee(employee.id)}
                />
              </td>

              {/* STAFF */}

              <td>
                <div className="employee-person">
                  <div className="employee-avatar">{employee.initials}</div>

                  <div>
                    <strong>{employee.name}</strong>

                    <span>{employee.email}</span>
                  </div>
                </div>
              </td>

              {/* CODE */}

              <td>
                <span className="employee-code">{employee.id}</span>
              </td>

              {/* TYPE */}

              <td>
                <span
                  className={`employee-type ${employee.type
                    .toLowerCase()
                    .replace(" ", "-")}`}
                >
                  {employee.type}
                </span>
              </td>

              {/* DEPARTMENT */}

              <td>
                <div className="employee-department">
                  <strong>{employee.department}</strong>

                  <span>{employee.designation}</span>
                </div>
              </td>

              {/* ALLOCATION */}

              <td>
                <div className="employee-allocation">
                  <span>{employee.roleScope}</span>

                  <small>{employee.allocation}</small>
                </div>
              </td>

              {/* STATUS */}

              <td>
                <span className="employee-status">
                  <span />

                  {employee.status}
                </span>
              </td>

              {/* ACTIONS */}

              <td>
                <div className="employee-row-actions">
                  <button
                    className="employee-view-button"
                    onClick={() => console.log("View employee:", employee.id)}
                  >
                    View
                    <br />
                    Profile
                  </button>

                  <button
                    className="employee-icon-button"
                    onClick={() => console.log("Edit employee:", employee.id)}
                  >
                    <Pencil size={12} />
                  </button>

                  <button
                    className="employee-icon-button"
                    onClick={() =>
                      console.log("Employee documents:", employee.id)
                    }
                  >
                    <FolderOpen size={12} />
                  </button>

                  <button
                    className="employee-icon-button"
                    onClick={() => console.log("More actions:", employee.id)}
                  >
                    <MoreVertical size={13} />
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
