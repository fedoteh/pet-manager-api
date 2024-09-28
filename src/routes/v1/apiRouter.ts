import { Router } from 'express';
import checkdbRouter from './dbtest/checkdbRouter';
import petsRouter from './pets/petsRouter';

// Create the API router for /api
const apiRouterV1 = Router();

// Mount the petsRouter on /pets
apiRouterV1.use('/pets', petsRouter);
apiRouterV1.use('/dbtest', checkdbRouter);


export default apiRouterV1;
