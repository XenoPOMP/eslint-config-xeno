import type { BuildConfig } from 'unbuild';

const config: BuildConfig = {
  entries: ['./src/index.ts'],
  failOnWarn: false,
  declaration: true,
};

export default config;
