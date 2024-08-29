import type { Config } from 'tailwindcss'

export default {
    content: ['./src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                green: {
                    600: '#0e874e',
                },
            },
        },
    },
    plugins: [],
} satisfies Config
