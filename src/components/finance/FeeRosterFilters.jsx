import { Search, ChevronDown, SlidersHorizontal } from "lucide-react";

export default function FeeRosterFilters({
  search,
  setSearch,
  classFilter,
  setClassFilter,
  feeType,
  setFeeType,
  dueFilter,
  setDueFilter,
}) {
  return (
    <div className="fee-roster-filters">
      <div className="fee-filter-search">
        <Search size={12} />

        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search student..."
        />
      </div>

      <select
        value={classFilter}
        onChange={(e) => setClassFilter(e.target.value)}
      >
        <option value="All Classes">All Classes</option>
        <option value="Grade 6">Grade 6</option>
        <option value="Grade 7">Grade 7</option>
        <option value="Grade 8">Grade 8</option>
        <option value="Grade 9">Grade 9</option>
        <option value="Grade 10">Grade 10</option>
        <option value="Grade 11">Grade 11</option>
      </select>

      <select value={feeType} onChange={(e) => setFeeType(e.target.value)}>
        <option>Tuition & Composite</option>
        <option>Tuition Fee</option>
        <option>Transport Fee</option>
        <option>Activity Fee</option>
        <option>Lab Fee</option>
      </select>

      <select value={dueFilter} onChange={(e) => setDueFilter(e.target.value)}>
        <option>Highest Due First</option>
        <option>Lowest Due First</option>
        <option>Overdue First</option>
        <option>Recently Paid</option>
      </select>

      <button
        className="filter-icon-button"
        onClick={() => console.log("Advanced filters")}
      >
        <SlidersHorizontal size={12} />
      </button>
    </div>
  );
}
