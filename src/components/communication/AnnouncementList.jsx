import {
  Mail,
  Smartphone,
  Bell,
  MoreVertical,
  Edit3,
  Copy,
} from "lucide-react";

function ChannelIcon({ channel }) {
  if (channel.includes("Email")) {
    return <Mail size={10} />;
  }

  if (channel.includes("SMS")) {
    return <Smartphone size={10} />;
  }

  return <Bell size={10} />;
}

export default function AnnouncementList({
  announcements,
  onEdit,
  onDuplicate,
}) {
  return (
    <div className="announcement-list">
      {announcements.map((announcement) => (
        <div
          className={
            announcement.priority === "high"
              ? "announcement-card high-priority"
              : "announcement-card"
          }
          key={announcement.id}
        >
          <div className="announcement-card-top">
            <div className="announcement-status">
              <span
                className={
                  announcement.priority === "high"
                    ? "status high"
                    : announcement.status === "Scheduled"
                      ? "status scheduled"
                      : "status published"
                }
              >
                {announcement.priority === "high"
                  ? "⚠ High Priority Alert"
                  : announcement.status}
              </span>

              <span className="announcement-date">
                {announcement.date} • {announcement.time}
              </span>

              <span className="announcement-author">
                by {announcement.author}
              </span>
            </div>

            <div className="announcement-actions">
              <button title="Edit" onClick={() => onEdit(announcement)}>
                <Edit3 size={10} />
              </button>

              <button
                title="Duplicate"
                onClick={() => onDuplicate(announcement)}
              >
                <Copy size={10} />
              </button>

              <button
                title="More"
                onClick={() => console.log("More options", announcement)}
              >
                <MoreVertical size={11} />
              </button>
            </div>
          </div>

          <h3>{announcement.title}</h3>

          <p className="announcement-description">{announcement.description}</p>

          <div className="announcement-card-bottom">
            <div className="announcement-audience">
              <span>👥</span>

              <strong>{announcement.audience}</strong>

              <small>{announcement.recipients}</small>
            </div>

            <div className="announcement-channels">
              {announcement.channels.map((channel) => (
                <span
                  key={channel}
                  className={
                    channel.includes("SMS") ? "channel sms" : "channel"
                  }
                >
                  <ChannelIcon channel={channel} />

                  {channel}
                </span>
              ))}
            </div>

            <div className="announcement-delivery">
              <span>Delivery / Read</span>

              <strong>{announcement.delivery}</strong>

              <small>({announcement.read})</small>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
