const express = require('express');
const apiRouter = express.Router();

const petsRouter = require('./routes/pets/pets.js');


apiRouter.use('/pets', petsRouter);


module.exports = apiRouter;
