/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    fontFamily: {
      sans: ['Karla Variable', 'ui-sans-serif', 'system-ui'],
      serif: ['DM Serif Display', 'ui-serif', 'Georgia'],
      mono: ['Courier Prime', 'ui-monospace', 'SFMono-Regular']
    },
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        cream: '#F3F7F0',
        smoke: '#100B00',
        ash: '#C2D3CD',
        bittersweet: '#ff715b',
        byzantine: '#2F52E0'
      }
    }
  },
  plugins: []
};
