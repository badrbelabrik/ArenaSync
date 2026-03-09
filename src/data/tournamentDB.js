

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
  {
    id: 6,
    title: "Volleyball Power Cup",
    status: "Upcoming",
    description: "High energy matches with strong spikes and team coordination.",
    participantsCount: { current: 10, max: 16 },
    participants: [
      { id: "u7", name: "Lucas Brown", status: "Confirmed", avatar: "https://i.pravatar.cc/150?u=u7" },
      { id: "u8", name: "Mason Wilson", status: "Pending", avatar: "https://i.pravatar.cc/150?u=u8" }
    ],
    visibility: "Public",
    format: "Groups",
    date: "2025-12-05",
    location: "City Sports Arena",
    logo: "/images/volleyball.png",
    sport: "Volleyball",
  },
  {
    id: 7,
    title: "Streetball Challenge",
    status: "On Going",
    description: "3v3 street basketball tournament with fast paced action.",
    participantsCount: { current: 6, max: 12 },
    participants: [
      { id: "u9", name: "Oliver Garcia", status: "Confirmed", avatar: "https://i.pravatar.cc/150?u=u9" },
      { id: "u10", name: "Benjamin Martinez", status: "Pending", avatar: "https://i.pravatar.cc/150?u=u10" }
    ],
    visibility: "Community",
    format: "Single Elimination",
    date: "2025-09-10",
    location: "Urban Playground Court",
    logo: "/images/basketball.png",
    sport: "Basketball",
  },
  {
    id: 8,
    title: "Autumn Tennis Open",
    status: "Upcoming",
    description: "Outdoor tennis tournament open to all amateur players.",
    participantsCount: { current: 14, max: 32 },
    participants: [
      { id: "u11", name: "William Taylor", status: "Confirmed", avatar: "https://i.pravatar.cc/150?u=u11" },
      { id: "u12", name: "Henry Moore", status: "Pending", avatar: "https://i.pravatar.cc/150?u=u12" }
    ],
    visibility: "Public",
    format: "Single Elimination",
    date: "2025-10-20",
    location: "Central Park Courts",
    logo: "/images/tennis.jpg",
    sport: "Tennis",
  },
  {
    id: 9,
    title: "Regional Badminton Cup",
    status: "Completed",
    description: "Regional players compete in intense badminton matches.",
    participantsCount: { current: 32, max: 32 },
    participants: [
      { id: "u13", name: "Alexander Scott", status: "Confirmed", avatar: "https://i.pravatar.cc/150?u=u13" },
      { id: "u14", name: "Sebastian Adams", status: "Confirmed", avatar: "https://i.pravatar.cc/150?u=u14" }
    ],
    visibility: "Public",
    format: "League",
    date: "2025-06-14",
    location: "Regional Sports Hall",
    logo: "/images/badminton.jpg",
    sport: "Badminton",
  },
  {
    id: 10,
    title: "Winter Chess Masters",
    status: "Upcoming",
    description: "Strategic chess battles between the best local players.",
    participantsCount: { current: 40, max: 64 },
    participants: [
      { id: "u15", name: "Michael Clark", status: "Confirmed", avatar: "https://i.pravatar.cc/150?u=u15" },
      { id: "u16", name: "Jack Lewis", status: "Pending", avatar: "https://i.pravatar.cc/150?u=u16" }
    ],
    visibility: "Public",
    format: "Swiss",
    date: "2025-12-12",
    location: "Grand Hotel Conference Hall",
    logo: "/images/chess.png",
    sport: "Chess",
  }
];
