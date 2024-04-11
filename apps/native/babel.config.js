/* eslint-disable no-undef */
const path = require("path");

module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          extensions: [".js", ".ts", ".json", ".jsx", ".tsx"],
          alias: {
            root: ["./"],
            "@repo/ui": path.resolve(__dirname, "../../packages/ui/src"),
            "@repo/utils": path.resolve(__dirname, "../../packages/utils/src"),
          },
        },
      ],
    ],
  };
};
