
export const users = {
  "Office Bearer": {
    name: "Aarav Sharma",
    initials: "AS",
    role: "Office Bearer",
    team: "Society Administration",
    teams: [],
  },

  Faculty: {
    name: "Dr. Meera Kapoor",
    initials: "MK",
    role: "Faculty Coordinator",
    team: "Faculty Connect",
    teams: [],
  },

  Executive: {
    name: "Riya Verma",
    initials: "RV",
    role: "Executive",
    team: "Core Committee",
    teams: [],
  },

  "Team Lead": {
    name: "Kabir Singh",
    initials: "KS",
    role: "Team Lead",
    team: "Development Team",
    teams: [
      { teamId: "t1", teamName: "Development", position: "lead" },
    ],
  },

  Member: {
    name: "Ananya Gupta",
    initials: "AG",
    role: "Member",
    team: "Development Team",
    teams: [
      { teamId: "t1", teamName: "Development", position: "member" },
    ],
  },
};

// TEAMS & SUB-CLUBS
export const teams = [
  {
    id: "t1",
    name: "Development",
    type: "core",
    description:
      "Building digital experiences through code and creativity.",
  },
  {
    id: "t2",
    name: "Design",
    type: "core",
    description:
      "Creating meaningful user experiences through design and innovation.",
  },
  {
    id: "t3",
    name: "AI & Robotics",
    type: "subclub",
    description:
      "Exploring intelligent systems, robotics and emerging technology.",
  },
  {
    id: "t4",
    name: "Cyber Security",
    type: "subclub",
    description:
      "Learning cybersecurity, ethical hacking and digital safety.",
  },
];

// DASHBOARD STATISTICS
export const stats = [
  {
    label: "Office Bearers",
    value: "06",
    note: "Society leadership",
    icon: "users",
    tone: "blue",
  },
  {
    label: "Core Teams",
    value: "04",
    note: "Working committees",
    icon: "layers",
    tone: "teal",
  },
  {
    label: "Sub-Clubs",
    value: "06",
    note: "Special interest groups",
    icon: "cpu",
    tone: "purple",
  },
  {
    label: "Meetings this week",
    value: "08",
    note: "Across all teams",
    icon: "calendar",
    tone: "orange",
  },
];

// MOCK MEETINGS
export const meetings = [
  // UPCOMING MEETINGS
  {
    id: "m1",
    day: "18",
    month: "NOV",
    title: "Core Team Sync-up",
    team: "Core Team",
    teamId: "t1",
    time: "10:30 AM",
    endTime: "11:30 AM",
    date: "2026-11-18",
    place: "Seminar Hall 2",
    tone: "teal",
    createdBy: "Ananya Rao",
    momUploaded: false,
  },
  {
    id: "m2",
    day: "20",
    month: "NOV",
    title: "Web Development Workshop",
    team: "Development",
    teamId: "t1",
    time: "12:00 PM",
    endTime: "01:00 PM",
    date: "2026-11-20",
    place: "Computer Lab",
    tone: "blue",
    createdBy: "Ananya Rao",
    momUploaded: false,
  },
  {
    id: "m3",
    day: "22",
    month: "NOV",
    title: "AI & Robotics Discussion",
    team: "AI & Robotics",
    teamId: "t3",
    time: "02:00 PM",
    endTime: "03:00 PM",
    date: "2026-11-22",
    place: "Innovation Lab",
    tone: "purple",
    createdBy: "Ananya Rao",
    momUploaded: false,
  },

  // PAST MEETINGS
  {
    id: "m4",
    day: "13",
    month: "NOV",
    title: "November Planning Meeting",
    team: "Core Team",
    teamId: "t1",
    time: "10:00 AM",
    endTime: "11:00 AM",
    date: "2026-11-13",
    place: "Conference Room",
    tone: "teal",
    createdBy: "Ananya Rao",
    momUploaded: false,
  },
  {
    id: "m5",
    day: "11",
    month: "NOV",
    title: "Design Review Meeting",
    team: "Design",
    teamId: "t2",
    time: "02:00 PM",
    endTime: "03:00 PM",
    date: "2026-11-11",
    place: "Design Studio",
    tone: "purple",
    createdBy: "Ananya Rao",
    momUploaded: true,
    momUrl: "demo-mom-design",
  },
  {
    id: "m6",
    day: "09",
    month: "NOV",
    title: "Weekly Society Sync",
    team: "Core Team",
    teamId: "t1",
    time: "11:00 AM",
    endTime: "12:00 PM",
    date: "2026-11-09",
    place: "Seminar Hall 1",
    tone: "teal",
    createdBy: "Ananya Rao",
    momUploaded: true,
    momUrl: "demo-mom-society",
  },
    {
    id: "m7",
    day: "07",
    month: "NOV",
    title: "Frontend Team Review",
    team: "Development",
    teamId: "t1",
    time: "03:00 PM",
    endTime: "04:00 PM",
    date: "2026-11-07",
    place: "Computer Lab",
    tone: "blue",
    createdBy: "Ananya Rao",
    momUploaded: false,
  },
];

// LEADERSHIP DATA
export const leaders = [
  {
    name: "Aarav Sharma",
    position: "President",
    group: "Office Bearer",
    initials: "AS",
    tone: "blue",
  },
  {
    name: "Riya Verma",
    position: "Vice President",
    group: "Office Bearer",
    initials: "RV",
    tone: "teal",
  },
  {
    name: "Kunal Mehta",
    position: "General Secretary",
    group: "Office Bearer",
    initials: "KM",
    tone: "purple",
  },
  {
    name: "Simran Kaur",
    position: "Development Lead",
    group: "Core Team",
    initials: "SK",
    tone: "orange",
  },
];

// ROLE-BASED CONTENT
export const roleContent = {
  "Office Bearer": {
    greeting: "Society administration",
    description:
      "Monitor society-wide activities, teams, leadership and meetings.",
    showStats: true,
    showLeadership: true,
    showTeams: true,
    meetingScope: "all",
  },

  Faculty: {
    greeting: "Faculty Connect",
    description:
      "Stay informed about society activities and meetings requiring your attention.",
    showStats: false,
    showLeadership: true,
    showTeams: false,
    meetingScope: "all",
  },

  Executive: {
    greeting: "Executive workspace",
    description:
      "Stay on top of society activities and your coordination responsibilities.",
    showStats: false,
    showLeadership: false,
    showTeams: true,
    meetingScope: "all",
  },

  "Team Lead": {
    greeting: "Your team workspace",
    description:
      "Manage your team meetings and stay connected with your members.",
    showStats: false,
    showLeadership: false,
    showTeams: false,
    meetingScope: "team",
  },

  Member: {
    greeting: "Your member dashboard",
    description:
      "Keep track of your team, meetings and society updates.",
    showStats: false,
    showLeadership: false,
    showTeams: false,
    meetingScope: "team",
  },
};

export const announcements = [
  {
    id: "a1",
    title: "Upcoming Society Meet",
    description:
      "All society members are informed that the monthly society meeting will be held next week.",
    date: "15 Nov 2026",
    postedBy: "Dr. Meera Kapoor",
  },
  {
    id: "a2",
    title: "Workshop Registration Open",
    description:
      "Registrations are now open for the upcoming Web Development Workshop. Interested students can register.",
    date: "13 Nov 2026",
    postedBy: "Dr. Meera Kapoor",
  },
  {
    id: "a3",
    title: "Project Submission Reminder",
    description:
      "All team leads are requested to submit their project progress reports before the deadline.",
    date: "10 Nov 2026",
    postedBy: "Dr. Meera Kapoor",
  },
];