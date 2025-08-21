import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Golf League Tracker",
  description: "Track divisions, standings, and schedules for your golf league",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">
        <nav className="bg-green-700 text-white px-6 py-4 flex gap-6 shadow-md">
          <a href="/" className="hover:underline">Home</a>
          <a href="/players" className="hover:underline">Players</a>
          <a href="/schedule" className="hover:underline">Schedule</a>
          <a href="/admin" className="hover:underline text-yellow-300 font-semibold">Admin</a>
        </nav>
        <main className="p-6">{children}</main>
      </body>
    </html>
  );
}
