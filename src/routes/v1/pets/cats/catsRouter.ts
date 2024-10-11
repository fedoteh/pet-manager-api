import { createCat, deletePetById, findCatById, findCats, updateCatById } from "@controllers/pets.controller";
import express from "express";

const catsRouter = express.Router();

catsRouter.get('/', findCats);
catsRouter.get('/:id', findCatById);
catsRouter.put('/:id', updateCatById);
catsRouter.post('/', createCat);
catsRouter.delete('/:id', deletePetById);

export default catsRouter;
