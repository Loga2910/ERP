import {
  FileText,
  GraduationCap,
  WalletCards,
  Settings,
  Download,
} from "lucide-react";

const icons = {
  board: FileText,
  exam: GraduationCap,
  finance: WalletCards,
};

export default function StatutoryBundle({ bundles }) {
  return (
    <div className="statutory-card">
      <div className="side-section-title">
        <div>
          <h2>1-Click Statutory Bundle</h2>

          <p>Scheduled monthly board compliance packs.</p>
        </div>
      </div>

      <div className="bundle-list">
        {bundles.map((bundle) => {
          const Icon = icons[bundle.icon];

          return (
            <button
              className="bundle-item"
              key={bundle.title}
              onClick={() => alert(`${bundle.title} generation started.`)}
            >
              <div className="bundle-icon">
                <Icon size={12} />
              </div>

              <div>
                <strong>{bundle.title}</strong>

                <span>{bundle.description}</span>
              </div>

              <Download size={11} />
            </button>
          );
        })}
      </div>

      <button
        className="configure-schedules"
        onClick={() => alert("Automated report schedules opened.")}
      >
        <Settings size={10} />
        Configure Automated Schedules
      </button>
    </div>
  );
}
