import { NavLink } from "react-router-dom";
import { LogOut, ChevronDown } from "lucide-react";

import { navigation } from "../../config/navigation";
import { useAuth } from "../../hooks/useAuth";

export default function Sidebar() {
  const { user, logout } = useAuth();

  const menuItems = navigation[user?.role] || [];

  return (
    <aside className="sidebar">
      {/* BRAND */}
      <div className="sidebar-brand">
        <div className="brand-logo">V</div>

        <div className="brand-content">
          <div className="brand-name">Vetri+</div>

          <div className="brand-subtitle">School ERP</div>
        </div>
      </div>



      {/* NAVIGATION */}
      <div className="sidebar-navigation">
        <div className="navigation-label">MAIN MENU</div>

        <nav>
          {menuItems.map((item) => {
            const Icon = item.icon;

            return (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `sidebar-item ${isActive ? "sidebar-item-active" : ""}`
                }
              >
                <Icon size={17} strokeWidth={1.8} />

                <span>{item.label}</span>
              </NavLink>
            );
          })}
        </nav>
      </div>

      {/* BOTTOM */}
      <div className="sidebar-footer">
        <div className="navigation-label">GENERAL & ACCOUNT</div>

        <NavLink
          to="/settings"
          className={({ isActive }) =>
            `sidebar-item ${isActive ? "sidebar-item-active" : ""}`
          }
        >
          <span>Settings</span>
        </NavLink>

        <button
          type="button"
          className="sidebar-item sidebar-logout"
          onClick={logout}
        >
          <LogOut size={17} strokeWidth={1.8} />

          <span>Sign Out</span>
        </button>
      </div>
    </aside>
  );
}
