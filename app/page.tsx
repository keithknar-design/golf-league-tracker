"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function GolfLeagueApp() {
  const [page, setPage] = useState<"home" | "players" | "schedule">("home");

  const players = [
    { name: "John Smith", handicap: 8, points: 24 },
    { name: "Mike Johnson", handicap: 12, points: 18 },
    { name: "Chris Lee", handicap: 6, points: 28 },
    { name: "Tom Davis", handicap: 15, points: 16 },
  ];

  const schedule = [
    { week: 1, course: "Sunny Hills GC", matchup: "John vs Mike", result: "John +2" },
    { week: 2, course: "Riverbend Links", matchup: "Chris vs Tom", result: "Chris -1" },
    { week: 3, course: "Lakeside CC", matchup: "Mike vs Chris", result: "Pending" },
  ];

  return (
    <div className="min-h-screen bg-green-50 p-6">
      {/* Header */}
      <header className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-green-800">Golf League Tracker</h1>
        <nav className="space-x-2">
          <button
            onClick={() => setPage("home")}
            className={`px-4 py-2 rounded-lg ${
              page === "home" ? "bg-green-600 text-white" : "bg-white border"
            }`}
          >
            Home
          </button>
          <button
            onClick={() => setPage("players")}
            className={`px-4 py-2 rounded-lg ${
              page === "players" ? "bg-green-600 text-white" : "bg-white border"
            }`}
          >
            Players
          </button>
          <button
            onClick={() => setPage("schedule")}
            className={`px-4 py-2 rounded-lg ${
              page === "schedule" ? "bg-green-600 text-white" : "bg-white border"
            }`}
          >
            Schedule
          </button>
        </nav>
      </header>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
      >
        {page === "home" && (
          <div className="mb-6 bg-white rounded-2xl shadow p-4">
            <h2 className="text-xl font-semibold mb-4">League Standings</h2>
            <table className="w-full border-collapse">
              <thead>
                <tr className="text-left border-b">
                  <th className="p-2">Player</th>
                  <th className="p-2">Handicap</th>
                  <th className="p-2">Points</th>
                </tr>
              </thead>
              <tbody>
                {players
                  .sort((a, b) => b.points - a.points)
                  .map((p, i) => (
                    <tr key={i} className="border-b">
                      <td className="p-2">{p.name}</td>
                      <td className="p-2">{p.handicap}</td>
                      <td className="p-2 font-bold">{p.points}</td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        )}

        {page === "players" && (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {players.map((p, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl shadow p-4 border"
              >
                <h3 className="text-lg font-semibold">{p.name}</h3>
