/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        main_color: "#31315b",
        main_dark: "#282851",
        secondary_color: "#3d79b1",
        tasks_darkColor: "#44446b",
      },
    },
  },
  plugins: [],
};
