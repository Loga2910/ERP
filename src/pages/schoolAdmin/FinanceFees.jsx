// src/pages/schoolAdmin/FinanceFees.jsx

import { useMemo, useState } from "react";

import FinanceHeader from "../../components/finance/FinanceHeader";

import FinanceTabs from "../../components/finance/FinanceTabs";

import FinanceStats from "../../components/finance/FinanceStats";

import FinanceScopeBanner from "../../components/finance/FinanceScopeBanner";

import FeeRosterFilters from "../../components/finance/FeeRosterFilters";

import FeeRosterTable from "../../components/finance/FeeRosterTable";

import QuickDeskCollection from "../../components/finance/QuickDeskCollection";

import ConcessionApprovals from "../../components/finance/ConcessionApprovals";

import {
  financeStats,
  feeStudents,
  concessions,
} from "../../components/finance/financeData";

import "../../styles/finance.css";

export default function FinanceFees() {
  const [activeTab, setActiveTab] = useState("overview");

  const [search, setSearch] = useState("");

  const [classFilter, setClassFilter] = useState("All Classes");

  const [feeType, setFeeType] = useState("Tuition & Composite");

  const [dueFilter, setDueFilter] = useState("Highest Due First");

  const [selectedStudents, setSelectedStudents] = useState([]);

  const [selectedStudent, setSelectedStudent] = useState(feeStudents[0]);

  const [amount, setAmount] = useState(String(feeStudents[0].balance));

  const [paymentMode, setPaymentMode] = useState("UPI / Dynamic QR");

  const filteredStudents = useMemo(() => {
    let result = [...feeStudents];

    if (search.trim()) {
      const query = search.toLowerCase().trim();

      result = result.filter(
        (student) =>
          student.name.toLowerCase().includes(query) ||
          student.id.toLowerCase().includes(query) ||
          student.className.toLowerCase().includes(query),
      );
    }

    if (classFilter !== "All Classes") {
      result = result.filter((student) =>
        student.className.startsWith(classFilter),
      );
    }

    if (dueFilter === "Highest Due First") {
      result.sort((a, b) => b.balance - a.balance);
    } else if (dueFilter === "Lowest Due First") {
      result.sort((a, b) => a.balance - b.balance);
    } else if (dueFilter === "Overdue First") {
      result.sort(
        (a, b) =>
          Number(b.status === "Overdue") - Number(a.status === "Overdue"),
      );
    }

    return result;
  }, [search, classFilter, feeType, dueFilter]);

  const selectStudent = (student) => {
    setSelectedStudent(student);

    setAmount(String(student.balance));
  };

  const exportLedger = () => {
    const headers = [
      "Student",
      "Student ID",
      "Class",
      "Category",
      "Billed",
      "Paid",
      "Balance",
      "Status",
      "Reference",
    ];

    const rows = feeStudents.map((student) => [
      student.name,
      student.id,
      student.className,
      student.category,
      student.billed,
      student.paid,
      student.balance,
      student.status,
      student.reference,
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

    link.download = "student-fee-dues-ledger.csv";

    link.click();

    URL.revokeObjectURL(url);
  };

  const recordPayment = () => {
    console.log("Opening counter payment");

    alert("Record Counter Payment will open here.");
  };

  const confirmPayment = () => {
    if (!amount || Number(amount) <= 0) {
      alert("Enter a valid collection amount.");

      return;
    }

    console.log({
      student: selectedStudent,
      amount,
      paymentMode,
    });

    alert(
      `₹${Number(amount).toLocaleString("en-IN")} payment recorded for ${
        selectedStudent.name
      }.`,
    );
  };

  const approveConcession = (item) => {
    console.log("Approve concession:", item);

    alert(`${item.type} approved for ${item.student}.`);
  };

  const rejectConcession = (item) => {
    console.log("Reject concession:", item);

    alert(`${item.type} rejected for ${item.student}.`);
  };

  return (
    <div className="finance-page">
      <FinanceHeader onExport={exportLedger} onRecordPayment={recordPayment} />

      <FinanceTabs activeTab={activeTab} setActiveTab={setActiveTab} />

      <FinanceStats stats={financeStats} />

      <FinanceScopeBanner />

      {activeTab === "overview" && (
        <>
          <div className="finance-main-grid">
            <section className="fee-roster-card">
              <div className="fee-roster-header">
                <div>
                  <span>LIVE FEE REGISTER</span>

                  <h2>Student Fee Roster & Dues Register</h2>

                  <p>
                    Real-time balances, installment clearance, and instant desk
                    collection.
                  </p>
                </div>

                <div className="batch-session">
                  <small>Batch Session</small>

                  <strong>
                    Quarter 2
                    <br />
                    (Jul – Sep)
                  </strong>
                </div>
              </div>

              <FeeRosterFilters
                search={search}
                setSearch={setSearch}
                classFilter={classFilter}
                setClassFilter={setClassFilter}
                feeType={feeType}
                setFeeType={setFeeType}
                dueFilter={dueFilter}
                setDueFilter={setDueFilter}
              />

              <FeeRosterTable
                students={filteredStudents}
                selectedStudents={selectedStudents}
                setSelectedStudents={setSelectedStudents}
                onViewStudent={selectStudent}
              />
            </section>

            <aside>
              <QuickDeskCollection
                student={selectedStudent}
                amount={amount}
                setAmount={setAmount}
                paymentMode={paymentMode}
                setPaymentMode={setPaymentMode}
                onConfirm={confirmPayment}
              />

              <ConcessionApprovals
                concessions={concessions}
                onApprove={approveConcession}
                onReject={rejectConcession}
              />
            </aside>
          </div>
        </>
      )}

      {activeTab === "structure" && (
        <div className="finance-placeholder-panel">
          <span>CONFIGURATION</span>

          <h2>Fee Structure & Schedule</h2>

          <p>
            Configure tuition, composite, transport, laboratory and activity fee
            schedules by academic year and class.
          </p>

          <button onClick={() => console.log("Open fee structure setup")}>
            Open Fee Structure Setup
          </button>
        </div>
      )}

      {activeTab === "concessions" && (
        <ConcessionApprovals
          concessions={concessions}
          onApprove={approveConcession}
          onReject={rejectConcession}
        />
      )}

      {activeTab === "receipts" && (
        <div className="finance-placeholder-panel">
          <span>FINANCE LEDGER</span>

          <h2>Receipts & Ledger</h2>

          <p>
            View generated receipts, payment references, reconciliation status,
            and financial audit history.
          </p>

          <button onClick={exportLedger}>Export Ledger</button>
        </div>
      )}
    </div>
  );
}
