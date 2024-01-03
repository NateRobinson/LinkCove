// eslint-disable-next-line import/no-extraneous-dependencies
import { app } from './src';

import('vite-plugin-blocklet').then(({ setupClient }) => {
  setupClient(app);
});
