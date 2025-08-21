"use client";

import { useState } from "react";
import { motion } from "framer-motion";

type Player = {
  name: string;
  handicap: number;
  points: number;
};

type Game = {
  week: number;
  course: string;
  matchup: string;
  result: string; // e.g., "John +2", "Pending"
};

export default function GolfLeagueApp() {
  const [page, setPage] = useState<"home" | "players" | "schedule">("home");

  // ===== DATA YOU EDIT =====
  // Players split into two divisions
  const divisionA: Player[] = [
    { name: "John Smith", handicap: 8, points: 24 },
    { name: "Mike Johnson", handicap: 12, points: 18 },
    { name: "Chris Lee", handicap: 6, points: 28 },
    { name: "Tom Davis", handicap: 15, points: 16 },
  ];

  const divisionB: Player[] = [
    { name: "Alex Brown", handicap: 10, points: 22 },
    { name: "Sam Wilson", handicap: 14, points: 20 },
    { name: "David Clark", handicap: 9, points: 26 },
    { name: "Brian Adams", handicap: 13, points: 15 },
  ];

  // Separate schedules by division
  const scheduleA: Game[] = [
    { week: 1, course: "Sunny Hills GC", matchup: "John vs Mike", result: "John +2" },
    { week: 2, course: "Riverbend Links", matchup: "Chris vs Tom", result: "Chris -1" },
    { week: 3, course: "Lakeside CC", matchup: "Mike vs Chris", result: "Pending" },
  ];

  const scheduleB: Game[] = [
    { week: 1, course: "Pine Ridge", matchup: "Alex vs Sam", result: "Alex E" },
    { week: 2, course: "Maple Grove CC", matchup: "David vs Brian", result: "David -3" },
    { week: 3, course: "Oak Valley", matchup: "Sam vs David", result: "Pending" },
  ];
  // ===== END EDITABLE DATA =====

  return (
    <div className="min-h-screen p-6">
      {/* Header */}
      <header className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-green-800">Golf League Tracker</h1>
        <nav className="space-x-2">
          <button
            onClick={() => setPage("home")}
            className={`px-4 py-2 rounded-lg ${page === "home" ? "bg-green-600 text-white" : "bg-white border"}`}
          >
            Home
          </button>
          <button
            onClick={() => setPage("players")}
            className={`px-4 py-2 rounded-lg ${page === "players" ? "bg-green-600 text-white" : "bg-white border"}`}
          >
            Players
          </button>
          <button
            onClick={() => setPage("schedule")}
            className={`px-4 py-2 rounded-lg ${page === "schedule" ? "bg-green-600 text-white" : "bg-white border"}`}
          >
            Schedule
          </button>
        </nav>
      </header>

      {/* Content */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }}>
        {page === "home" && (
          <div className="space-y-6">
            {/* Division A */}
            <div className="bg-white rounded-2xl shadow p-4">
              <h2 className="text-xl font-semibold mb-4 text-green-700">Division A Standings</h2>
              <table className="w-full border-collapse">
                <thead>
                  <tr className="text-left border-b">
                    <th className="p-2">Player</th>
                    <th className="p-2">Handicap</th>
                    <th className="p-2">Points</th>
                  </tr>
                </thead>
                <tbody>
                  {[...divisionA].sort((a, b) => b.points - a.points).map((p, i) => (
                    <tr key={i} className="border-b">
                      <td className="p-2">{p.name}</td>
                      <td className="p-2">{p.handicap}</td>
                      <td className="p-2 font-bold">{p.points}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Division B */}
            <div className="bg-white rounded-2xl shadow p-4">
              <h2 className="text-xl font-semibold mb-4 text-green-700">Division B Standings</h2>
              <table className="w-full border-collapse">
                <thead>
                  <tr className="text-left border-b">
                    <th className="p-2">Player</th>
                    <th className="p-2">Handicap</th>
                    <th className="p-2">Points</th>
                  </tr>
                </thead>
                <tbody>
                  {[...divisionB].sort((a, b) => b.points - a.points).map((p, i) => (
                    <tr key={i} className="border-b">
                      <td className="p-2">{p.name}</td>
                      <td className="p-2">{p.handicap}</td>
                      <td className="p-2 font-bold">{p.points}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {page === "players" && (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[...divisionA, ...divisionB].map((p, i) => (
              <div key={i} className="bg-white rounded-2xl shadow p-4 border">
                <h3 className="text-lg font-semibold">{p.name}</h3>
                <p>Handicap: {p.handicap}</p>
                <p>Points: {p.points}</p>
              </div>
            ))}
          </div>
        )}

        {page === "schedule" && (
          <div className="space-y-6">
            {/* Division A Schedule */}
            <div className="bg-white rounded-2xl shadow p-4">
              <h2 className="text-xl font-semibold mb-4 text-green-700">Division A Schedule</h2>
              <ul className="space-y-3">
                {scheduleA.map((s, i) => (
                  <li key={i} className="p-3 border rounded-lg bg-white shadow-sm">
                    <p className="font-bold">Week {s.week} - {s.course}</p>
                    <p>{s.matchup}</p>
                    <p className="text-sm text-gray-600">Result: {s.result}</p>
                  </li>
                ))}
              </ul>
            </div>

            {/* Division B Schedule */}
            <div className="bg-white rounded-2xl shadow p-4">
              <h2 className="text-xl font-semibold mb-4 text-green-700">Division B Schedule</h2>
              <ul className="space-y-3">
                {scheduleB.map((s, i) => (
                  <li key={i} className="p-3 border rounded-lg bg-white shadow-sm">
                    <p className="font-bold">Week {s.week} - {s.course}</p>
                    <p>{s.matchup}</p>
                    <p className="text-sm text-gray-600">Result: {s.result}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </motion.div>
    </div>
  );
}
