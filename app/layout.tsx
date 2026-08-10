import type { Metadata } from "next";
import { Caveat, Geist, Geist_Mono, Space_Grotesk } from "next/font/google";
import { ReactNode } from "react";
import "./globals.css";
import Navbar from "@/src/components/layout/Navbar";
import ChatWidget from "@/src/components/chat/ChatWidget";
import { ThemeProvider } from "@/src/components/theme/ThemeProvider";

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
  openGraph: {
    title: "Denver Tandingan — BSIT Fresh Graduate | Web & Software Developer",
    description:
      "Personal portfolio of Denver Tandingan, a BSIT fresh graduate from University of Eastern Pangasinan with 500-hour OJT internship experience in software & web application development.",
    url: "https://denverfolio.vercel.app",
    siteName: "Denver Tandingan",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Denver Tandingan — code bracket logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Denver Tandingan — BSIT Fresh Graduate | Web & Software Developer",
    description:
      "Personal portfolio of Denver Tandingan, a BSIT fresh graduate from University of Eastern Pangasinan with 500-hour OJT internship experience in software & web application development.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${spaceGrotesk.variable} ${caveat.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-[var(--background)] text-[var(--foreground)]">
        <ThemeProvider>
          <Navbar />
          {children}
          <ChatWidget />
        </ThemeProvider>
      </body>
    </html>
  );
}
