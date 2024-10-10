/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ["class"],
	content: [
	  "./pages/**/*.{js,ts,jsx,tsx,mdx}",
	  "./components/**/*.{js,ts,jsx,tsx,mdx}",
	  "./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		backgroundImage: {
			'back': "url('/backgg.jpg')", 
		  },
	  extend: {
		colors: {
		  white: '#fff',
		  black: '#273029',
		  soft_green: {
			DEFAULT: '#85c7dc',
			secondary: '#f3f9fb',
		  },
		  grey: {
			DEFAULT: '#888',
			secondary: '#f8f8f8',
		  },
		  orange: '#f2994a',
		  outline: '#f1f1f1',
		  pink: '#f3d1d7',
		  body: '#e5e5e5',
		  background: 'var(--background)',
		  foreground: 'var(--foreground)',
		},
		screens: {
		  sm: '640px',
		  md: '768px',
		  lg: '960px', // This could be renamed to 'xl'
		  xl: '1200px',
		},
		borderRadius: {
		  lg: 'var(--radius)',
		  md: 'calc(var(--radius) - 2px)',
		  sm: 'calc(var(--radius) - 4px)',
		},
		backgroundImage: {
		  hero: 'url(/hero/bg.png)',
		  hero2: 'url(/hero/bg-2.png)',
		},
	  },
	},
	plugins: [require("tailwindcss-animate")],
  };
  