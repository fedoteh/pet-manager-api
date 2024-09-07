const catsRouter = require('express').Router();

catsRouter.get('/', (req, res, next) => {
  res.status(200).send("/cats is live" + req.species);
});

module.exports = catsRouter;