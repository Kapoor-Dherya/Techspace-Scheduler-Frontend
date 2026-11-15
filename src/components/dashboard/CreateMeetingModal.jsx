import { useState } from "react";
import {
  X,
  CalendarDays,
  Clock3,
  MapPin,
  Link as LinkIcon,
} from "lucide-react";
import { teams } from "../../data/dashboardData";

export default function CreateMeetingModal({ user, role, meeting, onClose, onCreate }) {
  const isOB = role === "Office Bearer";

  const [form, setForm] = useState({
    topic: meeting?.title || meeting?.topic || "",
    teamId: meeting?.teamId || (isOB ? "" : user.teams?.[0]?.teamId || ""),
    date: meeting?.date || "",
    startTime: meeting?.startTime || meeting?.time || "",
    endTime: meeting?.endTime || "",
    location: meeting?.place || "",
    note: meeting?.note || "",
    link: meeting?.link || "",
  });

  const [error, setError] = useState("");

  const availableTeams = isOB
    ? teams
    : teams.filter((team) =>
        user.teams?.some((userTeam) => userTeam.teamId === team.id),
      );

  const update = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
  };

  const submit = (e) => {
    e.preventDefault();

    if (!form.topic.trim() || !form.date || !form.startTime || !form.endTime) {
      setError("Please fill in all required fields.");
      return;
    }

    if (form.endTime <= form.startTime) {
      setError("End time must be later than start time.");
      return;
    }

    if (!isOB && !form.teamId) {
      setError("Please select your team.");
      return;
    }

    const selectedTeam = teams.find((team) => team.id === form.teamId);

    const newMeeting = {
      id: meeting?.id || `local-${Date.now()}`,
      title: form.topic.trim(),
      topic: form.topic.trim(),
      team: isOB && !form.teamId ? "Office Bearers" : selectedTeam?.name,
      teamId: form.teamId || null,
      date: form.date,
      day: form.date.split("-")[2],
      month: new Date(`${form.date}T00:00:00`)
        .toLocaleString("en", {
          month: "short",
        })
        .toUpperCase(),
      time: form.startTime,
      endTime: form.endTime,
      place: form.location || "Location not specified",
      note: form.note,
      link: form.link || null,
      createdBy: meeting?.createdBy || user.name,
      momUploaded: meeting?.momUploaded || false,
      momFileName: meeting?.momFileName || null,
      tone:
        selectedTeam?.type === "subclub"
          ? "purple"
          : isOB && !form.teamId
            ? "blue"
            : "teal",
    };

    onCreate(newMeeting);
    onClose();
  };

  return (
    <div className="modal-overlay" onMouseDown={onClose}>
      <div className="meeting-modal" onMouseDown={(e) => e.stopPropagation()}>
        <div className="modal-heading">
          <div>
            <span className="eyebrow">TECHSPACE CALENDAR</span>
            <h2>{meeting ? "Edit meeting" : "Create a meeting"}</h2>
            <p>
              {isOB
                ? (meeting ? "Update the meeting details." : "Schedule a society or team meeting.")
                : `Schedule a meeting for ${user.team}.`}
            </p>
          </div>

          <button className="modal-close" onClick={onClose}>
            <X size={20} />
          </button>
        </div>

        <form onSubmit={submit}>
          <label>
            Meeting topic *
            <input
              name="topic"
              value={form.topic}
              onChange={update}
              placeholder="e.g. Website Planning"
              required
            />
          </label>

          <label>
            {isOB ? "Meeting type / Team" : "Your team *"}
            <select
              name="teamId"
              value={form.teamId}
              onChange={update}
              required={!isOB}
            >
              {isOB && <option value="">Office Bearer meeting</option>}
              {availableTeams.map((team) => (
                <option value={team.id} key={team.id}>
                  {team.name}
                </option>
              ))}
            </select>
          </label>

          <label>
            <span>
              <CalendarDays size={14} /> Date *
            </span>
            <input
              type="date"
              name="date"
              value={form.date}
              onChange={update}
              min={new Date().toISOString().split("T")[0]}
              required
            />
          </label>

          <div className="modal-two-col">
            <label>
              <span>
                <Clock3 size={14} /> Start time *
              </span>
              <input
                type="time"
                name="startTime"
                value={form.startTime}
                onChange={update}
                required
              />
            </label>

            <label>
              <span>
                <Clock3 size={14} /> End time *
              </span>
              <input
                type="time"
                name="endTime"
                value={form.endTime}
                onChange={update}
                required
              />
            </label>
          </div>

          <label>
            <span>
              <MapPin size={14} /> Location
            </span>
            <input
              name="location"
              value={form.location}
              onChange={update}
              placeholder="Room number / Venue"
            />
          </label>

          <label>
            <span>
              <LinkIcon size={14} /> Online meeting link
            </span>
            <input
              name="link"
              type="url"
              value={form.link}
              onChange={update}
              placeholder="https://meet.google.com/..."
            />
          </label>

          <label>
            Meeting notes
            <textarea
              name="note"
              value={form.note}
              onChange={update}
              placeholder="Add instructions or things to bring..."
              rows={3}
            />
          </label>

          {error && <p className="form-error">{error}</p>}

          <div className="modal-actions">
            <button type="button" className="cancel-btn" onClick={onClose}>
              Cancel
            </button>
            <button type="submit" className="create-btn">
              {meeting ? "Save changes" : "Create meeting"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
