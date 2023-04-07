module.exports = {
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
  },

  moduleNameMapper: {
    '\\.css$': '<rootDir>/__mocks__/styleMock.js',
  },
  // testEnvironment: 'jsdom',
  testEnvironment: 'jest-environment-jsdom',
};
