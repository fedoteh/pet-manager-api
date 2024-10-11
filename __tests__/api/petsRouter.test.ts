import express from 'express';
import request from 'supertest';
import petsRouter from '../../src/routes/v1/pets/petsRouter';

const app = express();
app.use(express.json());
app.use('/pets', petsRouter);

describe('petsRouter', () => {
    it('should return 404 for invalid species', async () => {
        const response = await request(app).get('/pets/invalidSpecies');
        expect(response.status).toBe(404);
        expect(response.body.error).toBe('Species not found');
    });
});
