// server/eslint.config.js (new)
//
// Only the complexity rule is enabled: this file measures one metric
// (Section 4.7); it is not a general style linter.

export default [
  {
    files: ["src/**/*.js"],
    languageOptions: { ecmaVersion: 2022, sourceType: "module" },
    rules: { complexity: ["warn", 8] },
  },
];
