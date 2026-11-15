import { ArrowUpRight } from "lucide-react";

export default function LeadershipStructure({ leaders }) {
  return (
    <section className="panel leadership-panel" id="leadership">
      <div className="panel-heading">
        <div>
          <span className="eyebrow">THE PEOPLE LEADING US</span>
          <h2>Leadership structure</h2>
        </div>

        <button
          className="subtle-link"
          onClick={() =>
            window.alert(
              "Full member directory will be connected with the backend.",
            )
          }
        >
          View all <ArrowUpRight size={15} />
        </button>
      </div>

      <div className="leader-list">
        {leaders.map((p) => (
          <div className="leader-row" key={p.name}>
            <div className={`leader-avatar ${p.tone}`}>{p.initials}</div>

            <div className="leader-details">
              <strong>{p.name}</strong>
              <span>{p.position}</span>
            </div>

            <span className="leader-group">{p.group}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
