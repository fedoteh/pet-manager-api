import { createDog, deletePetById, findDogById, findDogs, updateDogById } from "@controllers/pets.controller";
import express from "express";

const dogsRouter = express.Router();

dogsRouter.get('/', findDogs);
dogsRouter.get('/:id', findDogById);
dogsRouter.put('/:id', updateDogById);
dogsRouter.post('/', createDog);
dogsRouter.delete('/:id', deletePetById);

export default dogsRouter;
