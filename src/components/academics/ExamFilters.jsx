import { ChevronDown } from "lucide-react";

function Filter({ label, value, options, onChange }) {
  return (
    <div className="exam-filter">
      <label>{label}</label>

      <div className="exam-select">
        <select value={value} onChange={(e) => onChange(e.target.value)}>
          {options.map((option) => (
            <option value={option} key={option}>
              {option}
            </option>
          ))}
        </select>

        <ChevronDown size={10} />
      </div>
    </div>
  );
}

export default function ExamFilters({
  cohort,
  setCohort,
  category,
  setCategory,
  session,
  setSession,
}) {
  return (
    <div className="exam-filters">
      <Filter
        label="TARGET COHORT"
        value={cohort}
        setValue={setCohort}
        onChange={setCohort}
        options={[
          "Grade 10 – All Sections (A, B, C)",
          "Grade 9 – All Sections",
          "Grade 11 – Science",
          "Grade 12 – Commerce",
        ]}
      />

      <Filter
        label="EXAM CATEGORY"
        value={category}
        onChange={setCategory}
        options={[
          "Mid-Term Theory & Practical",
          "Final Examination",
          "Unit Assessment",
          "Pre-Board Examination",
        ]}
      />

      <Filter
        label="SESSION"
        value={session}
        onChange={setSession}
        options={["AY 2026–27 (Monsoon)", "AY 2026–27 (Winter)"]}
      />
    </div>
  );
}
