import { Share2 } from "lucide-react";

export default function CommunicationHeader({ onCreateAnnouncement }) {
  return (
    <div className="communication-header">
      <div className="communication-header-left">
        <div className="communication-breadcrumb">
          <span>Communication & Broadcasts</span>

          <b>›</b>

          <strong>Notification Hub & Automation</strong>

          <em>AY 2026–27</em>
        </div>

        <h1>Communication Hub & Broadcast Dispatcher</h1>

        <p>
          Official school-wide announcements, automated event notifications, and
          real-time delivery monitoring.
        </p>
      </div>

      <button
        className="communication-create-button"
        onClick={onCreateAnnouncement}
      >
        <Share2 size={12} />
        Create Announcement
      </button>
    </div>
  );
}
