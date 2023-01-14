module.exports = {
  preset: 'react-native',
  setupFilesAfterEnv: [
    '@testing-library/jest-native/extend-expect',
    '<rootDir>/setupTests.js',
  ],
  moduleNameMapper: {
    '^@src/(.*)$': '<rootDir>/src/$1',
    '^@assets/(.*)$': '<rootDir>/assets/$1',
    '^@env$': '<rootDir>/__mocks__/envMock.ts',
    '^@__test__/(.*)$': '<rootDir>/__tests__/$1',
    '^@__mocks__/(.*)$': '<rootDir>/__mocks__/$1',
    '^@commons/(.*)$': '<rootDir>/src/commons/$1',
    '^@modules/(.*)$': '<rootDir>/src/modules/$1',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__mocks__/fileMock.js',
  },
  testPathIgnorePatterns: [
    '<rootDir>/node_modules/',
    '<rootDir>/__mocks__/fileMock.js',
  ],
  transformIgnorePatterns: [
    'node_modules/?!(react-native)',
    'node_modules/?!(@react-native)',
  ],
  transform: {
    '^.+\\.js?$': 'babel-jest',
    '^.+\\.ts?$': [
      'ts-jest',
      {
        isolatedModules: true,
      },
    ],
  },
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.spec.json',
      diagnostics: {
        warnOnly: true,
      },
    },
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  collectCoverage: false,
  coverageReporters: ['lcov', 'text'],
  coveragePathIgnorePatterns: [
    '/__mocks__/',
    '/.bundle/',
    '/android/',
    '/ios/',
    '/captures/',
    '/node_modules/',
    '/assets/',
    '/packager/',
    '/commons/',
    '.test.ts',
    '.test.tsx',
    '.png',
    '.svg',
  ],
  coverageThreshold: {
    // TODO: enable testing threshold when all the excluded test where fixed
    // global: {
    //   branches: 14,
    //   functions: 30,
    //   lines: 50,
    // },
  },
};
