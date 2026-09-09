import { useState } from "react";

import ReportsHeader from "../../components/reports/ReportsHeader";

import ReportsGovernanceBanner from "../../components/reports/ReportsGovernanceBanner";

import ReportsTabs from "../../components/reports/ReportsTabs";

import ReportsFilters from "../../components/reports/ReportsFilters";

import ReportsStats from "../../components/reports/ReportsStats";

import CensusTable from "../../components/reports/CensusTable";

import StatutoryBundle from "../../components/reports/StatutoryBundle";

import ExportAudit from "../../components/reports/ExportAudit";

import {
  reportStats,
  censusRows,
  statutoryBundles,
  auditTrail,
} from "../../components/reports/reportsData";

import "../../styles/reports.css";

export default function Reports() {
  const [activeTab, setActiveTab] = useState("census");

  const exportReport = (format) => {
    alert(`${format} report export started.`);
  };

  const quickExport = () => {
    alert("Preparing institutional summary package...");
  };

  return (
    <div className="reports-page">
      <ReportsHeader onQuickExport={quickExport} />

      <ReportsGovernanceBanner />

      <ReportsTabs activeTab={activeTab} setActiveTab={setActiveTab} />

      {activeTab === "census" && (
        <>
          <ReportsFilters onExport={exportReport} />

          <ReportsStats stats={reportStats} />

          <div className="reports-main-grid">
            <CensusTable rows={censusRows} />

            <div className="reports-right-column">
              <StatutoryBundle bundles={statutoryBundles} />

              <ExportAudit auditTrail={auditTrail} />
            </div>
          </div>
        </>
      )}

      {activeTab === "staff" && (
        <div className="reports-placeholder">
          <span>EIS</span>

          <h2>Staff & Faculty Matrix</h2>

          <p>
            Employee distribution, designation, department and faculty
            compliance reports.
          </p>

          <button onClick={() => alert("Staff matrix report opened.")}>
            Open Staff Reports
          </button>
        </div>
      )}

      {activeTab === "attendance" && (
        <div className="reports-placeholder">
          <span>ATTENDANCE</span>

          <h2>Attendance Registers</h2>

          <p>
            Daily, monthly, section-wise and statutory attendance registers.
          </p>

          <button onClick={() => alert("Attendance reports opened.")}>
            Open Attendance Reports
          </button>
        </div>
      )}

      {activeTab === "academic" && (
        <div className="reports-placeholder">
          <span>ACADEMICS</span>

          <h2>Academic Gazette & Moderation</h2>

          <p>
            Examination results, moderation, transcripts and academic compliance
            reports.
          </p>

          <button onClick={() => alert("Academic reports opened.")}>
            Open Academic Reports
          </button>
        </div>
      )}
    </div>
  );
}
