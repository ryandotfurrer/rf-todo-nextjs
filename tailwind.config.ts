import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      background: "hsl(var(--background))",
      foreground: "hsl(var(--foreground))",
      card: "hsl(var(--card))",
      cardForeground: "hsl(var(--card-foreground))",
      popover: "hsl(var(--popover))",
      popoverForeground: "hsl(var(--popover-foreground))",
      primary: "hsl(var(--primary))",
      primaryForeground: "hsl(var(--primary-foreground))",
      secondary: "hsl(var(--secondary))",
      secondaryForeground: "hsl(var(--secondary-foreground))",
      muted: "hsl(var(--muted))",
      mutedForeground: "hsl(var(--muted-foreground))",
      accent: "hsl(var(--accent))",
      accentForeground: "hsl(var(--accent-foreground))",
      destructive: "hsl(var(--destructive))",
      destructiveForeground: "hsl(var(--destructive-foreground))",
      border: "hsl(var(--border))",
      outline: "hsl(var(--outline))",
      input: "hsl(var(--input))",
      ring: "hsl(var(--ring))",
      radius: "hsl(var(--radius))",
      chart1: "hsl(var(--chart1))",
      chart2: "hsl(var(--chart2))",
      chart3: "hsl(var(--chart3))",
      chart4: "hsl(var(--chart4))",
      chart5: "hsl(var(--chart5))",
    },
    extend: {},
  },
  plugins: [],
};
export default config;
