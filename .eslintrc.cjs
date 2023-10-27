module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:import/recommended",
    "plugin:@typescript-eslint/recommended-type-checked",
    "plugin:@typescript-eslint/stylistic-type-checked",
    "plugin:react-hooks/recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:jsx-a11y/strict",
    "prettier",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parser: "@typescript-eslint/parser",
  plugins: ["react-refresh"],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: ["./tsconfig.json", "./tsconfig.node.json"],
    tsconfigRootDir: __dirname,
  },
  rules: {
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
    "@typescript-eslint/consistent-type-imports": "error",
    "import/no-internal-modules": [
      "error",
      { allow: ["**/assets/*", "**/node_modules/**"] },
    ],
    // for some reason I keep getting error re: strictNullChecks despite strict
    // mode being enabled in tsconfig.json; disabling this rule for now
    "@typescript-eslint/prefer-nullish-coalescing": "off",
    // map href => to for react-router-dom
    "jsx-a11y/anchor-is-valid": [
      "error",
      {
        components: ["NavLink", "Link"],
        specialLink: ["to"],
      },
    ],
  },
  settings: {
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"],
    },
    "import/resolver": {
      typescript: {
        alwaysTryTypes: true, // always try to resolve types under `<root>@types` directory even it doesn't contain any source code, like `@types/unist`
      },
    },
    react: { version: "detect" },
    "jsx-a11y": {
      components: {
        Link: "a",
        NavLink: "a",
      },
    },
  },
};
