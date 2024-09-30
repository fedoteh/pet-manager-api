// __tests__/petsRouter.test.ts

import express from 'express';
import request from 'supertest';
import { findCats, findDogs } from '../../controllers/pets.controller';
import cats from '../../db_mock/cats';
import dogs from '../../db_mock/dogs';
import petsRouter from '../../routes/v1/pets/petsRouter';
import { Species } from '../../util/types/types';

// Mock the database functions
// jest.mock('../../controllers/pets.controller', () => ({
//     findDogs: jest.fn(),
//     findCats: jest.fn(),
// }));

// const app = express();
// app.use(express.json()); // Add body parsing middleware if needed
// app.use('/pets', petsRouter);

// describe('petsRouter', () => {
//     beforeEach(() => {
//         jest.clearAllMocks(); // Clear mocks before each test
//     });

//     it('should return 404 for invalid species', async () => {
//         const response = await request(app).get('/pets/invalidSpecies');
//         expect(response.status).toBe(404);
//         expect(response.body.error).toBe('Species not found');
//     });

//     it('should route to dogsRouter for species "dogs"', async () => {
//         (findDogs as jest.Mock).mockResolvedValue(dogs); // Mock dogs data

//         const response = await request(app).get(`/pets/${Species.Dogs}`);
//         expect(response.status).toBe(200);
//         expect(response.body).toEqual(dogs); // Expect the mock dogs data as the response
//     });

//     it('should route to catsRouter for species "cats"', async () => {
//         (findCats as jest.Mock).mockResolvedValue(cats); // Mock cats data

//         const response = await request(app).get(`/pets/${Species.Cats}`);
//         expect(response.status).toBe(200);
//         expect(response.body).toEqual(cats); // Expect the mock cats data as the response
//     });

    // it('should return a cat by id', async () => {
    //     const mockCat = cats[0]; // Get the first cat from mock data
    //     (findCats as jest.Mock).mockResolvedValue([mockCat]); // Return an array containing the mock cat

    //     const response = await request(app).get(`/pets/${Species.Cats}/1`);
    //     expect(response.status).toBe(200);
    //     expect(response.body).toEqual(mockCat); // Expect the mock cat as the response
    // });

    // it('should return a dog by id', async () => {
    //     const mockDog = dogs[0]; // Get the first dog from mock data
    //     (findDogs as jest.Mock).mockResolvedValue([mockDog]); // Return an array containing the mock dog

    //     const response = await request(app).get(`/pets/${Species.Dogs}/1`);
    //     expect(response.status).toBe(200);
    //     expect(response.body).toEqual(mockDog); // Expect the mock dog as the response
    // });
// });
