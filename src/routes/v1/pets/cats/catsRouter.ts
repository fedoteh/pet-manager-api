import cats from "@db_mock/cats";
import { findPetById } from "@util/findPet";
import { Cat } from "@util/types/types";
import express, { NextFunction, Request, Response } from "express";
import { findCats } from "src/controllers/pets.controller";


// Create a new router to handle the cats routes
const catsRouter = express.Router();

// Get all cats
catsRouter.get('/', findCats);

// Get a specific cat
catsRouter.get('/:id', (req: Request, res: Response, next: NextFunction) => {
    const id = Number(req.params.id);
    const catsList: Cat[] = cats;
    const cat = findPetById(id, catsList);
    if (cat) {
        res.status(200).send(cat);
    } else {
        res.status(404).send({ error: 'Cat not found!' });
    }
});

export default catsRouter;
