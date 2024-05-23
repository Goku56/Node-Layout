import { config } from 'dotenv';
config();

const { PORT } = process.env;
const NODE_ENV = process.env.NODE_ENV;

export const Config = {
  PORT,
  NODE_ENV,
};
