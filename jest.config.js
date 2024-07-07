module.exports = {
  collectCoverage: true,
  coveragePathIgnorePatterns: [
    // Pattern to exclude styles folder
    "<rootDir>/styles/",
    "<rootDir>/src/index.tsx/",
    // Pattern to exclude files ending with .types.js or .types.ts
    ".*.styles.(js|ts)$",
    "!**/src/index.tsx",
  ],
  collectCoverageFrom: [
    "src/**/*.{js,jsx,ts,tsx}",
    "!**/index.tsx", // Exclude index.js from coverage
    "!**/index.ts", // Exclude index.js from coverage
  ],
  // Other Jest configurations
};
