import { Config } from 'jest';

const config: Config = {
  testEnvironment: 'jsdom',
  transform: { '^.+\\.(ts|tsx)$': 'ts-jest' },
  testRegex: '/tests/.*\\.test\\.(ts|tsx)$',
  moduleNameMapper: {
    '^.*\\.scss$': 'identity-obj-proxy',
  },
  setupFilesAfterEnv: ['<rootDir>/tests/setupTests.ts'],
};
export default config;
