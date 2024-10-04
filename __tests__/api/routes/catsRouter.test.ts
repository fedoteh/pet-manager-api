import express from 'express';
import request from 'supertest';
import catsRouter from '../../../src/routes/v1/pets/cats/catsRouter';
import Pet from '../../../src/models/pets.model'; // Import the Pet model
import cats from '../../../src/db_mock/cats'; // Assuming this file has mock cat data

// Mock the Pet model
jest.mock('../../../src/models/pets.model');

const app = express();
app.use(express.json());
app.use('/cats', catsRouter);

describe('Cats Router', () => {
    beforeEach(() => {
        jest.clearAllMocks(); // Clear mocks before each test
    });

    it('should return all cats', async () => {
        // Mock the Pet model's findAll method to return the mock data
        (Pet.findAll as jest.Mock).mockResolvedValue(cats);

        const response = await request(app).get('/cats');
        expect(response.status).toBe(200);
        expect(response.body).toEqual(cats);
    });

    it('should return 500 if fetching cats fails', async () => {
        // Mock the Pet model's findAll method to throw an error
        (Pet.findAll as jest.Mock).mockRejectedValue(new Error('Database error'));

        const response = await request(app).get('/cats');
        expect(response.status).toBe(500);
        expect(response.body).toEqual({ error: 'Failed to fetch cats' });
    });
});
