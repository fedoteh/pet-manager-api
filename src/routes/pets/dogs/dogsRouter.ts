import express, { NextFunction, Request, Response } from "express";
import dogs from "../../../db_mock/dogs";
import { findPetById } from "../../../util/findPet";
import { Pet, Dog } from "../../../util/types/types";

// Create a new router to handle the dogs routes
const dogsRouter = express.Router();

// Get all dogs
dogsRouter.get('/', (req: Request, res: Response, next: NextFunction) => {
    const dogsList = dogs; // Get the list of dogs from the mock database
    res.status(200).send(dogsList);
});

// Get a specific dog
dogsRouter.get('/:id', (req: Request, res: Response, next: NextFunction) => {
    const id = Number(req.params.id);
    const dogsList: Dog[] = dogs;
    const dog = findPetById(id, dogsList);
    if (dog) {
        res.status(200).send(dog);
    } else {
        res.status(404).send({ error: 'Dog not found!' });
    }
});

export default dogsRouter;
