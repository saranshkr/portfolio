import type { Config } from "tailwindcss";

const config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}"
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.75rem",
        md: "2.25rem"
      },
      screens: {
        "2xl": "76rem"
      }
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-body)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"]
      },
      boxShadow: {
        soft: "0 18px 50px rgba(15, 23, 42, 0.12)"
      },
      colors: {
        border: "rgb(var(--border) / <alpha-value>)",
        bg: "rgb(var(--bg) / <alpha-value>)",
        surface: "rgb(var(--surface) / <alpha-value>)",
        surfaceAlt: "rgb(var(--surface-alt) / <alpha-value>)",
        text: "rgb(var(--text) / <alpha-value>)",
        muted: "rgb(var(--muted) / <alpha-value>)",
        accent: "rgb(var(--accent) / <alpha-value>)",
        accentSoft: "rgb(var(--accent-soft) / <alpha-value>)"
      },
      backgroundImage: {
        "grid-fade":
          "linear-gradient(to right, rgb(var(--border) / 0.22) 1px, transparent 1px), linear-gradient(to bottom, rgb(var(--border) / 0.22) 1px, transparent 1px)"
      }
    }
  },
  plugins: []
} satisfies Config;

export default config;
