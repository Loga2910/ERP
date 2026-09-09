import {
  Search,
  SlidersHorizontal,
  Download,
  Columns3,
  ChevronDown,
} from "lucide-react";

export default function StudentFilters({
  search,
  setSearch,
  year,
  setYear,
  classFilter,
  setClassFilter,
  section,
  setSection,
  status,
  setStatus,
  sort,
  setSort,
  onExport,
}) {
  return (
    <div className="student-toolbar">
      <div className="student-filter-row">
        {/* Search */}

        <div className="student-search">
          <Search size={14} />

          <input
            type="text"
            placeholder="Search students by name, ID..."
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />
        </div>

        {/* Year */}

        <FilterSelect
          value={year}
          onChange={setYear}
          options={["2026 - 27", "2025 - 26", "2024 - 25"]}
        />

        {/* Class */}

        <FilterSelect
          value={classFilter}
          onChange={setClassFilter}
          options={["Class (All)", "Grade 6", "Grade 7", "Grade 8"]}
        />

        {/* Section */}

        <FilterSelect
          value={section}
          onChange={setSection}
          options={["Section (All)", "A", "B", "C"]}
        />

        {/* Status */}

        <FilterSelect
          value={status}
          onChange={setStatus}
          options={["Status (All)", "Active", "Inactive"]}
        />

        {/* Sort */}

        <FilterSelect
          value={sort}
          onChange={setSort}
          options={["Sort: Name (A-Z)", "Sort: Name (Z-A)"]}
          icon={<SlidersHorizontal size={13} />}
        />
      </div>

      {/* Actions */}

      <div className="student-actions">
        <button className="bulk-action-button">
          Bulk Actions (0)
          <ChevronDown size={12} />
        </button>

        <button className="export-button" onClick={onExport}>
          <Download size={13} />
          Export
        </button>

        <button className="columns-button" title="Column settings">
          <Columns3 size={14} />
        </button>
      </div>
    </div>
  );
}

function FilterSelect({ value, onChange, options, icon }) {
  return (
    <div className="student-filter-select">
      {icon}

      <select value={value} onChange={(event) => onChange(event.target.value)}>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>

      {!icon && <ChevronDown size={11} />}
    </div>
  );
}
