// NOTE: add next line to keep sqlite3 in the bundle
import 'sqlite3';
import 'mariadb';

import { Sequelize } from 'sequelize';

import { config } from '../../libs/env';
import logger from '../../libs/logger';

// eslint-disable-next-line import/prefer-default-export
export const sequelize = new Sequelize(config.database.url, {
  logging: logger.log,
  pool: config.database.pool,
});
