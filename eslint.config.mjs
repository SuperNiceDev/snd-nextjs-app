import { fixupConfigRules, fixupPluginRules } from "@eslint/compat";
import { FlatCompat } from "@eslint/eslintrc";
import prettier from "eslint-plugin-prettier";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...fixupConfigRules(
    compat.extends(
      "next/core-web-vitals",
      "next/typescript",
      "plugin:prettier/recommended",
    ),
  ),
  {
    plugins: {
      prettier: fixupPluginRules(prettier),
    },
    rules: {
      "prettier/prettier": "error",
    },
  },
];

export default eslintConfig;
