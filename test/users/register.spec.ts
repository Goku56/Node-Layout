import request from 'supertest';
import app from '../../src/app';

describe('POST /auth/register', () => {
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
  });
  describe('Fields are missing', () => {});
});
