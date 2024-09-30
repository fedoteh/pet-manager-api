import { Pet } from "./types/types";

export function findPetById(petId: number, petArray: Pet[]): Pet | undefined {
    return petArray.find(pet => pet.id === petId);
}