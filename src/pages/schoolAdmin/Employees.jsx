import { useMemo, useState } from "react";

import { Upload, Download, Plus } from "lucide-react";

import EmployeeStats from "../../components/employees/EmployeeStats";
import EmployeeTabs from "../../components/employees/EmployeeTabs";
import EmployeeFilters from "../../components/employees/EmployeeFilters";
import EmployeeTable from "../../components/employees/EmployeeTable";
import EmployeePagination from "../../components/employees/EmployeePagination";
import EmployeeSystemNote from "../../components/employees/EmployeeSystemNote";

import { employees } from "../../components/employees/employeeData";

export default function Employees() {
  const [search, setSearch] = useState("");

  const [activeTab, setActiveTab] = useState("All Staff");

  const [department, setDepartment] = useState("All Departments");

  const [status, setStatus] = useState("All Status");

  const [sort, setSort] = useState("Sort: Name (A-Z)");

  const [selectedEmployees, setSelectedEmployees] = useState([]);

  const [page, setPage] = useState(1);

  const filteredEmployees = useMemo(() => {
    let result = [...employees];

    /* TAB */

    if (activeTab !== "All Staff") {
      result = result.filter((employee) => employee.type === activeTab);
    }

    /* SEARCH */

    if (search.trim()) {
      const query = search.toLowerCase();

      result = result.filter(
        (employee) =>
          employee.name.toLowerCase().includes(query) ||
          employee.id.toLowerCase().includes(query) ||
          employee.email.toLowerCase().includes(query),
      );
    }

    /* DEPARTMENT */

    if (department !== "All Departments") {
      result = result.filter(
        (employee) =>
          employee.department
            .toLowerCase()
            .includes(department.toLowerCase()) ||
          employee.designation.toLowerCase().includes(department.toLowerCase()),
      );
    }

    /* STATUS */

    if (status !== "All Status") {
      result = result.filter((employee) => employee.status === status);
    }

    /* SORT */

    result.sort((a, b) => {
      if (sort === "Sort: Name (A-Z)") {
        return a.name.localeCompare(b.name);
      }

      return b.name.localeCompare(a.name);
    });

    return result;
  }, [search, activeTab, department, status, sort]);

  const handleExport = () => {
    const headers = [
      "Staff Member",
      "Staff Code",
      "Type",
      "Department",
      "Designation",
      "Role Scope",
      "Status",
    ];

    const rows = filteredEmployees.map((employee) => [
      employee.name,
      employee.id,
      employee.type,
      employee.department,
      employee.designation,
      employee.roleScope,
      employee.status,
    ]);

    const csv = [headers, ...rows]
      .map((row) =>
        row.map((value) => `"${String(value).replace(/"/g, '""')}"`).join(","),
      )
      .join("\n");

    const blob = new Blob([csv], {
      type: "text/csv;charset=utf-8;",
    });

    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");

    link.href = url;

    link.download = "employee-roster.csv";

    link.click();

    URL.revokeObjectURL(url);
  };

  return (
    <div className="employees-page">
      {/* =================================
          BREADCRUMB
      ================================== */}

      <div className="employee-breadcrumb">
        <span>Employees</span>

        <span>›</span>

        <span>Directory</span>

        <span className="eis-badge">EIS ROSTER</span>
      </div>

      {/* =================================
          HEADER
      ================================== */}

      <div className="employees-header">
        <div>
          <h1>Employees & Staff</h1>

          <p>
            Manage faculty, administrative personnel, and support staff records
            across academic departments and campus operations.
          </p>
        </div>

        <div className="employee-header-actions">
          <button className="employee-link-action">
            <Upload size={12} />
            Bulk Import
          </button>

          <button className="employee-link-action" onClick={handleExport}>
            <Download size={12} />
            Export Roster
          </button>

          <button className="add-employee-button">
            <Plus size={13} />
            Add Employee
          </button>
        </div>
      </div>

      {/* =================================
          STATS
      ================================== */}

      <EmployeeStats />

      {/* =================================
          TABS
      ================================== */}

      <div className="employee-tabs-row">
        <EmployeeTabs activeTab={activeTab} setActiveTab={setActiveTab} />

        <span className="biometric-status">
          <span />
          EIS Biometric Sync: Today, 08:30 AM
        </span>
      </div>

      {/* =================================
          FILTERS
      ================================== */}

      <EmployeeFilters
        search={search}
        setSearch={setSearch}
        department={department}
        setDepartment={setDepartment}
        status={status}
        setStatus={setStatus}
        sort={sort}
        setSort={setSort}
      />

      {/* =================================
          TABLE
      ================================== */}

      <EmployeeTable
        employees={filteredEmployees}
        selectedEmployees={selectedEmployees}
        setSelectedEmployees={setSelectedEmployees}
      />

      {/* =================================
          PAGINATION
      ================================== */}

      <EmployeePagination page={page} setPage={setPage} />

      {/* =================================
          SYSTEM NOTE
      ================================== */}

      <EmployeeSystemNote />
    </div>
  );
}
