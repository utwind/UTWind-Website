// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";

import { Inter, Montserrat, Geist, Geist_Mono } from "next/font/google";

// Main fonts you want (Inter + Montserrat)
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-montserrat",
});

// Optional: keep Geist (Next.js default template fonts)
const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: "UTWind | Sustainable Wind Energy Team",
  description:
    "University of Toronto Wind Turbine Team - Building sustainable small-scale wind turbines",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${montserrat.variable} ${geistSans.variable} ${geistMono.variable}`}
    >
      <body className="antialiased">{children}</body>
    </html>
  );
}
