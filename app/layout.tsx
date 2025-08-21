import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Golf League Tracker",
  description: "Track divisions, standings, and schedules for your golf league",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
