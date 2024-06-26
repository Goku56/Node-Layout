import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { User } from './entity/User';
import { Config } from './config';

const { DB_HOST, DB_NAME, DB_PASS, DB_PORT, DB_USER } = Config;

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: DB_HOST,
  port: Number(DB_PORT),
  username: DB_USER,
  password: DB_PASS,
  database: DB_NAME,
  //Keep it false in production, Always keep it false.
  synchronize: false,
  logging: false,
  entities: [User],
  migrations: [],
  subscribers: [],
});
