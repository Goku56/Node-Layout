import request from 'supertest';
import app from '../../src/app';
import { DataSource } from 'typeorm';
import { AppDataSource } from '../../src/data-source';
import { User } from '../../src/entity/User';
import { Roles } from '../../src/constants';

describe('POST /auth/register', () => {
  let connection: DataSource;

  //connect database for testing
  beforeAll(async () => {
    connection = await AppDataSource.initialize();
  });

  beforeEach(async () => {
    await connection.dropDatabase();
    await connection.synchronize();
  });

  //disconnect database after each test
  afterAll(async () => {
    await connection.destroy();
  });

  describe('Given all fields', () => {
    it('should return the 201 statusCode', async () => {
      //AAA
      //Arrange
      const userData = {
        firstName: 'John',
        lastName: 'Doe',
        email: 'johndoe@gmail.com',
        password: 'somesecret',
      };

      //Act
      const response = await request(app).post('/auth/register').send(userData);

      //Assert
      expect(response.statusCode).toBe(201);
    });

    it('should return json', async () => {
      //AAA
      //Arrange
      const userData = {
        firstName: 'John',
        lastName: 'Doe',
        email: 'johndoe@gmail.com',
        password: 'somesecret',
      };

      //Act
      const response = await request(app).post('/auth/register').send(userData);

      //Assert
      expect(response.headers['content-type']).toEqual(expect.stringContaining('json'));
    });

    it('should persist data in the database', async () => {
      //AAA
      //Arrange
      const userData = {
        firstName: 'John',
        lastName: 'Doe',
        email: 'johndoe@gmail.com',
        password: 'somesecret',
      };

      //Act
      await request(app).post('/auth/register').send(userData);

      //Assert
      const userRepository = connection.getRepository(User);
      const users = await userRepository.find();
      expect(users.length).toBe(1);
      expect(users[0].firstName).toBe(userData.firstName);
      expect(users[0].lastName).toBe(userData.lastName);
      expect(users[0].email).toBe(userData.email);
    });

    it('should assign a customer role', async () => {
      //Arrange
      const userData = {
        firstName: 'John',
        lastName: 'Doe',
        email: 'johndoe@gmail.com',
        password: 'somesecret',
      };

      //Act
      await request(app).post('/auth/register').send(userData);

      //Assert
      const userRepository = connection.getRepository(User);
      const users = await userRepository.find();
      expect(users[0]).toHaveProperty('role');
      expect(users[0].role).toBe(Roles.USER);
    });
  });
  describe('Fields are missing', () => {});
});
