"use client";

import { useMemo, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import ScorecardTemplate from "../ScorecardTemplate";

const qp = (sp: URLSearchParams, k: string, d = "") => sp.get(k) ?? d;
const qn = (sp: URLSearchParams, k: string, d = 0) => {
  const v = sp.get(k);
  if (v === null || v.trim() === "") return d;
  const n = Number(v);
  return Number.isFinite(n) ? n : d;
};

export default function R19Page() {
  const sp = useSearchParams();

  const data = useMemo(() => ({
    title: qp(sp, "title", "2025 Reynolds Golf"),
    subtitle: qp(sp, "subtitle", "Round 19 - August 26, 2025"),
    courseId: qp(sp, "courseId", "grey-hawk-back-9"),
    teeKey: qp(sp, "teeKey", "white_m"),
    group: qp(sp, "group", "Group 1"),
    start: qp(sp, "start", "Starting Hole: 10A"),
    teeTime: qp(sp, "tee", "Tee Off: 5:30 PM"),
    players: [
      { label: "A1", name: qp(sp, "a1", "Reynolds, Ryan"), hcap: qn(sp, "a1h") },
      { label: "A2", name: qp(sp, "a2", "Knarr, Ty"),     hcap: qn(sp, "a2h") },
      { label: "B1", name: qp(sp, "b1", "Murphy, Jamie"), hcap: qn(sp, "b1h") },
      { label: "B2", name: qp(sp, "b2", "Knarr, Keith"),  hcap: qn(sp, "b2h") },
    ] as const,
    print: qp(sp, "print", ""),
  }), [sp]);

  useEffect(() => {
    if (data.print === "1") {
      setTimeout(() => window.print(), 300);
    }
  }, [data.print]);

  return (
    <ScorecardTemplate
      title={data.title}
      subtitle={data.subtitle}
      courseId={data.courseId}
      teeKey={data.teeKey}
      group={data.group}
      start={data.start}
      teeTime={data.teeTime}
      players={data.players}
    />
  );
}
