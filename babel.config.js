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
            components: "./src/components",
            _main: "./src/components/_main",
            screens: "./src/screens",
            config: "./src/config",
            navigations: "./src/navigations",
            utils: "./src/utils",
            actions: "./src/state/actions",
            constants: "./src/constants",
            contexts: "./src/contexts",
            reducers: "./src/reducers",
            assets: "./src/assets/",
            hooks: "./src/hooks",
            data: "./src/data",
          },
        },
      ],
    ],
  };
};
