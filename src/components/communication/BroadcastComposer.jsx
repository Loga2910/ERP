import { Send, Clock3, Users, Smartphone, Mail, Bell } from "lucide-react";

export default function BroadcastComposer({
  title,
  setTitle,
  audience,
  setAudience,
  channels,
  toggleChannel,
  priority,
  setPriority,
  message,
  setMessage,
  onSchedule,
  onBroadcast,
}) {
  return (
    <div className="broadcast-composer">
      <div className="composer-header">
        <div>
          <span>COMPOSE</span>

          <h2>
            Quick Broadcast
            <br />
            Composer
          </h2>

          <p>
            Compose and push instant notices to parents, teachers, and student
            cohorts with audit tracking.
          </p>
        </div>

        <b>Fast Draft</b>
      </div>

      <label>ANNOUNCEMENT TITLE</label>

      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter announcement title..."
      />

      <div className="composer-label-row">
        <label>TARGET AUDIENCE</label>

        <button
          onClick={() =>
            setAudience(audience === "All School" ? "Parents" : "All School")
          }
        >
          Select All
        </button>
      </div>

      <div className="audience-chips">
        {["Parents", "Teachers", "Grade 6", "Grade 10"].map((item) => (
          <button
            key={item}
            className={
              audience === item ? "audience-chip active" : "audience-chip"
            }
            onClick={() => setAudience(item)}
          >
            <Users size={9} />
            {item}
          </button>
        ))}

        <button
          className="audience-chip add"
          onClick={() => alert("Add cohort dialog will open here.")}
        >
          + Add Cohort
        </button>
      </div>

      <label>MULTI-CHANNEL GATEWAYS</label>

      <div className="composer-channel-list">
        <button
          className={
            channels.includes("In-App")
              ? "composer-channel active"
              : "composer-channel"
          }
          onClick={() => toggleChannel("In-App")}
        >
          <Bell size={11} />

          <span>
            <strong>In-App Notification</strong>
            <small>2,496 users • Free</small>
          </span>

          <i />
        </button>

        <button
          className={
            channels.includes("Email")
              ? "composer-channel active"
              : "composer-channel"
          }
          onClick={() => toggleChannel("Email")}
        >
          <Mail size={11} />

          <span>
            <strong>Email Digest</strong>
            <small>2,496 verified</small>
          </span>

          <i />
        </button>

        <button
          className={
            channels.includes("SMS")
              ? "composer-channel active"
              : "composer-channel"
          }
          onClick={() => toggleChannel("SMS")}
        >
          <Smartphone size={11} />

          <span>
            <strong>SMS Urgent Gateway</strong>
            <small>Est. ₹1 / recipient</small>
          </span>

          <i />
        </button>
      </div>

      <label>PRIORITY TIER</label>

      <div className="priority-options">
        <button
          className={
            priority === "Standard Informative"
              ? "priority-option active"
              : "priority-option"
          }
          onClick={() => setPriority("Standard Informative")}
        >
          Standard
          <br />
          Informative
        </button>

        <button
          className={
            priority === "High Priority Alert"
              ? "priority-option danger active"
              : "priority-option danger"
          }
          onClick={() => setPriority("High Priority Alert")}
        >
          ⚠ High Priority
          <br />
          Alert
        </button>
      </div>

      <label>MESSAGE CONTENT</label>

      <textarea
        rows="5"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Dear Parents, ..."
      />

      <div className="composer-actions">
        <button className="schedule-button" onClick={onSchedule}>
          <Clock3 size={11} />
          Schedule Later
        </button>

        <button className="broadcast-button" onClick={onBroadcast}>
          <Send size={11} />
          Send Broadcast
        </button>
      </div>
    </div>
  );
}
