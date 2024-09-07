const express = require('express');
const apiRouter = express.Router();

// Import and mount petsRouter
const petsRouter = require('./routes/pets/pets');


apiRouter.use('/pets', petsRouter);


module.exports = apiRouter;