module.exports = {
    "moduleFileExtensions": [
        "ts",
        "js"
    ],
    "transform": {
      "^.+\\.ts$": "ts-jest"
    },
    "globals": {
      "ts-jest": {
        "tsConfig": "tsconfig.json"
      }
    },
    "testMatch": [
      // "**/__tests__/**/*.+(ts|tsx|js)",
      "**/?(*.)+(spec|test).+(ts|tsx|js)"
    ],
    // coverage
    "collectCoverage" : true,
    "collectCoverageFrom": ['src/*/*.(ts)'],
    "coverageDirectory": "coverage",
    // typescript
    "preset": 'ts-jest',
    "testEnvironment": "node",
    // reporter
    "reporters": [
      'default',
      [
        'jest-junit',
        {
          suiteName: 'jest tests',
          outputDirectory: 'reports/jest',
          outputName: 'js-test-results.xml',
          classNameTemplate: '{classname}-{title}',
          titleTemplate: '{classname}-{title}',
          ancestorSeparator: ' › ',
        },
      ],
    ],
  }