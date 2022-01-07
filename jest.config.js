module.exports = {
  preset: "@vue/cli-plugin-unit-jest/presets/typescript-and-babel",
  transform: {
    "^.+\\.vue$": "vue-jest",
  },
  testPathIgnorePatterns: [
    "/node_modules/",
    "/tests/",
    "/scripts/",
    "/public/",
    "/styles/",
  ],
  testMatch: ["<rootDir>/**/*.(spec).(ts|tsx)"],
  collectCoverageFrom: ["src/**/*.(vue|ts|js)"],
  coverageReporters: ["json", "lcov", "text-summary", "html"],
};
