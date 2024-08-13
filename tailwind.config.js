/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        primary: "Clash Display, sans-serif",
        secondary: "Plus Jakarta Sans, sans-serif",
        roboto: "Roboto, sans-serif",
        manrope: "Manrope, sans-serif",
        inter: "Inter, sans-serif",
      },
      colors: {
        primary: "#7CCA68",

        "grey-100": "#FCFCFD",
        "grey-200": "#F9FAFB",
        "grey-300": "#F2F4F7",
        "grey-400": "#EAECF0",
        "grey-500": "#D0D5DD",
        "grey-600": "#98A2B3",
        "grey-700": "#667085",
        "grey-800": "#475467",
        "grey-900": "#344054",
        "grey-1000": "#1D2939",
        "grey-1100": "#101828",

        "error-100": "#FFFBFA",
        "error-200": "#FEF3F2",
        "error-300": "#FEE4E2",
        "error-400": "#FECDCA",
        "error-500": "#FDA29B",
        "error-600": "#F97066",
        "error-700": "#F04438",
        "error-800": "#D92D20",
        "error-900": "#B42318",
        "error-1000": "#912018",
        "error-1100": "#7A271A",

        "warning-100": "#FFFCF5",
        "warning-200": "#FFFAEB",
        "warning-300": "#FEF0C7",
        "warning-400": "#FEDF89",
        "warning-500": "#FEC84B",
        "warning-600": "#FDB022",
        "warning-700": "#F79009",
        "warning-800": "#DC6803",
        "warning-900": "#B54708",
        "warning-1000": "#93370D",
        "warning-1100": "#7A2E0E",

        "success-100": "#F6FEF9",
        "success-200": "#ECFDF3",
        "success-300": "#D1FADF",
        "success-400": "#A6F4C5",
        "success-500": "#6CE9A6",
        "success-600": "#32D583",
        "success-700": "#12B76A",
        "success-800": "#039855",
        "success-900": "#027A48",
        "success-1000": "#05603A",
        "success-1100": "#054F31",
      },
      boxShadow: {
        header: "0 -2px 0 -1px inset #EAECF0",
      },
      screens: {
        xm: "420px",
        '2xl': '1440px'
      },
      keyframes: {
        go: {
          "0%, 100%": {
            "object-position": "-1px",
          },
          "50%": {
            "object-position": "2px",
          },
        },
      },
      backgroundImage: {
        eathGradient:
          "radial-gradient(34.38% 34.77% at 46.05% 54.49%, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.71) 100%)",
      },
    },
  },
  plugins: [],
};
