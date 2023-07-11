import { Router, Request, Response } from 'express';

export const router = Router();

router.get('/greet-the-world', async (req: Request, res: Response) => {
  res.status(200).send({ message: 'Hello World!' });
});
