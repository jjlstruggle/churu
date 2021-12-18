module.exports = {
  plugins: [
    require("postcss-px-to-viewport")({
      propList: ["*"],
      viewportWidth: 750,
      viewportHeight: 1334,
      unitPrecision: 3,
      propList: ["*"],
      viewportUnit: "vw",
      fontViewportUnit: "vw",
      selectorBlackList: [],
      minPixelValue: 0,
      mediaQuery: false,
      replace: true,
      exclude: [/node_modules/],
    }),
  ],
};
