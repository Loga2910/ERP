import { ChevronLeft, ChevronRight } from "lucide-react";

export default function EmployeePagination({ page, setPage }) {
  return (
    <div className="employee-pagination">
      <span>
        Showing <strong>1–6</strong> of <strong>86</strong> staff members
      </span>

      <div className="employee-pagination-controls">
        <button
          disabled={page === 1}
          onClick={() => setPage(Math.max(1, page - 1))}
        >
          <ChevronLeft size={12} />
        </button>

        {[1, 2, 3].map((number) => (
          <button
            key={number}
            className={page === number ? "active" : ""}
            onClick={() => setPage(number)}
          >
            {number}
          </button>
        ))}

        <span>...</span>

        <button onClick={() => setPage(Math.min(15, page + 1))}>
          <ChevronRight size={12} />
        </button>
      </div>
    </div>
  );
}
