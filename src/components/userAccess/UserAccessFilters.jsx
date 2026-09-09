import { Search, RotateCcw, Download } from "lucide-react";

export default function UserAccessFilters({ search, setSearch, onReset }) {
  return (
    <div className="ua-filters">
      <div className="ua-search">
        <Search size={12} />

        <input
          placeholder="Search user name, email, or employee UID..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <select defaultValue="all">
        <option value="all">Role: All Roles</option>
        <option>Teaching Faculty</option>
        <option>Chief Registrar</option>
        <option>Operations</option>
        <option>Parent / Guardian</option>
      </select>

      <select defaultValue="all">
        <option value="all">Scope: All</option>
        <option>Campus-Wide</option>
        <option>Department</option>
        <option>Grade / Section</option>
      </select>

      <select defaultValue="all">
        <option value="all">Status: All</option>
        <option>Active</option>
        <option>Suspended</option>
      </select>

      <button className="ua-reset" onClick={onReset} title="Reset Filters">
        <RotateCcw size={11} />
      </button>

      <button
        className="ua-export"
        onClick={() => alert("User roster CSV export started.")}
      >
        <Download size={11} />
        Export CSV
      </button>
    </div>
  );
}
