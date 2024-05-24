import request from 'supertest';
import { calculateDiscount } from './src/config/utils';
import app from './src/app';

describe.skip('App', () => {
  it('should calculate the discount', () => {
    const result = calculateDiscount(100, 10);
    expect(result).toBe(10);
  });

  it('should give 200 statusCode', async () => {
    const result = await request(app).get('/').send();
    expect(result.statusCode).toBe(200);
  });
});
