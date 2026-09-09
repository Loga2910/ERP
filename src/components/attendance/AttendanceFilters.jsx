import { ChevronDown } from "lucide-react";

function SelectFilter({ value, onChange, options }) {
  return (
    <div className="attendance-select">
      <select value={value} onChange={(e) => onChange(e.target.value)}>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>

      <ChevronDown size={11} />
    </div>
  );
}

export default function AttendanceFilters({
  session,
  setSession,
  date,
  setDate,
  grade,
  setGrade,
  section,
  setSection,
}) {
  return (
    <div className="attendance-filters">
      <div className="attendance-filter-group">
        <label>ACADEMIC SESSION</label>

        <SelectFilter
          value={session}
          onChange={setSession}
          options={["2026 – 2027", "2025 – 2026"]}
        />
      </div>

      <div className="attendance-filter-group">
        <label>DATE OF RECORD</label>

        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>

      <div className="attendance-filter-group">
        <label>GRADE / CLASS</label>

        <SelectFilter
          value={grade}
          onChange={setGrade}
          options={[
            "Grade 6 (Middle)",
            "Grade 7",
            "Grade 8",
            "Grade 9",
            "Grade 10",
          ]}
        />
      </div>

      <div className="attendance-filter-group">
        <label>SECTION & ROOM</label>

        <SelectFilter
          value={section}
          onChange={setSection}
          options={[
            "Section A (Room 204)",
            "Section B (Room 205)",
            "Section C (Room 206)",
          ]}
        />
      </div>
    </div>
  );
}
