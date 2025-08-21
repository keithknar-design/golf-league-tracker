"use client";

import { useState } from "react";
import { divisionA as divAData, divisionB as divBData } from "../data";

export default function AdminPage() {
  const [division, setDivision] = useState<"A" | "B">("A");
  const [team, setTeam] = useState<number>(divAData[0].team);
  const [points, setPoints] = useState<number>(0);

  const teams = division === "A" ? divAData : divBData;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`To update standings, edit app/data.ts\nSet Team ${team} points = ${points}`);
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Admin Panel</h1>

      <form onSubmit={handleSubmit} className="space-y-4 bg-gray-100 p-4 rounded-lg shadow">
        <div>
          <label className="block mb-1">Division</label>
          <select
            value={division}
            onChange={(e) => setDivision(e.target.value as "A" | "B")}
            className="w-full border p-2 rounded"
          >
            <option value="A">Division A</option>
            <option value="B">Division B</option>
          </select>
        </div>

        <div>
          <label className="block mb-1">Team</label>
          <select
            value={team}
            onChange={(e) => setTeam(parseInt(e.target.value))}
            className="w-full border p-2 rounded"
          >
            {teams.map((t) => (
              <option key={t.team} value={t.team}>
                Team {t.team} ({t.players.join(" & ")})
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block mb-1">Points</label>
          <input
            type="number"
            value={points}
            onChange={(e) => setPoints(parseInt(e.target.value || "0"))}
            className="w-full border p-2 rounded"
            placeholder="Enter points"
          />
        </div>

        <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
          Update (shows instructions)
        </button>

        <p className="text-sm text-gray-600 pt-2">
          Tip: permanent updates are made by editing <code>app/data.ts</code>, then committing & pushing to GitHub.
        </p>
      </form>
    </div>
  );
}
