import { Search, SlidersHorizontal, ChevronDown } from "lucide-react";

export default function EmployeeFilters({
  search,
  setSearch,
  department,
  setDepartment,
  status,
  setStatus,
  sort,
  setSort,
}) {
  return (
    <div className="employee-filter-bar">
      <div className="employee-filters">
        {/* Search */}

        <div className="employee-search">
          <Search size={13} />

          <input
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Search employee name, staff code..."
          />
        </div>

        {/* Department */}

        <FilterSelect
          value={department}
          onChange={setDepartment}
          options={[
            "All Departments",
            "Physics",
            "Mathematics",
            "Admissions",
            "History & Civics",
            "English",
            "Facilities",
          ]}
        />

        {/* Status */}

        <FilterSelect
          value={status}
          onChange={setStatus}
          options={["All Status", "Active", "Inactive"]}
        />

        {/* Sort */}

        <FilterSelect
          value={sort}
          onChange={setSort}
          options={["Sort: Name (A-Z)", "Sort: Name (Z-A)"]}
          icon={<SlidersHorizontal size={12} />}
        />
      </div>
    </div>
  );
}

function FilterSelect({ value, onChange, options, icon }) {
  return (
    <div className="employee-filter-select">
      {icon}

      <select value={value} onChange={(event) => onChange(event.target.value)}>
        {options.map((option) => (
          <option value={option} key={option}>
            {option}
          </option>
        ))}
      </select>

      {!icon && <ChevronDown size={10} />}
    </div>
  );
}
