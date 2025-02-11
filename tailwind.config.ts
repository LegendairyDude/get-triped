import type { Config } from "tailwindcss";
import colours from "./theme/colours"

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: colours.primary,
        secondary: colours.secondary,
        accent: colours.accent,
        black: colours.black,
        dark: colours.dark,
        light: colours.light,
        warning: colours.warning,
        error: colours.error,
        success: colours.success,
        info: colours.info,
      },
    },
  },
  plugins: [],
} satisfies Config;
