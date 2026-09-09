import { Search, Bell, Plus, ChevronDown } from "lucide-react";

import { useAuth } from "../../hooks/useAuth";

export default function Header() {
  const { user } = useAuth();

  const getInitials = (name = "") => {
    return name
      .split(" ")
      .map((word) => word[0])
      .slice(0, 2)
      .join("")
      .toUpperCase();
  };

  return (
    <header className="app-header">
      {/* =========================
          SEARCH
      ========================== */}

      <div className="header-search">
        <Search size={16} strokeWidth={1.8} />

        <input
          type="text"
          placeholder="Search students, faculty, records..."
          aria-label="Search"
        />
      </div>

      {/* =========================
          HEADER ACTIONS
      ========================== */}

      <div className="header-actions">
        {/* Notifications */}

        <button
          type="button"
          className="header-icon-button notification-button"
          aria-label="Notifications"
        >
          <Bell size={17} strokeWidth={1.8} />

          <span className="notification-dot" />
        </button>

        {/* Quick Action */}

        <button type="button" className="quick-action-button">
          <Plus size={15} strokeWidth={2} />

          <span>Quick Action</span>
        </button>

        {/* Add Student */}

        

        {/* User */}

        <div className="header-profile">
          <div className="profile-avatar">{getInitials(user?.name)}</div>

          <div className="profile-details">
            <span className="profile-name">{user?.name || "User"}</span>

            <span className="profile-role">
              {user?.role === "SCHOOL_ADMIN"
                ? "School Administrator"
                : user?.role === "SUPER_ADMIN"
                  ? "Super Administrator"
                  : "Teacher"}
            </span>
          </div>

          <ChevronDown size={14} className="profile-chevron" />
        </div>
      </div>
    </header>
  );
}
