import { useMemo, useState } from "react";

import UserAccessHeader from "../../components/userAccess/UserAccessHeader";

import UserAccessScopeBanner from "../../components/userAccess/UserAccessScopeBanner";

import UserAccessStats from "../../components/userAccess/UserAccessStats";

import UserAccessTabs from "../../components/userAccess/UserAccessTabs";

import UserAccessFilters from "../../components/userAccess/UserAccessFilters";

import UserRoster from "../../components/userAccess/UserRoster";

import RoleTemplates from "../../components/userAccess/RoleTemplates";

import OrganizationalScopes from "../../components/userAccess/OrganizationalScopes";

import PermissionMatrix from "../../components/userAccess/PermissionMatrix";

import {
  userAccessStats,
  users,
  roleTemplates,
  organizationalScopes,
  permissions,
} from "../../components/userAccess/userAccessData";

import "../../styles/userAccess.css";

export default function UserAccess() {
  const [activeTab, setActiveTab] = useState("users");

  const [search, setSearch] = useState("");

  const filteredUsers = useMemo(() => {
    if (!search.trim()) {
      return users;
    }

    const query = search.toLowerCase();

    return users.filter(
      (user) =>
        user.name.toLowerCase().includes(query) ||
        user.email.toLowerCase().includes(query) ||
        user.uid.toLowerCase().includes(query) ||
        user.role.toLowerCase().includes(query) ||
        user.scope.toLowerCase().includes(query),
    );
  }, [search]);

  const resetFilters = () => {
    setSearch("");

    document.querySelectorAll(".ua-filters select").forEach((select) => {
      select.selectedIndex = 0;
    });
  };

  const inviteUser = () => {
    alert("Invite / Add User dialog will open here.");
  };

  const auditLogs = () => {
    alert("Access audit log will open here.");
  };

  const createRole = () => {
    alert("Create Custom Role dialog will open here.");
  };

  const inspectUser = (user) => {
    alert(
      `Inspecting ${user.name}\n\nRole: ${user.role}\nScope: ${user.scope}`,
    );
  };

  const editUser = (user) => {
    alert(`Edit access assignment for ${user.name}`);
  };

  return (
    <div className="ua-page">
      <UserAccessHeader
        onInvite={inviteUser}
        onAudit={auditLogs}
        onCreateRole={createRole}
      />

      <UserAccessScopeBanner />

      <UserAccessStats stats={userAccessStats} />

      <UserAccessTabs activeTab={activeTab} setActiveTab={setActiveTab} />

      {activeTab === "users" && (
        <div className="ua-content-grid">
          <main>
            <UserAccessFilters
              search={search}
              setSearch={setSearch}
              onReset={resetFilters}
            />

            <UserRoster
              users={filteredUsers}
              onInspect={inspectUser}
              onEdit={editUser}
            />
          </main>

          <aside>
            <RoleTemplates roles={roleTemplates} onCreate={createRole} />

            <OrganizationalScopes scopes={organizationalScopes} />
          </aside>
        </div>
      )}

      {activeTab === "roles" && (
        <div className="ua-full-panel">
          <RoleTemplates roles={roleTemplates} onCreate={createRole} />

          <button className="ua-big-action" onClick={createRole}>
            + Create Custom Role
          </button>
        </div>
      )}

      {activeTab === "permissions" && (
        <div className="ua-full-panel">
          <PermissionMatrix permissions={permissions} />
        </div>
      )}

      {activeTab === "scopes" && (
        <div className="ua-full-panel">
          <OrganizationalScopes scopes={organizationalScopes} />
        </div>
      )}
    </div>
  );
}
