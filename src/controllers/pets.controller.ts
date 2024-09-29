import { Request, Response } from 'express';
import Pet from '../models/pets.model';


export const findDogs = async (req: Request, res: Response) => {
    try {
        const dogs = await Pet.findAll({
            where: { species_id: 1 },
        });
        res.json(dogs);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch dogs' });
    }
};

export const findCats = async (req: Request, res: Response) => {
    try {
        const cats = await Pet.findAll({
            where: { species_id: 2 },
        });
        res.json(cats);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch cats' });
    }
};