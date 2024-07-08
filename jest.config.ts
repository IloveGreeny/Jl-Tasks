import type {Config} from '@jest/types';

const config: Config.InitialOptions = {
  testEnvironment: "node",
  preset: "ts-jest",
  verbose: true,
};
export default config;