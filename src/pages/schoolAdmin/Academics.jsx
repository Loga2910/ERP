import { useState } from "react";

import { Download, Plus } from "lucide-react";

import AcademicTabs from "../../components/academics/AcademicTabs";
import AcademicStats from "../../components/academics/AcademicStats";
import AcademicHierarchy from "../../components/academics/AcademicHierarchy";
import ExamFilters from "../../components/academics/ExamFilters";
import ExamSchedule from "../../components/academics/ExamSchedule";
import ReportAutomation from "../../components/academics/ReportAutomation";
import TranscriptPreview from "../../components/academics/TranscriptPreview";

import {
  academicStats,
  examSchedule,
} from "../../components/academics/academicData";

export default function Academics() {
  const [activeTab, setActiveTab] = useState("exams");

  const [cohort, setCohort] = useState("Grade 10 – All Sections (A, B, C)");

  const [category, setCategory] = useState("Mid-Term Theory & Practical");

  const [session, setSession] = useState("AY 2026–27 (Monsoon)");

  const exportAssessmentRegister = () => {
    const headers = [
      "Subject",
      "Code",
      "Exam Date",
      "Time",
      "Room",
      "Capacity",
      "Weightage",
      "Status",
    ];

    const rows = examSchedule.map((exam) => [
      exam.subject,
      exam.code,
      exam.date,
      exam.time,
      exam.room,
      exam.capacity,
      exam.weightage,
      exam.status,
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

    link.download = "assessment-register.csv";

    link.click();

    URL.revokeObjectURL(url);
  };

  const createExamination = () => {
    console.log("Create new examination");
  };

  return (
    <div className="academics-page">
      {/* =================================
          PAGE HEADER
      ================================= */}

      <div className="academics-header">
        <div>
          <div className="academics-breadcrumb">
            <span>Academics</span>

            <span>›</span>

            <span>Exam & Evaluation Console</span>
          </div>

          <h1>Academic Management & Examination Controller</h1>

          <p>
            Configure academic hierarchies, schedule examinations, moderate
            teacher-submitted marks, and publish official report cards.
          </p>
        </div>

        <div className="academics-header-actions">
          <button
            onClick={exportAssessmentRegister}
            className="academic-export-button"
          >
            <Download size={12} />
            Export Assessment Register
          </button>

          <button onClick={createExamination} className="create-exam-button">
            <Plus size={13} />
            Create New Examination
          </button>
        </div>
      </div>

      {/* =================================
          TABS
      ================================= */}

      <AcademicTabs activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* =================================
          STATS
      ================================= */}

      <AcademicStats stats={academicStats} />

      {/* =================================
          HIERARCHY
      ================================= */}

      <AcademicHierarchy />

      {/* =================================
          CONTENT
      ================================= */}

      <div className="academics-content-grid">
        <main>
          <div className="academic-section-heading">
            <div>
              <span>EXAMINATION MASTER</span>

              <h2>Term 1 Mid-Term Examination Master Schedule</h2>
            </div>
          </div>

          <ExamFilters
            cohort={cohort}
            setCohort={setCohort}
            category={category}
            setCategory={setCategory}
            session={session}
            setSession={setSession}
          />

          <ExamSchedule exams={examSchedule} />
        </main>

        {/* RIGHT PANEL */}

        <aside className="academics-side">
          <ReportAutomation />

          <TranscriptPreview />
        </aside>
      </div>
    </div>
  );
}
