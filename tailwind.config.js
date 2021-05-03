module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      height: {
        navbar: "50vh",
      },
      transitionProperty: {
        height: "height",
      },
    },
  },
  variants: {
    extend: {
      outline: ["hover", "active"],
    },
  },
  plugins: [],
  /* corePlugins: {
    outline: false,
  }, */
};
