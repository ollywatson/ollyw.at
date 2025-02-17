import type { Config } from "tailwindcss";

export default {
  mode: 'jit',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: '#FFFFFF',   // Primary color for text and icons
        secondary: '#C0C0C0', // Secondary color for text and icons
        tertiary: '#939393',  // Tertiary color for text and icons
        borderLight: '#272727',    // Border color
        buttonBg: "var(--foreground)",   // Background color for buttons
        selectorBg: '#222222',
      },
      fontFamily: {
        'sans': ['Mona Sans', 'sans-serif'], // Add your font name first, followed by fallback fonts
        'serif': ['Literata', 'serif'],
      },
      fontSize: {
        'base': ['15px', '26px'],
        'base-md': ['16px', '26px'],
        'sm': ['13px', '22px'],
        'sm-md': ['14px', '22px'],
        'headline': ['20px', '32px'],
        'headline-md': ['22px', '32px'],
      },
      backgroundImage: {
        'dot-pattern': "radial-gradient(circle, #1F1F1F 10%, transparent 10%)"
      },
      backgroundSize: {
        '13px': '13px 13px',
        '20px': '20px 20px',
      }
    },
  },
  plugins: [],
} satisfies Config;
