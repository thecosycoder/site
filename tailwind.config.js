/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    fontFamily: {
      sans: ["Karla Variable", "ui-sans-serif", "system-ui"],
      serif: ["DM Serif Display", "ui-serif", "Georgia"],
      italic: [],
      mono: ["Courier Prime", "ui-monospace", "SFMono-Regular"],
    },
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        platinum: "#E6E8E6",
        smoke: "#100B00",
        charcoal: "#353A47",
        "cool-gray": "#848FA5",
        "cool-grey": "#848FA5",
        coral: "#EF8354",
        brandeis: "#256EFF",
      },
      listStyleType: {
        circle: "circle",
      },
      boxShadow: {
        "inner-lg": "inset 0 2px 4px 0 rgb(0 0 0 / 0.10);",
      },
    },
  },
  darkMode: "selector",
};
