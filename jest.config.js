module.exports = {
  collectCoverageFrom: [
    // "src/**/*.ts",
    // "src/components/*.ts",
    "!**/node_modules/**",
    "/*.ts"
  ],
  coverageThreshold: {
    global: {
      lines: 80,
      // branches: 70
    },
  },
};
