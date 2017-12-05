let path = require('path');
const APP_ROOT = path.resolve('.');

module.exports = {
  verbose: true,
  coverageThreshold: {
    global: {
      branches: 75,
      functions: 75,
      lines: 75,
      statements: 75,
    },
  },
  collectCoverage: true,
  collectCoverageFrom: [`**/*.{ts,tsx}`],
  mapCoverage: true,
  coverageReporters: ['json', 'lcov', 'text'],
  coverageDirectory: `${APP_ROOT}/test_reports/`,
  globals: {
    'ts-jest': {
      tsConfigFile: `${APP_ROOT}/tsconfig.spec.json`,
    },
  },
  rootDir: APP_ROOT,
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
  transform: {
    '^.+\\.(scss?)$': `${APP_ROOT}/node_modules/jest-css-modules`,
    '^.+\\.(tsx?)$': `${APP_ROOT}/node_modules/ts-jest/preprocessor.js`,
  },
  testMatch: [`${APP_ROOT}/src/**/*.spec.(ts|js|tsx|jsx)`],
  testEnvironment: 'node',
};
