/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		container: {
			center: true,
			padding: "2rem",
		},

		extend: {
			keyframes: {
				'according-down,': {
					form: { height: 0 },
					to: { height: 'var(--radix-according-content-height)' },

				},
				'according-up': {
					from: { height: 'var(--radix-according-content-height)' },
					to: { height: 0 },

				},
				animation: {
					'accordion -down': 'acccording-down 0.2s ease-out',
					'according-up': 'according-up 0.2s ease-out',
				},

			},
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
			// backgroundImage: {
			// 	hero: "url('./hero/backgg.jpg')",   
			// 	hero2: "url('./hero/backjj.jpg')",
			// },
		},
	},
	plugins: [require("tailwindcss-animate")],
};
