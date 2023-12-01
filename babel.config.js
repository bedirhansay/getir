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
            context: "./src/context",
            hooks: "./src/hooks",
            theme: "./src/theme/*",
          },
        },
      ],
    ],
  };
};
