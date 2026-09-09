import {
  CreditCard,
  Smartphone,
  Banknote,
  QrCode,
  CheckCircle2,
} from "lucide-react";

import { paymentModes } from "./financeData";

export default function QuickDeskCollection({
  student,
  amount,
  setAmount,
  paymentMode,
  setPaymentMode,
  onConfirm,
}) {
  if (!student) {
    return (
      <div className="quick-desk empty">
        <div className="quick-desk-empty-icon">
          <Banknote size={18} />
        </div>

        <h3>Quick Desk Collection</h3>

        <p>Select a student from the fee roster to start a counter payment.</p>
      </div>
    );
  }

  return (
    <div className="quick-desk">
      <div className="quick-desk-header">
        <div>
          <span>QUICK DESK</span>

          <h3>Collection</h3>
        </div>

        <b className="instant-pos">Instant POS</b>
      </div>

      <div className="selected-student">
        <div className="quick-avatar">{student.initials}</div>

        <div>
          <strong>{student.name}</strong>

          <span>
            {student.id} • {student.className}
          </span>
        </div>

        <div className="quick-outstanding">
          <span>Outstanding</span>

          <strong>₹{student.balance.toLocaleString("en-IN")}</strong>
        </div>
      </div>

      <label className="quick-label">COLLECTION AMOUNT (₹)</label>

      <div className="amount-input">
        <span>₹</span>

        <input
          type="number"
          min="0"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />

        <button onClick={() => setAmount(String(student.balance))}>
          Pay Full Due
        </button>
      </div>

      <label className="quick-label">PAYMENT MODE</label>

      <div className="payment-mode-grid">
        {paymentModes.map((mode) => {
          let Icon = Banknote;

          if (mode.includes("UPI")) {
            Icon = Smartphone;
          }

          if (mode.includes("POS")) {
            Icon = CreditCard;
          }

          if (mode.includes("Cheque")) {
            Icon = Banknote;
          }

          return (
            <button
              key={mode}
              className={
                paymentMode === mode ? "payment-mode active" : "payment-mode"
              }
              onClick={() => setPaymentMode(mode)}
            >
              <Icon size={11} />
              {mode}
            </button>
          );
        })}
      </div>

      <div className="transaction-reference">
        <label>TRANSACTION REFERENCE / UTR NUMBER</label>

        <input defaultValue="UPI/20260905/771010" />
      </div>

      <div className="instant-note">
        <QrCode size={13} />

        <span>
          Generate instant GST-compliant tax receipt and dispatch real-time
          confirmation.
        </span>
      </div>

      <button className="confirm-payment" onClick={onConfirm}>
        <CheckCircle2 size={13} />
        Confirm & Generate Receipt
      </button>
    </div>
  );
}
