"use client";

import { scheduleA, scheduleB, teamName } from "../data";

export default function SchedulePage() {
  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-bold text-green-800">Season Schedule</h1>

      <section className="bg-white rounded-2xl shadow p-4">
        <h2 className="text-xl font-semibold mb-4 text-green-700">Division A</h2>
        <ul className="space-y-3">
          {scheduleA.map((g, idx) => (
            <li key={idx} className="p-3 border rounded-lg bg-white shadow-sm">
              <p className="font-bold">Week {g.week} - {g.course}</p>
              <p>{teamName(g.homeTeam)} vs {teamName(g.awayTeam)}</p>
              <p className="text-sm text-gray-600">Result: {g.result}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="bg-white rounded-2xl shadow p-4">
        <h2 className="text-xl font-semibold mb-4 text-green-700">Division B</h2>
        <ul className="space-y-3">
          {scheduleB.map((g, idx) => (
            <li key={idx} className="p-3 border rounded-lg bg-white shadow-sm">
              <p className="font-bold">Week {g.week} - {g.course}</p>
              <p>{teamName(g.homeTeam)} vs {teamName(g.awayTeam)}</p>
              <p className="text-sm text-gray-600">Result: {g.result}</p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
