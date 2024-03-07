/** @type {import('tailwindcss').Config} */
import plugin from "tailwindcss/plugin";

export default {
  darkMode: "selector",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      primary: "#007bff",
      secondary: "#6c757d",
      success: "#28a745",
      danger: "#dc3545",
      warning: "#ffc107",
      info: "#17a2b8",
      light: "#f8f9fa",
      dark: "#343a40",
    },
    fontSize: {
      xs: "0.75rem",
      sm: "1rem",
      base: "1.25rem",
      lg: "1.5rem",
      xl: "2rem",
    },
    lineHeight: {
      none: "1",
      tight: "1.2",
      normal: "1.5",
      relaxed: "2",
      loose: "2.5",
    },
    spacing: {
      px: "1px",
      0: "0",
      1: "0.25rem",
      2: "0.5rem",
      3: "0.75rem",
      4: "1rem",
      5: "1.25rem",
      6: "1.5rem",
      8: "2rem",
      10: "2.5rem",
      12: "3rem",
      16: "4rem",
      20: "5rem",
      24: "6rem",
      32: "8rem",
      40: "10rem",
      48: "12rem",
      56: "16rem",
      64: "18rem",
      72: "24rem",
      96: "32rem",
    },
    borderRadius: {
      none: "0",
      sm: "0.125rem",
      default: "0.25rem",
      lg: "0.5rem",
      full: "9999px",
    },
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
      mono: ['Fira Code', 'monospace']
    }
  },
  plugins: [
    plugin(function ({ addComponents, addUtilities, addBase, addVariant, theme, e }) {
      addVariant('custom-hover', ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => {
          return `.${e(`custom-hover${separator}${className}`)}:hover`;
        }); // example above
      });
      addBase({
      body: {
          backgroundColor: theme("colors.light"),
          color: theme("colors.dark"),
        },
        h1: {
          color: theme("colors.primary"),
          fontSize: theme("fontSize.xl"),
          fontWeight: theme("fontWeight.bold"),
          marginBottom: theme("margin.8"),
        },
        ".main-container": {
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100vh",
        }
      })
      addComponents({
        ".loader": {
          display: "inline-block",
          verticalAlign: "middle",
          border: "4px solid rgba(0, 0, 0, 0.1)",
          borderTopColor: theme("colors.primary"),
          borderRadius: "50%",
          width: "24px",
          height: "24px",
          animation: "spin 1s ease-in-out infinite !important",
        },
        ".btn-base": {
           backgroundColor: theme("colors.primary"),
           padding: "16px",
           borderRadius: "4px",
           fontSize: theme("fontSize.lg"),
           boxShadow: "0 5px 10px theme('colors.dark')",
           transition: "all 0.2s ease-in-out",
           fontFamily: theme("fontFamily.sans"),
           "&:hover": {
            backgroundColor: theme("colors.light"),
            color: theme("colors.success"),
          },
        },
      });
      addUtilities({
        "@keyframes spin": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      });
    }),
  ],
};
