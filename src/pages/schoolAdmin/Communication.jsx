import { useMemo, useState } from "react";

import CommunicationHeader from "../../components/communication/CommunicationHeader";

import CommunicationScopeBanner from "../../components/communication/CommunicationScopeBanner";

import CommunicationStats from "../../components/communication/CommunicationStats";

import CommunicationTabs from "../../components/communication/CommunicationTabs";

import AnnouncementFilters from "../../components/communication/AnnouncementFilters";

import AnnouncementList from "../../components/communication/AnnouncementList";

import BroadcastComposer from "../../components/communication/BroadcastComposer";

import FailedDeliveries from "../../components/communication/FailedDeliveries";

import {
  communicationStats,
  announcements,
  failedDeliveries,
} from "../../components/communication/communicationData";

import "../../styles/communication.css";

export default function Communication() {
  const [activeTab, setActiveTab] = useState("broadcasts");

  const [search, setSearch] = useState("");

  const [title, setTitle] = useState(
    "Early Dismissal Advisory – Severe Weather",
  );

  const [audience, setAudience] = useState("Parents");

  const [channels, setChannels] = useState(["In-App", "Email", "SMS"]);

  const [priority, setPriority] = useState("Standard Informative");

  const [message, setMessage] = useState(
    "Dear Parents,\n\nDue to escalating weather conditions, please follow the latest school advisory and dismissal instructions.",
  );

  const filteredAnnouncements = useMemo(() => {
    if (!search.trim()) {
      return announcements;
    }

    const query = search.toLowerCase();

    return announcements.filter(
      (item) =>
        item.title.toLowerCase().includes(query) ||
        item.author.toLowerCase().includes(query) ||
        item.description.toLowerCase().includes(query),
    );
  }, [search]);

  const toggleChannel = (channel) => {
    setChannels((current) =>
      current.includes(channel)
        ? current.filter((item) => item !== channel)
        : [...current, channel],
    );
  };

  const createAnnouncement = () => {
    document.querySelector(".broadcast-composer")?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  };

  const editAnnouncement = (item) => {
    setTitle(item.title);
    setAudience(item.audience);

    alert("Announcement loaded into the composer.");
  };

  const duplicateAnnouncement = (item) => {
    setTitle(`${item.title} - Copy`);

    setMessage(item.description);

    alert("Announcement duplicated into the composer.");
  };

  const scheduleAnnouncement = () => {
    if (!title.trim()) {
      alert("Please enter an announcement title.");
      return;
    }

    alert(`Announcement scheduled for ${audience}.`);
  };

  const sendBroadcast = () => {
    if (!title.trim()) {
      alert("Please enter an announcement title.");
      return;
    }

    if (!message.trim()) {
      alert("Please enter message content.");
      return;
    }

    if (channels.length === 0) {
      alert("Select at least one communication channel.");
      return;
    }

    alert(`Broadcast ready for ${audience} via ${channels.join(", ")}.`);
  };

  const retryDelivery = (delivery) => {
    alert(`Retry queued for ${delivery.recipient}.`);
  };

  return (
    <div className="communication-page">
      <CommunicationHeader onCreateAnnouncement={createAnnouncement} />

      <CommunicationScopeBanner />

      <CommunicationStats stats={communicationStats} />

      <CommunicationTabs activeTab={activeTab} setActiveTab={setActiveTab} />

      {activeTab === "broadcasts" && (
        <div className="communication-main-grid">
          <main className="announcements-section">
            <div className="section-heading">
              <div>
                <span>LIVE DISPATCHES</span>

                <h2>Active & Scheduled Announcements</h2>

                <p>
                  Live dispatches across school mobile apps, parent portal,
                  email dispatch, and records.
                </p>
              </div>

              <small>
                Showing 4 of 28
                <br />
                Announcements & Records
              </small>
            </div>

            <AnnouncementFilters search={search} setSearch={setSearch} />

            <AnnouncementList
              announcements={filteredAnnouncements}
              onEdit={editAnnouncement}
              onDuplicate={duplicateAnnouncement}
            />
          </main>

          <aside className="communication-right-column">
            <BroadcastComposer
              title={title}
              setTitle={setTitle}
              audience={audience}
              setAudience={setAudience}
              channels={channels}
              toggleChannel={toggleChannel}
              priority={priority}
              setPriority={setPriority}
              message={message}
              setMessage={setMessage}
              onSchedule={scheduleAnnouncement}
              onBroadcast={sendBroadcast}
            />

            <FailedDeliveries
              deliveries={failedDeliveries}
              onRetry={retryDelivery}
            />
          </aside>
        </div>
      )}

      {activeTab === "automation" && (
        <div className="communication-placeholder">
          <span>AUTOMATION ENGINE</span>

          <h2>Automated Event Triggers</h2>

          <p>
            Configure certified event-driven notifications for attendance,
            examinations, fees, transport, PTM scheduling and institutional
            workflows.
          </p>

          <button
            onClick={() => alert("Automation configuration will open here.")}
          >
            Manage Triggers
          </button>
        </div>
      )}

      {activeTab === "audit" && (
        <div className="communication-placeholder">
          <span>DELIVERY AUDIT</span>

          <h2>Delivery Logs & Audit Trail</h2>

          <p>
            Track dispatches, delivery status, read confirmations, retries and
            compliance audit events.
          </p>

          <button onClick={() => alert("Audit log viewer will open here.")}>
            Open Audit Trail
          </button>
        </div>
      )}

      {activeTab === "sms" && (
        <div className="communication-placeholder">
          <span>GATEWAY</span>

          <h2>SMS Gateway</h2>

          <p>
            Monitor DLT-approved SMS templates, delivery health, credits and
            gateway synchronization.
          </p>

          <button onClick={() => alert("SMS Gateway console will open here.")}>
            Open Gateway Console
          </button>
        </div>
      )}
    </div>
  );
}
