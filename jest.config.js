/**
 * Jest global test configuration
 * For more info refer https://jestjs.io/docs/en/configuration
 */

module.exports = {
  name: "race-event-listener",
  testTimeout: 10000,
  testEnvironment: "node",
  moduleFileExtensions: ['js', 'json'],
  collectCoverage: true,  
  collectCoverageFrom: [
    "src/**"
  ],
  coverageDirectory:'reports',
  coverageReporters: ["lcov"],
  cacheDirectory: '.cache/',
  verbose: true
};