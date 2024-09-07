import express, { NextFunction, Request, Response } from "express";

// Create a new router to handle the dogs routes
const dogsRouter = express.Router();

// Get all dogs
dogsRouter.get('/', (req: Request, res: Response, next: NextFunction) => {
    res.status(200).send("/dogs is live");
});

// Get a specific dog
dogsRouter.get('/:id', (req: Request, res: Response, next: NextFunction) => {
    res.status(200).send(`GET /dogs/${req.params.id}`);
});

export default dogsRouter;
