//this is for antd mobile
// module.exports = function override(config, env) {
//   // do stuff with the webpack config...
//   return config;
// };
//this is for antd mobile
const { override, fixBabelImports } = require("customize-cra");
module.exports = override(
  fixBabelImports("import", [
    { libraryName: "antd-mobile", style: "css" },
    { libraryName: "antd", style: "css" },
  ])
);
