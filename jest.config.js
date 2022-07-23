module.exports = {
  globals: {
    "ts-jest": {
      tsconfig: "<rootDir>/src/__tests__/tsconfig.test.json",
    },
  },
  roots: ["<rootDir>/src"],
  testMatch: ["**/__tests__/**/*.+(spec|test).+(ts|tsx|js)"],
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
  },
  transformIgnorePatterns: ["node_modules"],
  moduleNameMapper: {
    "^@/(.+)": "<rootDir>/src/$1",
  },
  cacheDirectory: "<rootDir>/src/__tests__/.cache",
  collectCoverage: true,
  collectCoverageFrom: [
    "**/*.{ts,tsx}",
    "!**/node_modules/**",
    "!**/vendor/**",
  ],
  coverageDirectory: "<rootDir>/src/__tests__/.coverage",
  setupFilesAfterEnv: ["<rootDir>/src/__tests__/jest.setup.ts"],
  testEnvironment: "jest-environment-jsdom",
  verbose: true,
}
