

export const tournamentDB = [
  {
    id: 1,
    title: "Shuttle Masters League",
    status: "On Going", // "On Going" | "Upcoming" | "Completed"
    description:
      "Top players battle it out with skillful rallies and powerful smashes.",
    participantsCount: { current: 24, max: 32 },
    participants: [
      { id: "u1", name: "Ethan Miller", status: "Pending", avatar: "https://i.pravatar.cc/150?u=u1" },
      { id: "u2", name: "Noah Smith", status: "Confirmed", avatar: "https://i.pravatar.cc/150?u=u2" },
      { id: "u3", name: "James Anderson", status: "Confirmed", avatar: "https://i.pravatar.cc/150?u=u3" },
      { id: "u4", name: "David Hall", status: "Confirmed", avatar: "https://i.pravatar.cc/150?u=u4" }
    ],
    visibility: "Public", // "Public" | "Private"
    format: "Single Elimination", // e.g. "Single Elimination" | "League" | "Groups"
    date: "2025-10-12",
    location: "Badminton Hall 1",
    logo: "/images/badminton.jpg",
    sport: "Badminton",
  },
  {
    id: 2,
    title: "Hoops Championship",
    status: "Upcoming",
    description: "Intense games filled with teamwork, speed, and sharp shooting.",
    participantsCount: { current: 8, max: 12 },
    participants: [],
    visibility: "Community",
    format: "League",
    date: "2025-11-02",
    location: "Indoor Arena - Court A",
    logo: "/images/basketball.png",
    sport: "Basketball",
  },
  {
    id: 3,
    title: "City Chess Open",
    status: "Upcoming",
    description: "Rapid and classic matches for all levels with official pairing.",
    participantsCount: { current: 56, max: 64 },
    participants: [
      { id: "u5", name: "Aiden Davis", status: "Pending", avatar: "https://i.pravatar.cc/150?u=u5" },
      { id: "u6", name: "Daniel Thomas", status: "Confirmed", avatar: "https://i.pravatar.cc/150?u=u6" }
    ],
    visibility: "Public",
    format: "Swiss",
    date: "2025-09-21",
    location: "Downtown Library Hall",
    logo: "/images/chess.png",
    sport: "Chess",
  },
  {
    id: 4,
    title: "Summer Five-a-side Cup",
    status: "Completed",
    description: "Fast-paced 5v5 tournament with group stage and playoffs.",
    participantsCount: { current: 16, max: 16 },
    participants: [
      { id: "u1", name: "Ethan Miller", status: "Pending", avatar: "https://i.pravatar.cc/150?u=u1" },
      { id: "u2", name: "Noah Smith", status: "Confirmed", avatar: "https://i.pravatar.cc/150?u=u2" },
      { id: "u3", name: "James Anderson", status: "Pending", avatar: "https://i.pravatar.cc/150?u=u3" }
    ],
    visibility: "Private",
    format: "Groups",
    date: "2025-07-18",
    location: "Green Field Complex",
    logo: "/images/football.jpg",
    sport: "Football",
  },
  {
    id: 5,
    title: "Table Tennis Clash",
    status: "On Going",
    description: "Quick matches, best-of-5 sets, and a double-elim finals.",
    participantsCount: { current: 12, max: 24 },
    participants: [
      { id: "u5", name: "Aiden Davis", status: "Pending", avatar: "https://i.pravatar.cc/150?u=u5" },
      { id: "u6", name: "Daniel Thomas", status: "Pending", avatar: "https://i.pravatar.cc/150?u=u6" }
    ],
    visibility: "Public",
    format: "Double Elimination",
    date: "2025-10-03",
    location: "Community Sports Center",
    logo: "/images/tennis.jpg",
    sport: "Table Tennis",
  },
];
