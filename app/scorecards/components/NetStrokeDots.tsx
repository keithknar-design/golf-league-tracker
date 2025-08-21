export function strokesOnHole(courseHcapIndex: number, playerCourseHcap: number): number {
  // Allocate strokes per standard method across 18 holes:
  // one stroke on holes with HCP <= H, an extra stroke if H>18 on holes with HCP <= H-18, etc.
  let strokes = 0;
  if (playerCourseHcap >= courseHcapIndex) strokes += 1;
  if (playerCourseHcap > 18 && (playerCourseHcap - 18) >= courseHcapIndex) strokes += 1;
  if (playerCourseHcap > 36 && (playerCourseHcap - 36) >= courseHcapIndex) strokes += 1;
  return strokes;
}

export function dotString(strokes: number): string {
  if (strokes <= 0) return "";
  if (strokes === 1) return "•";
  if (strokes === 2) return "••";
  if (strokes === 3) return "•••";
  return "•••"; // cap display
}
