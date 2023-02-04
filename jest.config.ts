module.exports = {
  preset: 'react-native',
  setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],
  transformIgnorePatterns: [
    'node_modules/(?!@react-native|react-native|axios)',
  ],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  //   setupFiles: ['./jest.setup.js'],
  moduleNameMapper: {
    '.+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$':
      'jest-transform-stub',
    '\\.svg': '<rootDir>/src/utils/mocks/svg.mock.ts',
  },
  coverageReporters: ['clover', 'json', 'lcov', 'text', 'json-summary'],
  collectCoverage: false,
  collectCoverageFrom: [
    '<rootDir>/src/screens/**/*.{ts,tsx}',
    '<rootDir>/src/components/**/*.{ts,tsx}',
  ],
};
