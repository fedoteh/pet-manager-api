import { Router, Request, Response } from 'express';
import petsRouter from './pets/pets';

// Create the API router for /api
const apiRouter = Router();

// Mount the petsRouter on /pets
apiRouter.use('/pets', petsRouter);

// apiRouter.get('/', (req: Request, res: Response) => {
//     res.send('API is working');
// });

export default apiRouter;








