import express from 'express';
import request from 'supertest';
import dogsRouter from '../../../src/routes/v1/pets/dogs/dogsRouter';
import Pet from '../../../src/models/pets.model'; // Import the Pet model
import dogs from '../../../src/db_mock/dogs'; // Assuming this file has mock dog data

// Mock the Pet model
jest.mock('../../../src/models/pets.model');

const app = express();
app.use(express.json());
app.use('/dogs', dogsRouter);

describe('Dogs Router', () => {
    beforeEach(() => {
        jest.clearAllMocks(); // Clear mocks before each test
    });

    it('should return all dogs', async () => {
        // Mock the Pet model's findAll method to return the mock data for dogs
        (Pet.findAll as jest.Mock).mockResolvedValue(dogs);

        const response = await request(app).get('/dogs');
        expect(response.status).toBe(200);
        expect(response.body).toEqual(dogs);
    });

    it('should return 500 if fetching dogs fails', async () => {
        // Mock the Pet model's findAll method to throw an error
        (Pet.findAll as jest.Mock).mockRejectedValue(new Error('Database error'));

        const response = await request(app).get('/dogs');
        expect(response.status).toBe(500);
        expect(response.body).toEqual({ error: 'Failed to fetch dogs' });
    });
});
