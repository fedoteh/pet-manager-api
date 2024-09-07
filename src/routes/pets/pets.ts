import { Router, Request, Response, NextFunction }  from 'express';
import dogsRouter from './dogs/dogsRouter';
import catsRouter from './cats/catsRouter';

// Create a new router to handle the pets routes
const petsRouter = Router();

// Enum for the species parameter
enum Species {
  Dogs = 'dogs',
  Cats = 'cats'
}

// Type guard function to validate species
const isValidSpecies = (paramToCheck: any): paramToCheck is Species => {
  return Object.values(Species).includes(paramToCheck);
};

// Middleware to validate species
petsRouter.use('/:petSpecies', (req: Request, res: Response, next: NextFunction) => {
  const { petSpecies } = req.params;
  console.log(petSpecies)
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
  } else {
    next();
  }
});

export default petsRouter;
