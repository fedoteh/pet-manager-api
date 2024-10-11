import { Request, Response } from 'express';
import Pet from '../models/pets.model';
import { ValidationError } from 'sequelize';

export const findDogs = async (req: Request, res: Response) => {
    try {
        const dogs = await Pet.findAllDogs();
        res.json(dogs);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to fetch dogs' });
    }
};

export const findCats = async (req: Request, res: Response) => {
    try {
        const cats = await Pet.findAllCats();
        res.json(cats);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to fetch cats' });
    }
};

export const findDogById = async (req: Request, res: Response) => {
    try {
        const dog = await Pet.findDogById(parseInt(req.params.id));
        if (!dog) {
            return res.status(404).json({ error: 'Doggo not found!' });
        }
        res.json(dog);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to fetch dog' });
    }
};

export const findCatById = async (req: Request, res: Response) => {
    try {
        const cat = await Pet.findCatById(parseInt(req.params.id));
        if (!cat) {
            return res.status(404).json({ error: 'Cattienzo not found!' });
        }
        res.json(cat);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to fetch cat' });
    }
};

export const updateCatById = async (req: Request, res: Response) => {
    try {
        const [affectedCount, updatedCats] = await Pet.updateCatById(parseInt(req.params.id), req.body);
        if (affectedCount === 0) {
            return res.status(404).json({ error: 'Meow meow not found!' });
        }
        res.json(updatedCats[0]);
    } catch (error) {
        if (error instanceof ValidationError) {
            return res.status(400).json({ error: error.errors.map(e => e.message) });
        }
        res.status(500).json({ error: 'Failed to update cat' });
    }
};

export const updateDogById = async (req: Request, res: Response) => {
    try {
        const [affectedCount, updatedDogs] = await Pet.updateDogById(parseInt(req.params.id), req.body);
        if (affectedCount === 0) {
            return res.status(404).json({ error: 'Woof woof not found!' });
        }
        res.json(updatedDogs[0]);
    } catch (error) {
        if (error instanceof ValidationError) {
            return res.status(400).json({ error: error.errors.map(e => e.message) });
        }
        res.status(500).json({ error: 'Failed to update dog' });
    }
};

export const createDog = async (req: Request, res: Response): Promise<void> => {
    try {
        const newDog = await Pet.createDog(req.body);
        res.status(201).json(newDog);
    } catch (error) {
        console.error('Error creating a new dog:', error);
        res.status(500).json({ error: 'Failed to create dog' });
    }
};

export const createCat = async (req: Request, res: Response): Promise<void> => {
    try {
        const newCat = await Pet.createCat(req.body);
        res.status(201).json(newCat);
    } catch (error) {
        console.error('Error creating a new cat:', error);
        res.status(500).json({ error: 'Failed to create cat' });
    }
};

export const deletePetById = async (req: Request, res: Response) => {
    try {
        const id = parseInt(req.params.id);
        const deletedPet = await Pet.deletePetById(id);
        if (!deletedPet) {
            return res.status(404).json({ error: 'Pet not found!' });
        }
        res.status(204).send();
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to delete pet' });
    }
};