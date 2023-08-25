module.exports = {
  testEnvironment: 'node', // Use Node.js environment for testing
  transform: {
    '^.+\\.tsx?$': 'ts-jest', // Use ts-jest for TypeScript files
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.ts?$', // Match test file naming pattern
  collectCoverage: true, // Enable code coverage collection
  coverageReporters: ['lcov', 'text-summary'], // Specify coverage reporters
};
