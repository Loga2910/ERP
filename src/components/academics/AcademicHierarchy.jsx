import { FileText, CheckCircle2 } from "lucide-react";

import { transcriptSubjects } from "./academicData";

export default function TranscriptPreview() {
  return (
    <div className="transcript-preview">
      <div className="transcript-header">
        <div>
          <span>LIVE TRANSCRIPT PREVIEW</span>

          <strong>Sample ID: #BT-2026-104</strong>
        </div>

        <FileText size={13} />
      </div>

      <div className="transcript-school">
        <div className="transcript-logo">B+</div>

        <div>
          <strong>
            Brightfield
            <br />
            International
          </strong>

          <span>
            Term 1 Progress
            <br />
            Report
          </span>
        </div>

        <div className="transcript-grade">
          <span>GPA</span>
          <strong>3.92</strong>
        </div>
      </div>

      <div className="transcript-student">
        <span>
          Student: <strong>Aarav Kumar</strong>
        </span>

        <span>
          Class: <strong>10-A (Roll 12)</strong>
        </span>
      </div>

      <div className="transcript-subjects">
        {transcriptSubjects.map((subject) => (
          <div key={subject.code}>
            <span>
              {subject.subject}({subject.code})
            </span>

            <strong>
              {subject.marks}({subject.grade})
            </strong>
          </div>
        ))}
      </div>

      <div className="teacher-remark">
        <span>Class Teacher Remarks:</span>

        <p>
          “Consistent performance in analytical subjects; strong participation
          in Model UN.”
        </p>
      </div>

      <div className="transcript-footer">
        <CheckCircle2 size={11} />

        <span>Verified Academic Record</span>
      </div>
    </div>
  );
}
