import { useState } from "react";

import { Download, LockKeyhole } from "lucide-react";

import AttendanceStats from "../../components/attendance/AttendanceStats";
import AttendanceTabs from "../../components/attendance/AttendanceTabs";
import AttendanceCompliance from "../../components/attendance/AttendanceCompliance";
import AttendanceFilters from "../../components/attendance/AttendanceFilters";
import DailyRoll from "../../components/attendance/DailyRoll";
import CorrectionApprovals from "../../components/attendance/CorrectionApprovals";

import {
  attendanceStudents,
  correctionRequests,
} from "../../components/attendance/attendanceData";

export default function Attendance() {
  const [activeTab, setActiveTab] = useState("Daily Overview & Class Rosters");

  const [session, setSession] = useState("2026 – 2027");

  const [date, setDate] = useState("2026-09-05");

  const [grade, setGrade] = useState("Grade 6 (Middle)");

  const [section, setSection] = useState("Section A (Room 204)");

  const exportRegister = () => {
    const headers = [
      "Roll",
      "Student",
      "Student ID",
      "Status",
      "Reason",
      "Guardian Check",
    ];

    const rows = attendanceStudents.map((student) => [
      student.roll,
      student.name,
      student.id,
      student.status,
      student.reason,
      student.guardian,
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
    link.download = "daily-attendance-register.csv";

    link.click();

    URL.revokeObjectURL(url);
  };

  const lockSections = () => {
    console.log("Lock all submitted sections");
  };

  return (
    <div className="attendance-page">
      {/* =====================================
          PAGE HEADER
      ====================================== */}

      <div className="attendance-page-header">
        <div>
          <div className="attendance-label">
            ATTENDANCE CONSOLE
            <span>● 05 Sep 2026</span>
            <span>Day 42 • Term 1</span>
          </div>

          <h1>Attendance Management & Daily Roll Call Control</h1>

          <p>
            Daily overview, section roll-call rosters, institutional audit
            locks, and teacher correction workflows.
          </p>
        </div>

        <div className="attendance-header-actions">
          <button className="attendance-export" onClick={exportRegister}>
            <Download size={12} />
            Export Daily Register
          </button>

          <button className="lock-sections-button" onClick={lockSections}>
            <LockKeyhole size={12} />
            Lock All Submitted Sections
          </button>
        </div>
      </div>

      {/* =====================================
          STATS
      ====================================== */}

      <AttendanceStats />

      {/* =====================================
          TABS
      ====================================== */}

      <AttendanceTabs activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* =====================================
          COMPLIANCE
      ====================================== */}

      <AttendanceCompliance />

      {/* =====================================
          FILTERS
      ====================================== */}

      <AttendanceFilters
        session={session}
        setSession={setSession}
        date={date}
        setDate={setDate}
        grade={grade}
        setGrade={setGrade}
        section={section}
        setSection={setSection}
      />

      {/* =====================================
          MAIN CONTENT
      ====================================== */}

      <div className="attendance-main-grid">
        <div>
          <div className="attendance-roster-meta">
            <div>
              <strong>Homeroom Lead:</strong> Ms. Elena Vance
            </div>

            <div>
              <strong>Submitted:</strong> 08:35 AM (Faculty App)
            </div>

            <div>
              <strong>Roster Filter:</strong>
            </div>

            <button className="roster-filter active">All (40)</button>

            <button className="roster-filter">Absent Only (2)</button>

            <button className="roster-filter">Late Only (1)</button>
          </div>

          <DailyRoll students={attendanceStudents} />
        </div>

        <CorrectionApprovals requests={correctionRequests} />
      </div>
    </div>
  );
}
