import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      animation: {
        'subtle-zoom': 'subtle-zoom 20s infinite alternate',
        'fade-up': 'fade-up 1s ease-out forwards',
        'bounce': 'bounce 1s infinite',
      },
      keyframes: {
        'subtle-zoom': {
          'from': { transform: 'scale(1)' },
          'to': { transform: 'scale(1.1)' },
        },
        'fade-up': {
          'from': { 
            opacity: '0',
            transform: 'translateY(40px)',
            filter: 'blur(10px)',
          },
          'to': { 
            opacity: '1',
            transform: 'translateY(0)',
            filter: 'blur(0)',
          },
        },
      },
    },
  },
  plugins: [],
}
export default config
