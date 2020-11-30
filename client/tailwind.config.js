module.exports = {
    purge: [],
    darkMode: false, // or 'media' or 'class'
    theme: {
        fontFamily: {
          sans: ['Poppins', 'sans-serif'],
        },
        extend: {
            colors: {
                black: {
                  default: "#121B29",
                  100: "#71767f",
                  200: "#595f69",
                  300: "#414954",
                  400: "#2a323e",
                  500: "#121B29",
                  600: "#101825",
                  700: "#0e1621",
                  800: "#0d131d",
                  900: "#0b1019",
                },
                white: "#fff"
            },
            backgroundColor: {
                primary: '#FBFCFE'
            },
            borderColor: {
                primary: {
                    500: '#DDE3E8',
                }
            },
            margin: {
                '1/5' : '20%',
            },
            maxWidth: {
                '90ch': '90ch'
            }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [
        require('@tailwindcss/typography'),
    ],
}
