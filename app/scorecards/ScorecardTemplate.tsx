"use client";

import React from "react";
import { CoursePreset, courseById } from "../../courses/presets";
import { strokesOnHole, dotString } from "./components/NetStrokeDots";

type Player = { label: string; name: string; hcap?: number };

export type ScorecardProps = {
  title: string;
  subtitle: string;
  courseId: string;
  teeKey: string;     // e.g., 'white_m' or 'red_f'
  group: string;      // e.g., 'Group 1'
  start: string;      // e.g., 'Starting Hole: 10A'
  teeTime: string;    // e.g., 'Tee Off: 5:30 PM'
  players: [Player, Player, Player, Player]; // A1, A2, B1, B2
};

export default function ScorecardTemplate(props: ScorecardProps) {
  const course = courseById(props.courseId);
  if (!course) {
    return <div style={{ padding: 16 }}>Unknown course: {props.courseId}</div>;
  }
  const tee = course.tees[props.teeKey];
  if (!tee) {
    return <div style={{ padding: 16 }}>Unknown tee for {course.name}: {props.teeKey}</div>;
  }

  const [A1, A2, B1, B2] = props.players;

  return (
    <div style={{ fontFamily: "Arial, sans-serif", margin: 20, background: "#f5f5f5" }}>
      <style>{`
        h1, h2 { text-align: center; margin: 0.2rem 0; }
        table { border-collapse: collapse; width: 100%; margin-bottom: 20px; background: #fff; }
        th, td { border: 1px solid #ccc; padding: 8px; text-align: center; font-size: 14px; }
        th { background: #2f4f4f; color: #fff; }
        .subheader { background: #e0e0e0; font-weight: bold; }
        .teamA { background: #dff0d8; }
        .teamB { background: #d9edf7; }
        .flex { display: flex; gap: 8px; justify-content: center; align-items: center; }
        .meta { text-align: center; }
        .page { break-after: page; page-break-after: always; }
        @media print {
          body { background: #fff; margin: 0; }
          .noprint { display: none !important; }
          .wrap { margin: 0 !important; }
          .page { break-after: page; page-break-after: always; }
          table { page-break-inside: avoid; }
        }
      `}</style>

      <div className="wrap page">
        <h1>{props.title}</h1>
        <h2>{props.subtitle}</h2>
        <p className="meta">
          Course: {course.name} • Tee: {tee.name}
          <br />
          {props.group} | {props.start} | {props.teeTime}
        </p>

        <table>
          <thead>
            <tr>
              <th>Hole</th>
              {course.holes.map((h) => <th key={h}>{h}</th>)}
              <th>Gross</th><th>Hdcp</th><th>Net</th><th>Points</th>
            </tr>
          </thead>
          <tbody>
            <tr className="subheader">
              <td>Handicap</td>
              {course.hcp.map((v, i) => <td key={i}>{v}</td>)}
              <td colSpan={4}></td>
            </tr>
            <tr className="subheader">
              <td>Par</td>
              {course.par.map((v, i) => <td key={i}>{v}</td>)}
              <td>{course.par.reduce((a,b) => a+b, 0)}</td>
              <td colSpan={3}></td>
            </tr>
            <tr className="subheader">
              <td>{tee.name}</td>
              {tee.yards.map((v, i) => <td key={i}>{v}</td>)}
              <td>{tee.yards.reduce((a,b) => a+b, 0)}</td>
              <td colSpan={3}></td>
            </tr>

            {/* Team A */}
            <tr className="teamA">
              <td>A1: {A1.name}</td>
              {course.hcp.map((h, i) => (
                <td key={i} style={{ position: "relative" }}>
                  {/* dots show where strokes fall (net) */}
                  <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", pointerEvents: "none", fontSize: 16 }}>
                    {A1.hcap ? dotString(strokesOnHole(h, A1.hcap as number)) : ""}
                  </div>
                </td>
              ))}
              <td></td><td>{A1.hcap ?? ""}</td><td></td><td></td>
            </tr>
            <tr className="teamA">
              <td>A2: {A2.name}</td>
              {course.hcp.map((h, i) => (
                <td key={i} style={{ position: "relative" }}>
                  <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", pointerEvents: "none", fontSize: 16 }}>
                    {A2.hcap ? dotString(strokesOnHole(h, A2.hcap as number)) : ""}
                  </div>
                </td>
              ))}
              <td></td><td>{A2.hcap ?? ""}</td><td></td><td></td>
            </tr>
            <tr className="teamA">
              <td>Points (Team A)</td>
              <td colSpan={course.holes.length + 3}></td>
            </tr>

            {/* Team B */}
            <tr className="teamB">
              <td>B1: {B1.name}</td>
              {course.hcp.map((h, i) => (
                <td key={i} style={{ position: "relative" }}>
                  <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", pointerEvents: "none", fontSize: 16 }}>
                    {B1.hcap ? dotString(strokesOnHole(h, B1.hcap as number)) : ""}
                  </div>
                </td>
              ))}
              <td></td><td>{B1.hcap ?? ""}</td><td></td><td></td>
            </tr>
            <tr className="teamB">
              <td>B2: {B2.name}</td>
              {course.hcp.map((h, i) => (
                <td key={i} style={{ position: "relative" }}>
                  <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", pointerEvents: "none", fontSize: 16 }}>
                    {B2.hcap ? dotString(strokesOnHole(h, B2.hcap as number)) : ""}
                  </div>
                </td>
              ))}
              <td></td><td>{B2.hcap ?? ""}</td><td></td><td></td>
            </tr>
            <tr className="teamB">
              <td>Points (Team B)</td>
              <td colSpan={course.holes.length + 3}></td>
            </tr>
          </tbody>
        </table>

        <div className="noprint" style={{ textAlign: "center" }}>
          <a href="javascript:window.print()" style={{ padding: "8px 12px", background: "#2f4f4f", color: "#fff", borderRadius: 6, textDecoration: "none" }}>
            Print
          </a>
        </div>
      </div>
    </div>
  );
}
