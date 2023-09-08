/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "encode-sans": ["Encode Sans", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
      },
      colors: {
        neutral: {
          10: "#FFFFFF",
          20: "#F6F6F7",
          30: "#E3E1E5",
          40: "#384145",
          50: "#23292B",
        },
      },
    },
  },
  plugins: [],
};
