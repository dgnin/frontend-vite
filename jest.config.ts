import { Config } from 'jest';

const config: Config = {
  testEnvironment: 'jsdom',
  transform: { '^.+\\.(ts|tsx)$': 'ts-jest' },
  testRegex: '/tests/.*\\.test\\.(ts|tsx)$',
  moduleNameMapper: {
    '^.*\\.scss$': 'identity-obj-proxy',
    '^@styles/(.*)$': '<rootDir>/src/assets/styles/$1',
    '^@components/(.*)$': '<rootDir>/src/components/$1',
    '^@modules/(.*)$': '<rootDir>/src/modules/$1',
    '^@sections/(.*)$': '<rootDir>/src/sections/$1',
  },
  setupFilesAfterEnv: ['<rootDir>/tests/setupTests.ts'],
};
export default config;
