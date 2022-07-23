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
    "^@/mocks": "<rootDir>/src/__tests__/mocks",
    "^@/msw": "<rootDir>/src/__tests__/msw",
    "^@/(.+)": "<rootDir>/src/$1",
    "\\.(css|less|sass|scss)$": "<rootDir>/src/__tests__/mocks/styleMock.ts",
  },
  cacheDirectory: "<rootDir>/src/__tests__/.cache",
  collectCoverage: true,
  collectCoverageFrom: ["**/*.{ts,tsx}", "!**/config/**", "!**/__tests__/**"],
  coverageDirectory: "<rootDir>/src/__tests__/.coverage",
  setupFilesAfterEnv: ["<rootDir>/src/__tests__/jest.setup.ts"],
  testEnvironment: "jest-environment-jsdom",
  verbose: true,
}
