"use client";

import { useSearchParams } from "next/navigation";
import { divisionA, divisionB, scheduleA, scheduleB } from "@/app/data";
import ScorecardTemplate from "@/app/scorecards/ScorecardTemplate";

function playersForTeam(team: number): string[] {
  const t = [...divisionA, ...divisionB].find(x => x.team === team);
  return t ? t.players : ["", ""];
}

export default function PrintAllPage({ params }: { params: { week: string } }) {
  const weekNum = parseInt(params.week, 10);
  const matches = [
    ...scheduleA.filter(g => g.week === weekNum),
    ...scheduleB.filter(g => g.week === weekNum),
  ];
  const sp = useSearchParams();
  const courseId = sp.get("courseId") ?? "grey-hawk-back-9";
  const teeKey = sp.get("teeKey") ?? "white_m";
  const title = sp.get("title") ?? "2025 Reynolds Golf";
  const subtitle = sp.get("subtitle") ?? `Round ${weekNum}`;
  const start = sp.get("start") ?? "Starting Hole: 10A";
  const teeTime = sp.get("tee") ?? "Tee Off: 5:30 PM";

  return (
    <div>
      <style>{`
        @media print { .page { break-after: page; page-break-after: always; } }
      `}</style>
      {matches.map((m, i) => {
        const [h1, h2] = playersForTeam(m.homeTeam);
        const [a1, a2] = playersForTeam(m.awayTeam);

        return (
          <div key={i} className="page">
            <ScorecardTemplate
              title={title}
              subtitle={`${subtitle} — ${m.course}`}
              courseId={courseId}
              teeKey={teeKey}
              group={`Group ${i + 1}`}
              start={start}
              teeTime={teeTime}
              players={[
                { label: "A1", name: h1, hcap: undefined },
                { label: "A2", name: h2, hcap: undefined },
                { label: "B1", name: a1, hcap: undefined },
                { label: "B2", name: a2, hcap: undefined },
              ]}
            />
          </div>
        );
      })}
      <div className="noprint" style={{ textAlign: "center", marginBottom: 24 }}>
        <a href="javascript:window.print()" style={{ padding: "8px 12px", background: "#2f4f4f", color: "#fff", borderRadius: 6, textDecoration: "none" }}>
          Print All
        </a>
      </div>
    </div>
  );
}
