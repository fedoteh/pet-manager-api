import express, { NextFunction, Request, Response } from "express";

// Create a new router to handle the cats routes
const catsRouter = express.Router();

// Get all cats
catsRouter.get('/', (req: Request, res: Response, next: NextFunction) => {
    res.status(200).send("/cats is live");
});

// Get a specific cat
catsRouter.get('/:id', (req: Request, res: Response, next: NextFunction) => {
    res.status(200).send(`GET /cats/${req.params.id}`);
});

export default catsRouter;
