import { ChevronLeft, ChevronRight } from "lucide-react";

export default function StudentPagination({ page, setPage, totalPages = 5 }) {
  return (
    <div className="student-pagination">
      <span>
        Showing <strong>1–6</strong> of <strong>1,248</strong> students
      </span>

      <div className="pagination-controls">
        <button
          disabled={page === 1}
          onClick={() => setPage((current) => Math.max(1, current - 1))}
        >
          <ChevronLeft size={13} />
        </button>

        {Array.from({ length: totalPages }, (_, index) => index + 1).map(
          (number) => (
            <button
              key={number}
              className={page === number ? "pagination-active" : ""}
              onClick={() => setPage(number)}
            >
              {number}
            </button>
          ),
        )}

        <span className="pagination-more">...</span>

        <button
          onClick={() =>
            setPage((current) => Math.min(totalPages, current + 1))
          }
        >
          <ChevronRight size={13} />
        </button>
      </div>
    </div>
  );
}
