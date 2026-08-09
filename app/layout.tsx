import type { Metadata } from "next";
import { Caveat, Geist, Geist_Mono, Space_Grotesk } from "next/font/google";
import { ReactNode } from "react";
import "./globals.css";
import Navbar from "@/src/components/layout/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  weight: ["600"],
});

export const metadata: Metadata = {
  title: "Denver Tandingan — BSIT Fresh Graduate | Web & Software Developer",
  description:
    "Personal portfolio of Denver Tandingan, a BSIT fresh graduate from University of Eastern Pangasinan with 500-hour OJT internship experience in software & web application development.",
  keywords: [
    "Denver Tandingan",
    "BSIT Graduate",
    "Web Developer",
    "Software Developer",
    "Next.js Developer",
    "Node.js Developer",
    "Laravel Developer",
    "Database Management",
    "MakerSpace InnovHub",
  ],
  authors: [{ name: "Denver Tandingan" }],
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${spaceGrotesk.variable} ${caveat.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-[#0B0E14] text-[#F5F3EE]">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
