import { Request, Response } from 'express';

export const signup = (req: Request, res: Response) => {
  res.status(201).json();
};
