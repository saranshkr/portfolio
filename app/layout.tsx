import type { Metadata } from "next";
import type { ReactNode } from "react";

import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";

import "./globals.css";

const themeScript = `
  (() => {
    const stored = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const theme = stored === "light" || stored === "dark" ? stored : (prefersDark ? "dark" : "light");
    document.documentElement.classList.toggle("dark", theme === "dark");
    document.documentElement.dataset.theme = theme;
  })();
`;

export const metadata: Metadata = {
  metadataBase: new URL("https://saranshkr.github.io/portfolio/"),
  title: "Saransh Kumar | AI/ML Systems Engineer",
  description:
    "Systems-oriented portfolio for an AI/ML engineer focused on production platforms, decision systems, and applied machine learning.",
  openGraph: {
    title: "Saransh Kumar | AI/ML Systems Engineer",
    description:
      "Production-minded portfolio covering systems design, applied ML, and case studies.",
    url: "https://saranshkr.github.io/portfolio/",
    siteName: "Saransh Kumar Portfolio",
    type: "website"
  }
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        <div className="relative flex min-h-screen flex-col">
          <Navbar />
          <main className="flex-1 pt-24 md:pt-28">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
