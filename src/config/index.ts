import { config } from 'dotenv';
import path from 'path';

config({ path: path.join(__dirname, `../../.env.${process.env.NODE_ENV}`) });

const { PORT, DB_HOST, DB_NAME, DB_USER, DB_PASS, DB_PORT } = process.env;
const NODE_ENV = process.env.NODE_ENV || 'development';

export const Config = {
  PORT,
  NODE_ENV,
  DB_HOST,
  DB_NAME,
  DB_USER,
  DB_PASS,
  DB_PORT,
};
