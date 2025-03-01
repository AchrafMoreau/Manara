import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = {
  extends: [
    ...compat.extends("next/core-web-vitals", "next/typescript"), // Spread operator fixed here
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    // Other extensions can be added here
  ],
  parser: '@typescript-eslint/parser',
  rules: {
    // Disable the no-unused-vars rule for TypeScript files
    '@typescript-eslint/no-unused-vars': 'off',
  },
};

export default eslintConfig;
