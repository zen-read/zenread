/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["../../packages/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      "full-black": "var(--full-black)",
      "full-black-75%": "var(--full-black-75)",
      "full-black-50%": "var(--full-black-50)",
      "full-black-25%": "var(--full-black-25)",
      black: "var(--black)",
      "black-75%": "var(--black-75)",
      "black-50%": "var(--black-50)",
      "black-25%": "var(--black-25)",
      dust: "var(--dust)",
      "dust-75%": "var(--dust-75)",
      "dust-50%": "var(--dust-50)",
      "dust-25%": "var(--dust-25)",
      white: "var(--white)",
      "white-75%": "var(--white-75)",
      "white-50%": "var(--white-50)",
      "white-25%": "var(--white-25)",
      red: "var(--red)",
      "red-75%": "var(--red-75)",
      "red-50%": "var(--red-50)",
      "red-25%": "var(--red-25)",
      orange: "var(--orange)",
      "orange-75%": "var(--orange-75)",
      "orange-50%": "var(--orange-50)",
      "orange-25%": "var(--orange-25)",
      yellow: "var(--yellow)",
      "yellow-75%": "var(--yellow-75)",
      "yellow-50%": "var(--yellow-50)",
      "yellow-25%": "var(--yellow-25)",
      lime: "var(--lime)",
      "lime-75%": "var(--lime-75)",
      "lime-50%": "var(--lime-50)",
      "lime-25%": "var(--lime-25)",
      mint: "var(--mint)",
      "mint-75%": "var(--mint-75)",
      "mint-50%": "var(--mint-50)",
      "mint-25%": "var(--mint-25)",
      sky: "var(--sky)",
      "sky-75%": "var(--sky-75)",
      "sky-50%": "var(--sky-50)",
      "sky-25%": "var(--sky-25)",
      water: "var(--water)",
      "water-75%": "var(--water-75)",
      "water-50%": "var(--water-50)",
      "water-25%": "var(--water-25)",
      "acid-blue": "var(--acid-blue)",
      "acid-blue-75%": "var(--acid-blue-75)",
      "acid-blue-50%": "var(--acid-blue-50)",
      "acid-blue-25%": "var(--acid-blue-25)",
      pink: "var(--pink)",
      "pink-75%": "var(--pink-75)",
      "pink-50%": "var(--pink-50)",
      "pink-25%": "var(--pink-25)",
      transparent: "transparent",
      primary: "var(--primary)",
      "primary-75%": "var(--primary-75)",
      "primary-50%": "var(--primary-50)",
      "primary-25%": "var(--primary-25)",
      secondary: "var(--secondary)",
      "secondary-75%": "var(--secondary-75)",
      "secondary-50%": "var(--secondary-50)",
      "secondary-25%": "var(--secondary-25)",
    },
    fontFamily: {
      sans: ["Onest", "sans-serif"],
    },
    extend: {
      spacing: {
        0: "0",
        1: "1px",
        2: "2px",
        3: "4px",
        4: "8px",
        5: "12px",
        6: "16px",
        7: "24px",
        8: "32px",
        9: "36px",
        10: "40px",
        11: "48px",
        12: "64px",
        13: "96px",
      },
      borderRadius: {
        none: "0",
        DEFAULT: "4px",
        md: "8px",
        full: "9999px",
        sm: "2px",
        xl: "16px",
      },
    },
  },
};
