module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  moduleNameMapper: {
    '^@util/(.*)$': '<rootDir>/src/util/$1',
    '^@routes/v1/(.*)$': '<rootDir>/src/routes/v1/$1',
    '^@db_mock/(.*)$': '<rootDir>/src/db_mock/$1',
    '^@controllers/(.*)$': '<rootDir>/src/controllers/$1' 
  },
  transform: {
    '^.+\\.tsx?$': ['ts-jest', { 
      tsconfig: 'tsconfig.json' 
    }]
  },
  testPathIgnorePatterns: ['/node_modules/', '/dist/'], // Ignore dist directory
};