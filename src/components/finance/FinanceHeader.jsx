import { Download, Plus, SlidersHorizontal } from "lucide-react";

export default function FinanceHeader({ onExport, onRecordPayment }) {
  return (
    <div className="finance-header">
      <div className="finance-header-left">
        <div className="finance-breadcrumb">
          <span>Finance & Fees</span>
          <b>›</b>
          <strong>Fee Console & Billing</strong>
          <em>AY 2026–27</em>
        </div>

        <h1>
          Student Fee Management
          <br />& Revenue Collection
        </h1>

        <p>
          Configure fee structures, track term invoices, record counter
          receipts, and manage concession governance across active cohorts.
        </p>
      </div>

      <div className="finance-header-actions">
        <button
          className="finance-outline-button"
          onClick={() => console.log("Open Fee Structure Setup")}
        >
          <SlidersHorizontal size={12} />
          Fee Structure Setup
        </button>

        <button className="finance-outline-button" onClick={onExport}>
          <Download size={12} />
          Export Dues Ledger
        </button>

        <button className="finance-primary-button" onClick={onRecordPayment}>
          <Plus size={13} />
          Record Counter Payment
        </button>
      </div>
    </div>
  );
}
