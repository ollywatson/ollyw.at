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
        borderLight: '#333333',    // Border color
        buttonBg: '#333333',   // Background color for buttons
        selectorBg: '#242424',
        subtleBg: '#1F1F1F',
        isCurrentBg: '#424242',
        selectorBgTransparent: 'rgba(255, 255, 255, 0.05)',
      },
      fontFamily: {
        'sans': ['Mona Sans', 'sans-serif'], // Add your font name first, followed by fallback fonts
        'serif': ['Literata', 'serif'],
      },
      fontSize: {
        'base': ['16px', '28px'],
        'sm': ['14px', '22px'],
        'sm-reading': ['14px', '24px'],
        'caption': ['12px', '16px'],
        'headline': ['20px', '32px'],
        'headline-md': ['24px', '40px'],
        'serif-adjust': ['15px', '22px'],
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
