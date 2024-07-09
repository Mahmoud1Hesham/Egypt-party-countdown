/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        "home-img":
          "linear-gradient(to right , rgba(214, 46, 51, 0.6), rgba(214, 46, 51, 0.6)),url('../src/assets/events-heavenly-header.jpg')",
          "count-down-img":
          "linear-gradient(to right , rgba(214, 46, 51, 0.6), rgba(214, 46, 51, 0.6)),url('../src/assets/invitation.jpg')",
      },
    },
  },
  plugins: [],
};
