import { NextFunction, Request, Response, Router } from 'express';
import { Species } from '../../util/types/types';
import catsRouter from './cats/catsRouter';
import dogsRouter from './dogs/dogsRouter';

// Create a new router to handle the pets routes
const petsRouter = Router();

// Type guard function to validate species
const isValidSpecies = (paramToCheck: any): paramToCheck is Species => {
  return Object.values(Species).includes(paramToCheck);
};

// Middleware to validate species
petsRouter.use('/:petSpecies', (req: Request, res: Response, next: NextFunction) => {
  const { petSpecies } = req.params;
  if (isValidSpecies(petSpecies)) {
    next();
  } else {
    res.status(404).send({ error: 'Species not found' });
  }
});

// Middleware to route to the correct router
petsRouter.use('/:petSpecies', (req: Request, res: Response, next: NextFunction) => {
  const { petSpecies } = req.params;
  if (petSpecies === Species.Dogs) {
    dogsRouter(req, res, next);
  } else if (petSpecies === Species.Cats) {
    catsRouter(req, res, next);
  }
});

export default petsRouter;
