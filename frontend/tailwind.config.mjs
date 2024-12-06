/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				'body': ['Notable'],
		  },
		  colors: {
			easyblue: '#1A2B35', // Custom color
		  },
		  keyframes: {
			fadeInUp: {
				'0%': {
					opacity: '0',
					transform: 'translateY(20px) scale(1.25)',
				},
				'100%': {
					opacity: '1',
					transform: 'translateY(0) scale(1)',
				},
			},
			gapGrow: {
				'0%': { gap: '40px' },
				'100%': { gap: '0px'  },
			},
		  },
		  animation: {
			fadeInUp: 'fadeInUp 1s ease-out forwards',
			gapGrow: 'gapGrow 1s ease-in-out',
		  },
	},
	},
	plugins: [],
}
