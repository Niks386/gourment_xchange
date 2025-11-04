/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./**/*.html",
        "./**/*.php",
        "./assets/js/**/*.js"
    ],
    theme: {
        extend: {
            fontFamily: {
                'brandon': ["brandon-grotesque", "sans-serif"],
                'new-atten': ["New Atten", "sans-serif"],
            },
            colors: {
                'color-3k': '#8FBFE2',
                'color-me': '#C8AAD0',
                'color-7k': '#EBBB77',
                'color-retail': '#E29EA0',
                'color-showroom': '#F6EE7B',
                'color-ancillary': '#D1E3F5',
                'color-ffffff': '#FFFFFF',
                'color-dcddde': '#dcddde',
                'color-231f20': '#fdfdfd',
                'color-eb3b1d': '#EB3B1D',
                'color-f2673a': '#f2673a',
                'color-f5885f': '#F5885F',
                'white-80': 'rgba(255, 255, 255, 0.8)',
                'dcddde-80': 'rgba(220, 221, 222, 0.8)',
            },
            fontSize: {
                '7': '7px',
                '15': '15px',
                '18': '18px',
                '23': '23px',
                '28': '28px',
                '32': '32px',
                '38': '38px',
            },
            letterSpacing: {
                '0-7': '0.7px',
                '1-5': '1.5px',
                '1-8': '1.8px',
                '1-15': '1.15px',
                '1-96': '1.96px',
                '2-24': '2.24px',
                '2-66': '2.66px',
            },
            lineHeight: {
                '10': '10px',
                '22': '22px',
                '26': '26px',
                '28': '28px',
                '42': '42px',
                '45': '45px',
                '55': '55px',
            },
            boxShadow: {
                'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
                'inner-soft': 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
            },
        },
    },
    plugins: [],
}
