const express = require('express');
const petsRouter = express.Router();
const dogsRouter = require('./dogs/dogsRouter');
const catsRouter = require('./cats/catsRouter');

const acceptedSpecies = ['dogs', 'cats'];

const isValidSpecies = (species) => acceptedSpecies.includes(species);

// Middleware to validate pet species and route to the correct router
petsRouter.use('/:petSpecies', (req, res, next) => {
  const { petSpecies } = req.params;
  if (isValidSpecies(petSpecies)) {
    req.species = petSpecies;
    next();
  } else {
    res.status(404).send({ error: 'Species not found' });
  }
});

// Dynamically route to the appropriate router based on species
petsRouter.use('/:petSpecies', (req, res, next) => {
  const { petSpecies } = req.params;
  if (petSpecies === 'dogs') {
    dogsRouter(req, res, next);
  } else if (petSpecies === 'cats') {
    catsRouter(req, res, next);
  }
});

module.exports = petsRouter;