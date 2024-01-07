import env from '@blocklet/sdk/lib/env';

export default { ...env, chainHost: process.env.CHAIN_HOST || '' };

function parseConfigFromPreferences() {
  return {
    database: {
      url: `sqlite:${env.dataDir}/link-cove.db`,
      pool: {
        min: 0,
        max: 2,
      },
    },
  };
}

export const config = parseConfigFromPreferences();
