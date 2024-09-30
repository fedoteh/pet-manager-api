import express from 'express';
import request from 'supertest';
import catsRouter from '../../../routes/v1/pets/cats/catsRouter';
import { findCats } from '../../../controllers/pets.controller';
import cats from '../../../db_mock/cats'; // Assuming this file has mock cat data

// // Mock the database functions
// jest.mock('../../../controllers/pets.controller');

// const app = express();
// app.use(express.json());
// app.use('/cats', catsRouter);

// describe('Cats Router', () => {
//     beforeEach(() => {
//         jest.clearAllMocks(); // Clear mocks before each test
//     });

//     it('should return all cats', async () => {
//         // Mock the findCats function to return the mock data
//         (findCats as jest.Mock).mockResolvedValue(cats);

//         const response = await request(app).get('/cats');
//         expect(response.status).toBe(200);
//         expect(response.body).toEqual(cats);
//     });

    // it('should return a specific cat by ID', async () => {
    //     const catId = 1; // Assuming a cat with ID 1 exists in the mock database

    //     // Mock the findCatById function to return the specific cat
    //     (findCatById as jest.Mock).mockResolvedValue(cats.find(cat => cat.id === catId));

    //     const response = await request(app).get(`/cats/${catId}`);
    //     expect(response.status).toBe(200);
    //     expect(response.body).toEqual(cats.find(cat => cat.id === catId));
    // });

    // it('should return 404 if cat is not found', async () => {
    //     const nonExistentCatId = 999; // Assuming this ID does not exist in the mock database

    //     // Mock the findCatById function to return null
    //     (findCatById as jest.Mock).mockResolvedValue(null);

    //     const response = await request(app).get(`/cats/${nonExistentCatId}`);
    //     expect(response.status).toBe(404);
    //     expect(response.body).toEqual({ error: 'Cat not found!' });
    // });
// });
