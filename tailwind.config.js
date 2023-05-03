/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            colors: {
                primary: {
                    50: '#FCEFEE',
                    100: '#F8DBD8',
                    200: '#F0B7B2',
                    300: '#E9938B',
                    400: '#E26F64',
                    500: '#DB4C3F',
                    600: '#BD3023',
                    700: '#8E241B',
                    800: '#5E1812',
                    900: '#2F0C09',
                    950: '#1A0705',
                },
            },
        },
    },
    plugins: [],
};
