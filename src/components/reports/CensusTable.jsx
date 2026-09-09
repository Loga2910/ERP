export default function CensusTable({ rows }) {
  return (
    <div className="census-card">
      <div className="census-heading">
        <div>
          <div className="census-number">01</div>

          <div>
            <h2>Senior Secondary Wing Class-Wise Census</h2>

            <p>Real-time roll call level institutional profile.</p>
          </div>
        </div>

        <span>Showing 5 of 18 sections</span>
      </div>

      <div className="census-table-wrapper">
        <table className="census-table">
          <thead>
            <tr>
              <th>GRADE & SECTION</th>
              <th>CLASS TEACHER</th>
              <th>CAP.</th>
              <th>STRENGTH</th>
              <th>GIRLS</th>
              <th>BOYS</th>
              <th>NEW ADM.</th>
              <th>ATT. AVG</th>
            </tr>
          </thead>

          <tbody>
            {rows.map((row) => (
              <tr key={row.section}>
                <td>
                  <div className="census-section">
                    <i />
                    {row.section}
                  </div>
                </td>

                <td>
                  <strong>{row.teacher}</strong>

                  <small>{row.subject}</small>
                </td>

                <td>{row.capacity}</td>

                <td>
                  <strong>{row.strength}</strong>
                </td>

                <td className="teal-number">{row.girls}</td>

                <td className="teal-number">{row.boys}</td>

                <td>{row.newAdmissions}</td>

                <td className="attendance-number">{row.attendance}%</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
