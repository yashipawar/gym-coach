// @type {import('tailwindcss').Config} 
import plugin from 'tailwindcss/plugin'
// const plugin = require("tailwindcss/plugin");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,html}"],
  theme: {
    extend: {},
  },
  plugins: [
    plugin(function({ addUtilities, theme }) {
      const colors = theme('colors'); // Get the theme colors
      const neonUtilities = {}; // Initialize an empty object for neon utilities

      // Iterate over each color in the theme
      for (const color in colors) {
        // Check if the color's value is an object (which means it has shades like '500', '700', etc.)
        if (typeof colors[color] === 'object') {
          const color1 = colors[color]['500']; // Lighter shade
          const color2 = colors[color]['700']; // Darker shade
          // Create a utility class for the neon effect
          neonUtilities[`.neon-${color}`] = {
            boxShadow: `0 0 5px ${color1}, 0 0 20px ${color2}`
          };
        }
      }

      // Add the utilities to Tailwind
      addUtilities(neonUtilities, ['responsive', 'hover']);
    })
  ],
}
