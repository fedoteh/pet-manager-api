import { Router, Request, Response, NextFunction }  from 'express';
import dogsRouter from './dogs/dogsRouter';
import catsRouter from './cats/catsRouter';

// Create a new router to handle the pets routes
const petsRouter = Router();

// Typing for the species parameter
type Species = 'dogs' | 'cats';

// Accepted species
const acceptedSpecies: Species[] = ['dogs', 'cats'];

const isValidSpecies = (species: string): species is Species => acceptedSpecies.includes(species as Species);

// Middleware to validate species
petsRouter.use((req: Request, res: Response, next: NextFunction) => {
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
    if (petSpecies === 'dogs') {
      dogsRouter(req, res, next);
    } else if (petSpecies === 'cats') {
      catsRouter(req, res, next);
    } else {
      res.status(404).send({ error: 'Species not found' });
    }
  });

export default petsRouter;
