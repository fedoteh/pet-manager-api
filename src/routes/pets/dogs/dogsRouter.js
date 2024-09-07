const dogsRouter = require('express').Router();

dogsRouter.get('/', (req, res, next) => {
	res.status(200).send('/dogs is alive' + req.species);
});

module.exports = dogsRouter;