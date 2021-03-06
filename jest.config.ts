/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
export default {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch:["**/**/*.test.ts"], 
  forceExit:true,
  moduleNameMapper: {
    "^@/(.*)": "<rootDir>/src/$1"
  },
  testTimeout: 30000
};
