/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'berlin-blue': '#003D7E',
                'berlin-gold': '#FFCC00',
                'berlin-accent': '#0066CC',
                'berlin-grey': '#666666',
                'berlin-light': '#F2F2F2',
            },
            fontFamily: {
                title: ['Montserrat', 'sans-serif'],
                body: ['Open Sans', 'sans-serif'],
            },
        },
    },
    plugins: [],
}