/** @type {import('tailwindcss').Config} */

// Define accent color palettes
// Each palette should have: DEFAULT, light, hover, dark
const accentColors = {
  sky: { // Current primary
    light: "#E0F2FE",
    DEFAULT: "#0EA5E9",
    hover: "#0284C7",
    dark: "#0369A1",
  },
  emerald: {
    light: "#D1FAE5",
    DEFAULT: "#10B981",
    hover: "#059669",
    dark: "#047857",
  },
  rose: {
    light: "#FFE4E6",
    DEFAULT: "#F43F5E",
    hover: "#E11D48",
    dark: "#BE123C",
  },
  amber: {
    light: "#FEF3C7",
    DEFAULT: "#F59E0B",
    hover: "#D97706",
    dark: "#B45309",
  },
};

export default {
  darkMode: 'class',
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Primary will now use CSS variables, allowing it to be dynamic
        primary: {
          light: 'var(--color-primary-light)',
          DEFAULT: 'var(--color-primary-DEFAULT)',
          hover: 'var(--color-primary-hover)',
          dark: 'var(--color-primary-dark)',
        },
        secondary: { // Keeping secondary static for now
          DEFAULT: "#64748B", 
          hover: "#475569",
        },
        accent: accentColors.amber, // Default accent, can be changed or removed if primary handles all accenting
        
        // Dark theme colors
        dark: {
          background: "#1A202C",
          surface: "#2D3748", // For cards, modals
          text: "#E2E8F0", 
          // Dark theme primary will also use CSS variables
          // No need to define dark.primary here if primary vars are set correctly by ThemeContext
          secondary: {
            DEFAULT: "#A0AEC0", 
          }
        },
        // Expose accent palettes for selection UI if needed
        accentPalette: accentColors,
      },
      borderRadius: {
        container: "0.75rem",
      },
      boxShadow: {
        DEFAULT: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
        md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      },
      gap: {
        section: "2rem",
      }
    },
  },
  plugins: [],
};
