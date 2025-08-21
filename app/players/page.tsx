"use client";

import { divisionA, divisionB } from "../data";

export default function PlayersPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-bold text-green-800">Teams & Players</h1>

      <section>
        <h2 className="text-xl font-semibold text-green-700 mb-3">Division A</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {divisionA.map((t) => (
            <div key={t.team} className="bg-white rounded-2xl shadow p-4 border">
              <h3 className="text-lg font-semibold">Team {t.team}</h3>
              <p className="text-sm text-gray-600">{t.players.join(" & ")}</p>
              <p className="mt-2">Points: <span className="font-bold">{t.points}</span></p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-green-700 mb-3">Division B</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {divisionB.map((t) => (
            <div key={t.team} className="bg-white rounded-2xl shadow p-4 border">
              <h3 className="text-lg font-semibold">Team {t.team}</h3>
              <p className="text-sm text-gray-600">{t.players.join(" & ")}</p>
              <p className="mt-2">Points: <span className="font-bold">{t.points}</span></p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
