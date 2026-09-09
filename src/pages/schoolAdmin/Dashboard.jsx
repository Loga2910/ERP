import { Users, UserRoundCog, ClipboardCheck, Wallet } from "lucide-react";

import DashboardHeader from "../../components/dashboard/DashboardHeader";
import DashboardStatCard from "../../components/dashboard/DashboardStatCard";
import AttentionCard from "../../components/dashboard/AttentionCard";
import OperationsCard from "../../components/dashboard/OperationsCard";
import UpcomingSchedule from "../../components/dashboard/UpcomingSchedule";
import AcademicProgress from "../../components/dashboard/AcademicProgress";

export default function Dashboard() {
  return (
    <div className="school-admin-dashboard">
      {/* ==================================
          HEADER
      =================================== */}

      <DashboardHeader />

      {/* ==================================
          OVERVIEW
      =================================== */}

      <section className="dashboard-stats">
        <DashboardStatCard
          title="Students"
          subtitle="Total Enrolled"
          value="18,248"
          footer="active"
          footerValue="+6.4%"
          icon={Users}
          iconType="positive"
        />

        <DashboardStatCard
          title="Employees"
          subtitle="Faculty & Staff"
          value="47"
          footer="54 Support & Admin"
          footerValue="52 Teaching"
          icon={UserRoundCog}
        />

        <DashboardStatCard
          title="Attendance"
          subtitle="Live Campus Presence"
          value="71%"
          footer="1,173 Present Today"
          footerValue="+0.4%"
          icon={ClipboardCheck}
          iconType="positive"
        />

        <DashboardStatCard
          title="Fee Collections"
          subtitle="Term 2 Progress"
          value="$428.6k"
          footer="Shifts overdue accounts"
          footerValue="81.4%"
          icon={Wallet}
          iconType="warning"
        />
      </section>

      {/* ==================================
          ATTENTION
      =================================== */}

      <section className="dashboard-section">
        <div className="dashboard-section-header">
          <div className="section-title-row">
            <span className="attention-indicator" />

            <h2>Needs Attention Today</h2>

            <span className="critical-count">3 Critical Action Items</span>
          </div>

          <span className="refresh-text">Refresh activity stream</span>
        </div>

        <div className="attention-grid">
          <AttentionCard
            category="PENDING APPROVALS"
            categoryType="purple"
            status="3 Waiting"
            title="Concession Petition: Lucas Vance"
            description="Sibling fee 20% discount request (CBE concession) + 2 brothers..."
            meta="Grade 7 • Affiliated Leader • $411"
            action="Review & Sign Off"
          />

          <AttentionCard
            category="ATTENDANCE DISCREPANCY"
            categoryType="orange"
            status="Requires Sign-Off"
            title="Homeroom 10-B Override Request"
            description="3 homeroom entries pending sign-off. Ms. Davis requested..."
            meta="Homeroom 10-B • Discontinued"
            action="Resolve Roster"
          />

          <AttentionCard
            category="FEE ISSUES"
            categoryType="orange"
            status="12 Overdue"
            title="Urgent Fee Reconciliation"
            description="$34.2k overdue balance past 60-day cut-off..."
            meta="Reconciliation queue • 4 batches"
            action="Inspect Accounts"
          />
        </div>
      </section>

      {/* ==================================
          OPERATIONS + SCHEDULE
      =================================== */}

      <section className="dashboard-lower-grid">
        <div className="operations-section">
          <div className="dashboard-section-header">
            <div>
              <h2>Today's Operations</h2>

              <p>
                Live operational overview across academic buildings and
                facilities
              </p>
            </div>

            <button className="report-button">Submit a Report</button>
          </div>

          <div className="operations-grid">
            <OperationsCard
              type="ATTENDANCE"
              title="28 / 32 Locked"
              description="4 sections awaiting final approval"
              status="87.5%"
              statusType="positive"
            />

            <OperationsCard
              type="ACTIVE PERIOD"
              title="API & Schedules"
              description="Building G, 01–0 • Room 204"
              status="Period 4"
            />

            <OperationsCard
              type="BROADCAST"
              title="PTM Conference Schedule"
              description="Dispatched via Dynamics SMS + ParentApp + Portal"
              status="Dispatched"
              statusType="positive"
            />
          </div>

          <div className="operations-footer">
            <span>
              Biometric gates · West Gate (Active) · East Gate (Active) · South
              Bus Loop (Completed)
            </span>

            <button>View master schedule →</button>
          </div>

          <AcademicProgress />
        </div>

        <UpcomingSchedule />
      </section>
    </div>
  );
}
