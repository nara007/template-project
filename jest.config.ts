export {};
module.exports = {
  collectCoverage: false,
  collectCoverageFrom: ['src/**/*.{ts,tsx}', '!src/**/*.d.ts', '!**/vendor/**'],
  coverageDirectory: 'coverage',
  testEnvironment: 'jsdom',
  transform: {
    '.(ts|tsx)': 'ts-jest',
  },

  coveragePathIgnorePatterns: [
    '/node_modules/',
    '/coverage',
    'package.json',
    'package-lock.json',
    'reportWebVitals.ts',
    'setupTests.ts',
    'index.tsx',
  ],
  testMatch: ['<rootDir>/**/*.test.ts', '<rootDir>/**/*.spec.ts'],
  setupFilesAfterEnv: ['<rootDir>/setupTests.ts'],
};
