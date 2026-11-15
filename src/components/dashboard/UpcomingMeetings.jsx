import { CalendarDays, Clock3, MapPin, ArrowUpRight } from "lucide-react";

export default function UpcomingMeetings({ meetings }) {
  return (
    <section className="panel meetings-panel" id="meetings">
      <div className="panel-heading">
        <div>
          <span className="eyebrow">MARK YOUR CALENDAR</span>
          <h2>Upcoming meetings</h2>
        </div>

        <button
          className="subtle-link"
          onClick={() =>
            window.alert(
              "Meetings calendar will be connected with the backend.",
            )
          }
        >
          View calendar <ArrowUpRight size={15} />
        </button>
      </div>

      <div className="meeting-list">
        {meetings.map((m) => (
          <article className="meeting-row" key={m.title}>
            <div className="meeting-date">
              <strong>{m.day}</strong>
              <span>{m.month}</span>
            </div>

            <div className="meeting-main">
              <h3>{m.title}</h3>

              <span className={`team-pill ${m.tone}`}>{m.team}</span>

              <div className="meeting-meta">
                <span>
                  <Clock3 size={14} />
                  {m.time}
                </span>

                <span>
                  <MapPin size={14} />
                  {m.place}
                </span>
              </div>
            </div>

            <button
              className="meeting-open"
              aria-label={`Open ${m.title}`}
              onClick={() =>
                window.alert(
                  `${m.title}\n${m.day} ${m.month} · ${m.time}\n${m.place}`,
                )
              }
            >
              <ArrowUpRight size={18} />
            </button>
          </article>
        ))}
      </div>
    </section>
  );
}
