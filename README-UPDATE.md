# Golf League Tracker — Update Pack

This zip contains updated files to power 2 divisions (13 teams each, 2 players per team), standings, schedules, and a simple admin page.

## How to apply
1. Unzip into your repo root, **overwriting existing files**.
2. Run:
   ```bash
   npm install
   npm run dev
   ```
3. Commit & push:
   ```bash
   git add .
   git commit -m "Apply divisions/teams/schedule update"
   git push origin main
   ```
4. Vercel will redeploy automatically.

## Edit data
- `app/data.ts` — update team points or schedules.
