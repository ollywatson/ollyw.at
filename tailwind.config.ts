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
        primary: '#202123',   // Primary color for text and icons
        secondary: '#58616B', // Secondary color for text and icons
        tertiary: '#8290A1',  // Tertiary color for text and icons
        borderLight: '#ECF2F9',    // Border color
        buttonBg: '#E6EDF5',   // Background color for buttons
        blue: '#2D7EFF'
      },
      fontFamily: {
        'sans': ['Mona Sans', 'sans-serif'], // Add your font name first, followed by fallback fonts
      },
      fontSize: {
        'base': ['16px', '26px'],
        'sm': ['14px', '22px']
      },
      backgroundImage: {
        'dot-pattern': "radial-gradient(circle, #E9EEF5 10%, transparent 10%)"
      },
      backgroundSize: {
        '13px': '13px 13px',
        '20px': '20px 20px',
      }
    },
  },
  plugins: [],
} satisfies Config;
