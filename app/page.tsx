"use client";

import { motion } from "framer-motion";
import { divisionA, divisionB } from "./data";

export default function HomePage() {
  const sortedA = [...divisionA].sort((a, b) => b.points - a.points);
  const sortedB = [...divisionB].sort((a, b) => b.points - a.points);

  return (
    <div className="space-y-6">
      <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-3xl font-bold text-green-800">
        Golf League Tracker
      </motion.h1>

      <section className="bg-white rounded-2xl shadow p-4">
        <h2 className="text-xl font-semibold mb-4 text-green-700">Division A Standings</h2>
        <table className="w-full border-collapse">
          <thead>
            <tr className="text-left border-b">
              <th className="p-2">Team</th>
              <th className="p-2">Players</th>
              <th className="p-2">Points</th>
            </tr>
          </thead>
          <tbody>
            {sortedA.map((t) => (
              <tr key={t.team} className="border-b">
                <td className="p-2 font-semibold">Team {t.team}</td>
                <td className="p-2">{t.players.join(" & ")}</td>
                <td className="p-2 font-bold">{t.points}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <section className="bg-white rounded-2xl shadow p-4">
        <h2 className="text-xl font-semibold mb-4 text-green-700">Division B Standings</h2>
        <table className="w-full border-collapse">
          <thead>
            <tr className="text-left border-b">
              <th className="p-2">Team</th>
              <th className="p-2">Players</th>
              <th className="p-2">Points</th>
            </tr>
          </thead>
          <tbody>
            {sortedB.map((t) => (
              <tr key={t.team} className="border-b">
                <td className="p-2 font-semibold">Team {t.team}</td>
                <td className="p-2">{t.players.join(" & ")}</td>
                <td className="p-2 font-bold">{t.points}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
}
