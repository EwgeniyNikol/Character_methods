module.exports = {
  testEnvironment: 'node',
  coveragePathIgnorePatterns: [
    '/node_modules/',
    '/dist/',
  ],
  collectCoverageFrom: [
    'src/js/**/*.js',
    '!src/js/app.js',
  ],
  coverageThreshold: {
    global: {
      lines: 100,
    },
  },
};
