module.exports = {
  root: true,
  env: {
    es2021: true,
    node: true,
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.json",
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["@typescript-eslint", "import", "react", "jest", "prettier"],
  extends: [
    "@react-native",
    "plugin:@typescript-eslint/recommended",
    "plugin:import/recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
  ],
  overrides: [
    {
      files: ["**/__tests__/**/*.[jt]s?(x)", "**/?(*.)+(spec|test).[jt]s?(x)"],
      extends: ["plugin:testing-library/react"],
    },
  ],
  settings: {
    "import/extensions": [".js", ".jsx", ".ts", ".tsx", ".mjs"],
    "import/resolver": {
      typescript: {},
    },
  },
  rules: {
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        "": "never",
        ts: "never",
        tsx: "never",
        js: "never",
        jsx: "never",
        mjs: "never",
      },
    ],
    "import/order": [
      "error",
      {
        pathGroups: [
          { pattern: "react*", group: "builtin", position: "before" },
          { pattern: "~/**", group: "external", position: "after" },
        ],
        pathGroupsExcludedImportTypes: ["builtin"],
        alphabetize: { order: "asc" },
      },
    ],
    "@typescript-eslint/no-use-before-define": "off",
    "react/prop-types": "off",
    "react/require-default-props": "off",
    "@typescript-eslint/no-unused-vars": "warn",
    quotes: ["off", "double"],
  },
  ignorePatterns: [".eslintrc.js", "metro.config.js", "jest.config.js", "babel.config.js"],
};
