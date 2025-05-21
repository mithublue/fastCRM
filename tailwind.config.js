/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./src/**/*.{js,ts,jsx,tsx}", // Include files in src/
		"./app/**/*.{js,ts,jsx,tsx}", // Include files in app/ (for future routes)
	],
	theme: {
		extend: {},
	},
	plugins: [],
};
