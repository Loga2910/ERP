import { useMemo, useState } from "react";

import StudentStats from "../../components/students/StudentStats";
import StudentFilters from "../../components/students/StudentFilters";
import StudentTable from "../../components/students/StudentTable";
import StudentPagination from "../../components/students/StudentPagination";

import { students } from "../../components/students/studentData";

export default function Students() {
  const [search, setSearch] = useState("");

  const [year, setYear] = useState("2026 - 27");

  const [classFilter, setClassFilter] = useState("Class (All)");

  const [section, setSection] = useState("Section (All)");

  const [status, setStatus] = useState("Status (All)");

  const [sort, setSort] = useState("Sort: Name (A-Z)");

  const [selectedStudents, setSelectedStudents] = useState([]);

  const [page, setPage] = useState(1);

  const filteredStudents = useMemo(() => {
    let result = [...students];

    /* Search */

    if (search.trim()) {
      const query = search.toLowerCase();

      result = result.filter(
        (student) =>
          student.name.toLowerCase().includes(query) ||
          student.id.toLowerCase().includes(query) ||
          student.email.toLowerCase().includes(query),
      );
    }

    /* Class */

    if (classFilter !== "Class (All)") {
      result = result.filter((student) => student.className === classFilter);
    }

    /* Section */

    if (section !== "Section (All)") {
      result = result.filter((student) => student.section === section);
    }

    /* Status */

    if (status !== "Status (All)") {
      result = result.filter((student) => student.status === status);
    }

    /* Sort */

    result.sort((a, b) => {
      if (sort === "Sort: Name (A-Z)") {
        return a.name.localeCompare(b.name);
      }

      return b.name.localeCompare(a.name);
    });

    return result;
  }, [search, classFilter, section, status, sort]);

  const handleExport = () => {
    const headers = [
      "Name",
      "Student ID",
      "Class",
      "Section",
      "Status",
      "Admission ID",
    ];

    const rows = filteredStudents.map((student) => [
      student.name,
      student.id,
      student.className,
      student.section,
      student.status,
      student.admissionId,
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

    link.download = "students.csv";

    link.click();

    URL.revokeObjectURL(url);
  };

  return (
    <div className="students-page">
      {/* =================================
          PAGE HEADER
      ================================== */}

      <div className="students-page-header">
        <div>
          <h1>Students</h1>

          <p>Manage student records, search, filter and take bulk actions.</p>
        </div>
      </div>

      {/* =================================
          STATISTICS
      ================================== */}

      <StudentStats />

      {/* =================================
          FILTERS
      ================================== */}

      <StudentFilters
        search={search}
        setSearch={setSearch}
        year={year}
        setYear={setYear}
        classFilter={classFilter}
        setClassFilter={setClassFilter}
        section={section}
        setSection={setSection}
        status={status}
        setStatus={setStatus}
        sort={sort}
        setSort={setSort}
        onExport={handleExport}
      />

      {/* =================================
          TABLE
      ================================== */}

      <StudentTable
        students={filteredStudents}
        selectedStudents={selectedStudents}
        setSelectedStudents={setSelectedStudents}
      />

      {/* =================================
          PAGINATION
      ================================== */}

      <StudentPagination page={page} setPage={setPage} />
    </div>
  );
}
