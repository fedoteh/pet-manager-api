import express from 'express';
import request from 'supertest';
import cats from '../../../db_mock/cats';
import catsRouter from '../../../routes/v1/pets/cats/catsRouter';

const app = express();
app.use(express.json());
app.use('/cats', catsRouter);

describe('Cats Router', () => {
    it('should return all cats', async () => {
        const response = await request(app).get('/cats');
        expect(response.status).toBe(200);
        expect(response.body).toEqual(cats);
    });

    it('should return a specific cat by ID', async () => {
        const catId = 1; // Assuming a cat with ID 1 exists in the mock database
        const response = await request(app).get(`/cats/${catId}`);
        expect(response.status).toBe(200);
        expect(response.body).toEqual(cats.find(cat => cat.id === catId));
    });

    it('should return 404 if cat is not found', async () => {
        const nonExistentCatId = 999; // Assuming this ID does not exist in the mock database
        const response = await request(app).get(`/cats/${nonExistentCatId}`);
        expect(response.status).toBe(404);
        expect(response.body).toEqual({ error: 'Cat not found!' });
    });
});