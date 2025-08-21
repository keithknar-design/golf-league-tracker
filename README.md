# Golf League Tracker

A minimal Next.js + Tailwind site to track a golf league with **two divisions** (A & B), standings, and schedules.

## Quick Start

1. Install prerequisites:
   - Git (Windows build): https://git-scm.com/download/win
   - Node.js LTS: https://nodejs.org/en/

2. Unzip this project and open a terminal in the folder, then run:
   ```bash
   npm install
   npm run dev
   ```
   Visit http://localhost:3000

3. Create a GitHub repo and push:
   ```bash
   git init
   git add -A
   git commit -m "Initial golf league tracker"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/golf-league-tracker.git
   git push -u origin main
   ```

4. Deploy on Vercel:
   - Log in to https://vercel.com
   - New Project → Import your GitHub repo → Deploy

## How to Update Data

Open `app/page.tsx` and edit these arrays:

```ts
// Division rosters & standings points
const divisionA = [
  { name: "John Smith", handicap: 8, points: 24 },
  // add/edit players here...
];

const divisionB = [
  { name: "Alex Brown", handicap: 10, points: 22 },
  // add/edit players here...
];

// Schedules
const scheduleA = [
  { week: 1, course: "Sunny Hills GC", matchup: "John vs Mike", result: "John +2" },
  // add/edit games here...
];

const scheduleB = [
  { week: 1, course: "Pine Ridge", matchup: "Alex vs Sam", result: "Alex E" },
  // add/edit games here...
];
```

### Example: Add a new player to Division A

```ts
divisionA.push({ name: "New Player", handicap: 11, points: 0 });
```

### Example: Add a new game to Division B

```ts
scheduleB.push({ week: 4, course: "Cedar Creek", matchup: "Sam vs Brian", result: "Pending" });
```

Save, commit, and push. Vercel auto-redeploys.

## Moving to Real Data (Optional Next Step)

- Replace hard-coded arrays with a backend or hosted database (e.g., Supabase Postgres).
- Build an Admin page for entering scores.
- Compute standings from scorecards instead of manual points.
