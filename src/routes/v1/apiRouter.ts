import { Router } from 'express';
import petsRouter from './pets/petsRouter';

const apiRouterV1 = Router();

apiRouterV1.use('/pets', petsRouter);

export default apiRouterV1;
