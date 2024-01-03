/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			lineHeight: {
				lineHeight: {
					40: '40px',
				},
			},
		},
		fontFamily: {
			indie: ['Indie Flower'],
		},
	},
	plugins: [],
};
