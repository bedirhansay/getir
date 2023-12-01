module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      "nativewind/babel",
      [
        "module-resolver",
        {
          extesions: [".js", "jsx", "ts", "tsx"],
          root: ["."],
          alias: {
            navigations: "./src/navigations",
            components: "./src/components",
            screens: "./src/screens",
            utils: "./src/utils",
            assets: "./src/assets",
            constants: "./src/constants",
            contextProvider: "./src/contextProvider",
            reducers: "./src/contextProvider/reducers",
            hooks: "./src/hooks",
            theme: "./src/theme/*",
            "@reduxjs/toolkit": [
              "node_modules/@reduxjs/toolkit/dist/redux-toolkit.cjs.production.min.js",
            ],
          },
        },
      ],
    ],
  };
};
