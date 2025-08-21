export type Team = {
  team: number;
  players: string[];
  points: number;
};

export type Match = {
  week: number;
  course: string;
  homeTeam: number;
  awayTeam: number;
  result: string;
};

export const divisionA: Team[] = [
  { team: 1,  players: ["Wolf, Craig", "Wolf, Carl"], points: 0 },
  { team: 2,  players: ["Galvin, Donny", "McClusky, David"], points: 0 },
  { team: 3,  players: ["Havanchak, Andrew", "Abraham, Betty"], points: 0 },
  { team: 4,  players: ["Taylor, Darryl", "Greenfield, Nevin"], points: 0 },
  { team: 5,  players: ["Dalton, Ryan", "Loescher, Steve"], points: 0 },
  { team: 6,  players: ["Long, Kevin", "Burke, Gary"], points: 0 },
  { team: 7,  players: ["Knarr, Ty", "Knarr, Keith"], points: 0 },
  { team: 8,  players: ["Johnson, Mike", "Wieland, Jay"], points: 0 },
  { team: 9,  players: ["Walker, Jerrol", "Walker, Matt"], points: 0 },
  { team:10,  players: ["Knapp, Bob", "Koenig, Jim"], points: 0 },
  { team:11,  players: ["Orseno, Tony", "Overy, Zeke"], points: 0 },
  { team:12,  players: ["Reynolds, Ryan", "Murphy, Jamie"], points: 0 },
  { team:13,  players: ["Sarka, Bob", "Price, Eric"], points: 0 },
];

export const divisionB: Team[] = [
  { team:14, players: ["Pandy, Michael", "Csizmadia, Jacob"], points: 0 },
  { team:15, players: ["Day, Matt", "Wohlbers, Brian"], points: 0 },
  { team:16, players: ["Phong, Phong", "Greenfield, Mike"], points: 0 },
  { team:17, players: ["Hawke, Tim", "Main, Steve"], points: 0 },
  { team:18, players: ["Woisnet, Tom", "Matuska, Andrew"], points: 0 },
  { team:19, players: ["Tait, Troy", "Esser, Ryan"], points: 0 },
  { team:20, players: ["Rosario, Frank", "Morris, Scott"], points: 0 },
  { team:21, players: ["Kundrod, Rick", "Kundrod, Claudia"], points: 0 },
  { team:22, players: ["Lord, John", "Victor, John"], points: 0 },
  { team:23, players: ["Heldt, Gary", "Temple, Phil"], points: 0 },
  { team:24, players: ["Heredos, Heath", "Walker, Bill"], points: 0 },
  { team:25, players: ["Knepper, Jeff", "Herb, Mike"], points: 0 },
  { team:26, players: ["Wilson, Scott", "Andolsek, Jim"], points: 0 },
];

export const scheduleA: Match[] = [
  { week: 1, course: "Sunny Hills GC", homeTeam: 1, awayTeam: 2, result: "Pending" },
  { week: 1, course: "Sunny Hills GC", homeTeam: 3, awayTeam: 4, result: "Pending" },
  { week: 2, course: "Riverbend Links", homeTeam: 5, awayTeam: 6, result: "Pending" },
];

export const scheduleB: Match[] = [
  { week: 1, course: "Pine Ridge", homeTeam: 14, awayTeam: 15, result: "Pending" },
  { week: 1, course: "Pine Ridge", homeTeam: 16, awayTeam: 17, result: "Pending" },
  { week: 2, course: "Maple Grove CC", homeTeam: 18, awayTeam: 19, result: "Pending" },
];

export function teamName(team: number): string {
  const t = [...divisionA, ...divisionB].find(x => x.team === team);
  return t ? `Team ${t.team} (${t.players.join(" & ")})` : `Team ${team}`;
}
