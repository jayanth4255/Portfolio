/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                "deep-space": "#0a0e27",
                "nebula-purple": "#6366f1",
                "nebula-pink": "#ec4899",
                "star-white": "#f8fafc",
                "orbit-glow": "#8b5cf6",
            },
            fontFamily: {
                sans: ['Poppins', 'sans-serif'],
                display: ['Outfit', 'sans-serif'],
            },
            backgroundImage: {
                'cosmic-gradient': 'radial-gradient(ellipse at top, #1e1b4b, #0a0e27)',
                'nebula-gradient': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
            },
            animation: {
                'float': 'float 6s ease-in-out infinite',
                'rotate-slow': 'rotate 30s linear infinite',
                'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
                'orbit': 'orbit 20s linear infinite',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-20px)' },
                },
                rotate: {
                    '0%': { transform: 'rotate(0deg)' },
                    '100%': { transform: 'rotate(360deg)' },
                },
                'pulse-glow': {
                    '0%, 100%': { opacity: 1, boxShadow: '0 0 30px rgba(139, 92, 246, 0.6)' },
                    '50%': { opacity: 0.8, boxShadow: '0 0 50px rgba(139, 92, 246, 0.9)' },
                },
                orbit: {
                    '0%': { transform: 'rotate(0deg) translateX(150px) rotate(0deg)' },
                    '100%': { transform: 'rotate(360deg) translateX(150px) rotate(-360deg)' },
                }
            },
            backdropBlur: {
                xs: '2px',
            }
        },
    },
    plugins: [],
}
