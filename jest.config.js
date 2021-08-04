module.exports = {
  preset: "@vue/cli-plugin-unit-jest",
  verbose: true,
  cache: false,
  moduleFileExtensions: ['js', 'ts', 'jsx', 'tsx', 'json', 'vue'],
  transform: {
    '^.+\\.vue$': 'vue-jest',
    '.+\\.(css|styl|less|sass|scss|svg|png|jpg|ttf|woff|woff2)$': 'jest-transform-stub'
  },
  transformIgnorePatterns: ['node_modules/(?!(element-plus)/)'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '^@tests/(.*)$': '<rootDir>/tests/$1',
    '@/assets/docOnlineSvg/doconline.svg.config.js': '<rootDir>/tests/mocksvg.js'
  },
  snapshotSerializers: ['jest-serializer-vue'],
  testMatch: ['**/tests/unit/*.spec.(js|jsx|ts|tsx)'],
  testURL: 'http://localhost/',
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.vue', 'src/**/*.js']
};
