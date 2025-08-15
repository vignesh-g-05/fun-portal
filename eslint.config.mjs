import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.config({
    extends: ["next/core-web-vitals", "next/typescript", "prettier"],
    rules: {
      "no-unused-vars": ["error"],
      "no-useless-assignment": ["error"],
      "no-console": ["warn"],
      "require-await": ["warn"],
      "sort-imports": ["warn"],
      "@typescript-eslint/no-unused-vars": ["error"], // TS-aware unused vars
      "@typescript-eslint/no-explicit-any": "warn", // avoid 'any' where possible
      "@typescript-eslint/consistent-type-imports": "warn", // enforce `import type`
    },
  }),
];

export default eslintConfig;
