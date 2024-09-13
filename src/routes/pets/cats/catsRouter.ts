import express, { NextFunction, Request, Response } from "express";
import cats from "../../../db_mock/cats";
import { findPetById } from "../../../util/findPet";
import { Pet } from "../../../util/types/types";
import pool  from "../../../util/db/pool";

// Create a new router to handle the cats routes
const catsRouter = express.Router();

// Get all cats
catsRouter.get('/', async (req: Request, res: Response, next: NextFunction) => {
    //const catsList = cats; // Get the list of cats from the mock database
    try {
        const result = await pool.query('SELECT NOW()');
        res.json(result.rows);
      } catch (err) {
        console.error('Error executing query', (err as Error).stack);
        res.status(500).send('Server error');
      }
});

// Get a specific cat
catsRouter.get('/:id', (req: Request, res: Response, next: NextFunction) => {
    const id = Number(req.params.id);
    const catsList: Pet[] = cats;
    const cat = findPetById(id, catsList);
    if (cat) {
        res.status(200).send(cat);
    } else {
        res.status(404).send({ error: 'Cat not found!' });
    }
});

export default catsRouter;
