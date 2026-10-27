/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                "deep-space": "#090D16",
                "surface-dark": "#0F172A",
                "surface-card": "#131C31",
                "surface-card-hover": "#17233D",
                "nebula-purple": "#6366F1",
                "nebula-pink": "#EC4899",
                "star-white": "#F8FAFC",
                "orbit-glow": "#8B5CF6",
                "brand-indigo": "#6366F1",
                "brand-cyan": "#06B6D4",
                "brand-emerald": "#10B981",
                "brand-amber": "#F59E0B",
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
                display: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
                mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
            },
            backgroundImage: {
                'cosmic-gradient': 'radial-gradient(ellipse at top, #1E1B4B 0%, #090D16 70%)',
                'radial-spotlight': 'radial-gradient(circle at center, rgba(99, 102, 241, 0.15) 0%, transparent 70%)',
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
            },
            animation: {
                'float': 'float 6s ease-in-out infinite',
                'rotate-slow': 'rotate 30s linear infinite',
                'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
                'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-12px)' },
                },
                'pulse-glow': {
                    '0%, 100%': { opacity: '0.8', filter: 'drop-shadow(0 0 15px rgba(99, 102, 241, 0.4))' },
                    '50%': { opacity: '1', filter: 'drop-shadow(0 0 30px rgba(99, 102, 241, 0.7))' },
                },
            },
            backdropBlur: {
                xs: '2px',
            }
        },
    },
    plugins: [],
}
