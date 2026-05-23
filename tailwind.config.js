/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#c0c1ff",
        "inverse-primary": "#494bd6",
        "primary-fixed-dim": "#c0c1ff",
        "tertiary-fixed": "#e0e0ff",
        "tertiary-fixed-dim": "#bdc2ff",
        "primary-container": "#8083ff",
        "on-background": "#dce1fb",
        "surface-tint": "#c0c1ff",
        "surface": "#0c1324",
        "on-surface": "#dce1fb",
        "on-secondary-fixed": "#0f0069",
        "background": "#0c1324",
        "on-primary-fixed-variant": "#2f2ebe",
        "secondary-container": "#3626ce",
        "surface-container": "#191f31",
        "surface-container-low": "#151b2d",
        "surface-bright": "#33394c",
        "error": "#ffb4ab",
        "tertiary-container": "#7c87f3",
        "primary-fixed": "#e1e0ff",
        "on-secondary-container": "#b3b1ff",
        "surface-container-lowest": "#070d1f",
        "on-secondary": "#1d00a5",
        "on-tertiary-fixed-variant": "#2f3aa3",
        "on-surface-variant": "#c7c4d7",
        "error-container": "#93000a",
        "on-tertiary-container": "#081486",
        "surface-variant": "#2e3447",
        "surface-dim": "#0c1324",
        "surface-container-highest": "#2e3447",
        "on-primary-fixed": "#07006c",
        "on-primary": "#1000a9",
        "inverse-surface": "#dce1fb",
        "outline-variant": "#464554",
        "on-tertiary": "#131e8c",
        "on-primary-container": "#0d0096",
        "inverse-on-surface": "#2a3043",
        "on-tertiary-fixed": "#000767",
        "on-error-container": "#ffdad6",
        "secondary-fixed": "#e2dfff",
        "surface-container-high": "#23293c",
        "secondary": "#c3c0ff",
        "outline": "#908fa0",
        "on-error": "#690005",
        "secondary-fixed-dim": "#c3c0ff",
        "tertiary": "#bdc2ff",
        "on-secondary-fixed-variant": "#3323cc"
      },
      borderRadius: {
        "stitch-default": "0.125rem",
        "stitch-lg": "0.25rem",
        "stitch-xl": "0.5rem",
        "stitch-full": "0.75rem"
      },
      spacing: {
        "gutter": "24px",
        "container-max-width": "1440px",
        "margin-mobile": "20px",
        "margin-desktop": "64px",
        "unit": "4px"
      },
      fontFamily: {
        "display-lg": ["Geist", "sans-serif"],
        "label-sm": ["JetBrains Mono", "monospace"],
        "headline-lg": ["Geist", "sans-serif"],
        "headline-lg-mobile": ["Geist", "sans-serif"],
        "body-md": ["Geist", "sans-serif"]
      },
      fontSize: {
        "display-lg": [
          "48px",
          {
            "lineHeight": "56px",
            "letterSpacing": "-0.02em",
            "fontWeight": "700"
          }
        ],
        "label-sm": [
          "12px",
          {
            "lineHeight": "16px",
            "letterSpacing": "0.05em",
            "fontWeight": "500"
          }
        ],
        "headline-lg": [
          "32px",
          {
            "lineHeight": "40px",
            "letterSpacing": "-0.01em",
            "fontWeight": "600"
          }
        ],
        "headline-lg-mobile": [
          "24px",
          {
            "lineHeight": "32px",
            "fontWeight": "600"
          }
        ],
        "body-md": [
          "16px",
          {
            "lineHeight": "24px",
            "fontWeight": "400"
          }
        ]
      }
    },
  },
  plugins: [],
}
