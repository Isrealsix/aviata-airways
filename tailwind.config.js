// eslint-disable-next-line no-undef
module.exports = {
  content: [
    // Example content paths...
    "./public/**/*.html",
    "./src/**/*.{js,jsx,ts,tsx,vue}",
  ],
  theme: {
    backgroundColor: (theme) => ({
      ...theme("colors"),
      primary: "#f5f5f5",
      secondary: "#55BB06",
      third: "#EAF0FA",
      middleGray: "#E1E1E1",
      lightGray: "#EBEBEB",
    }),
    screens: {
      lg: { max: "1170px" },
      md: { max: "640px" },
    },
    fontFamily: {
      main: "Open Sans, sans-serif",
      second: "Arial, sans-serif",
    },
    boxShadow: {
      DEFAULT: "0px 2px 4px rgba(0, 0, 0, 0.15)",
    },
    extend: {
      fontSize: {
        xxs: ".625rem",
      },
      minHeight: {
        10.5: "10.5rem",
      },
      textColor: {
        dark: "#707276",
        blue: "#5763B3",
        deepDark: "#202123",
        gray: "#B9B9B9",
        orange: "#FF9900",
      },
      colors: {
        lightBlue: "#7284E4",
      },
      content: [],
      theme: {
        colors: {
          primary: "#F5F5F5",
          secondary: "#004165",
        },
        maxWidth: ({ theme, breakpoints }) => ({
          none: "none",
          full: "100%",
          min: "min-content",
          max: "max-content",
          fit: "fit-content",
          prose: "65ch",
          ...theme("screens"),
          ...breakpoints(theme("screens")),
        }),
        extend: {},
      },
      plugins: [],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
