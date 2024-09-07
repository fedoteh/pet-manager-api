import express from 'express';
import petsRouter from './routes/pets/pets';

// Create the API router for /api
const apiRouter = express.Router();

// Mount the petsRouter on /pets
apiRouter.use('/pets', petsRouter);

export default apiRouter;
