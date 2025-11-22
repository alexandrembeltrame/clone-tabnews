import js from "@eslint/js";
import nextPlugin from "@next/eslint-plugin-next";
import jestPlugin from "eslint-plugin-jest";
import prettier from "eslint-config-prettier";

const config = [
  js.configs.recommended,

  {
    ignores: ["node_modules/**", ".next/**", "dist/**", "out/**"],
  },

  // Next rules
  {
    files: ["**/*.{js,jsx}"],
    plugins: {
      "@next/next": nextPlugin,
    },
    rules: {
      ...nextPlugin.configs.recommended.rules,
      ...nextPlugin.configs["core-web-vitals"].rules,
    },
  },

  // Jest rules — Jest 30 (novo)
  {
    files: ["**/*.{test,spec}.{js,jsx}", "tests/**/*.js"],
    plugins: {
      jest: jestPlugin,
    },
    languageOptions: {
      globals: jestPlugin.environments.globals,
    },
    rules: {
      ...jestPlugin.configs["flat/recommended"].rules,
    },
  },

  // Prettier — flat config
  prettier,
];

export default config;
