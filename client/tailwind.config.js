module.exports = {
    purge: [],
    darkMode: false, // or 'media' or 'class'
    theme: {
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
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
    corePlugins: {
        preflight: false,
    }
}
