// __tests__/dogsRouter.test.ts

import express from 'express';
import request from 'supertest';
import dogsRouter from '../../../routes/v1/pets/dogs/dogsRouter';
import { findDogs } from '../../../controllers/pets.controller';
import dogs from '../../../db_mock/dogs';

// // Mock the database functions
// jest.mock('../../../controllers/pets.controller');

// const app = express();
// app.use(express.json());
// app.use('/dogs', dogsRouter);

// describe('Dogs Router', () => {
//     beforeEach(() => {
//         jest.clearAllMocks(); // Clear mocks before each test
//     });

//     it('should return all dogs', async () => {
//         // Mock the findDogs function to return the mock data
//         (findDogs as jest.Mock).mockResolvedValue(dogs);

//         const response = await request(app).get('/dogs');
//         expect(response.status).toBe(200);
//         expect(response.body).toEqual(dogs);
//     });

    // it('should return a specific cat by ID', async () => {
    //     const catId = 1; // Assuming a dog with ID 1 exists in the mock database
    //     const response = await request(app).get(`/dogs/${catId}`);
    //     expect(response.status).toBe(200);
    //     expect(response.body).toEqual(dogs.find(cat => cat.id === catId));
    // });

    // it('should return 404 if cat is not found', async () => {
    //     const nonExistentDogId = 999; // Assuming this ID does not exist in the mock database
    //     const response = await request(app).get(`/dogs/${nonExistentDogId}`);
    //     expect(response.status).toBe(404);
    //     expect(response.body).toEqual({ error: 'Dog not found!' });
    // });
// });