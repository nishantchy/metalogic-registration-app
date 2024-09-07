/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
        title: "48px",
        header: "32px",
        inputs: "20px",
        placeholder: "15px",
      },
      fontWeight: {
        title: "700px",
        header: "600px",
        inputs: "500px",
        placeholder: "500px",
      },
      colors: {
        button: "#4DAF4E",
        backButton: "#688968",
        purple: "#43056C",
        border: "#d6d6d6",
        placeInput: "#999999",
      },
      fonts: {
        primary: "Poppins",
      },
    },
  },
  plugins: [],
};
