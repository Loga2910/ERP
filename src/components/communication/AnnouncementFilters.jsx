
import { Search, SlidersHorizontal } from "lucide-react";

export default function AnnouncementFilters({ search, setSearch }) {
  return (
    <div className="announcement-filters">
      <div className="announcement-search">
        <Search size={12} />

        <input
          type="text"
          placeholder="Search by title, author, or keyword..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <select defaultValue="all">
        <option value="all">Audience: All School</option>
        <option>Parents</option>
        <option>Teachers</option>
        <option>Students</option>
      </select>

      <select defaultValue="all">
        <option value="all">All Channels</option>
        <option>In-App</option>
        <option>Email</option>
        <option>SMS</option>
      </select>

      <select defaultValue="all">
        <option value="all">Status: All</option>
        <option>Published</option>
        <option>Scheduled</option>
        <option>Failed</option>
      </select>

      <button
        className="announcement-filter-button"
        onClick={() => console.log("Open advanced communication filters")}
      >
        <SlidersHorizontal size={12} />
      </button>
    </div>
  );
}
