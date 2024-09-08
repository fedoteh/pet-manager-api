import request from 'supertest';
import express from 'express';
import dogsRouter from '../../../src/routes/pets/dogs/dogsRouter';
import dogs from '../../../src/db_mock/dogs';

const app = express();
app.use(express.json());
app.use('/dogs', dogsRouter);

describe('dogsRouter', () => {
    it('should return all dogs', async () => {
        const response = await request(app).get('/dogs');
        expect(response.status).toBe(200);
        expect(response.body).toEqual(dogs);
    });

    it('should return a specific cat by ID', async () => {
        const catId = 1; // Assuming a dog with ID 1 exists in the mock database
        const response = await request(app).get(`/dogs/${catId}`);
        expect(response.status).toBe(200);
        expect(response.body).toEqual(dogs.find(cat => cat.id === catId));
    });

    it('should return 404 if cat is not found', async () => {
        const nonExistentDogId = 999; // Assuming this ID does not exist in the mock database
        const response = await request(app).get(`/dogs/${nonExistentDogId}`);
        expect(response.status).toBe(404);
        expect(response.body).toEqual({ error: 'Dog not found!' });
    });
});