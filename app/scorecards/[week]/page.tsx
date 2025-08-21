"use client";

import Link from "next/link";
import { divisionA, divisionB, scheduleA, scheduleB } from "../../data";

function playersForTeam(team: number): string[] {
  const t = [...divisionA, ...divisionB].find(x => x.team === team);
  return t ? t.players : ["", ""];
}

export default function WeekScorecardsPage({ params }: { params: { week: string } }) {
  const weekNum = parseInt(params.week, 10);
  const matches = [
    ...scheduleA.filter(g => g.week === weekNum),
    ...scheduleB.filter(g => g.week === weekNum),
  ];

  const courseId = "grey-hawk-back-9";
  const teeKey = "white_m";

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-green-800">Scorecards — Week {weekNum}</h1>
        <div className="flex gap-3">
          <Link href={`/scorecards/${weekNum}/print-all?courseId=${courseId}&teeKey=${teeKey}`} className="px-3 py-2 rounded bg-gray-700 text-white hover:bg-black">
            Print All
          </Link>
        </div>
      </div>
      {matches.length === 0 && <p>No matches defined for this week yet.</p>}

      <ul className="grid gap-4 sm:grid-cols-2">
        {matches.map((m, i) => {
          const [h1, h2] = playersForTeam(m.homeTeam);
          const [a1, a2] = playersForTeam(m.awayTeam);

          const url = `/scorecards/r19?title=${encodeURIComponent("2025 Reynolds Golf")}`
            + `&subtitle=${encodeURIComponent("Round " + weekNum)}`
            + `&courseId=${encodeURIComponent(courseId)}&teeKey=${encodeURIComponent(teeKey)}`
            + `&group=${encodeURIComponent("Group " + (i + 1))}`
            + `&start=${encodeURIComponent("Starting Hole: 10A")}`
            + `&tee=${encodeURIComponent("Tee Off: 5:30 PM")}`
            + `&a1=${encodeURIComponent(h1)}&a2=${encodeURIComponent(h2)}`
            + `&b1=${encodeURIComponent(a1)}&b2=${encodeURIComponent(a2)}`;

          return (
            <li key={i} className="p-4 bg-white rounded-xl shadow border">
              <div className="font-semibold mb-1">{m.course}</div>
              <div className="text-sm mb-3">Team {m.homeTeam} ({h1} & {h2}) vs Team {m.awayTeam} ({a1} & {a2})</div>
              <div className="flex gap-2">
                <a href={url} className="inline-block px-3 py-2 rounded bg-green-600 text-white hover:bg-green-700">
                  Open Printable Scorecard
                </a>
                <a href={url + "&print=1"} className="inline-block px-3 py-2 rounded bg-gray-700 text-white hover:bg-black">
                  Print Now
                </a>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
