import express from 'express';
import request from 'supertest';
import petsRouter from '../../src/routes/v1/pets/petsRouter';
import { Species } from '../../src/util/types/types';

// Mock data for dogs and cats
import dogs from '../../src/db_mock/dogs';
import cats from '../../src/db_mock/cats';

// Mock the dogsRouter and catsRouter
jest.mock('../../src/routes/v1/pets/dogs/dogsRouter', () => {
    return jest.fn((req, res) => {
        res.status(200).json(dogs); // Return mocked dog data
    });
});

jest.mock('../../src/routes/v1/pets/cats/catsRouter', () => {
    return jest.fn((req, res) => {
        res.status(200).json(cats); // Return mocked cat data
    });
});

const app = express();
app.use(express.json());
app.use('/pets', petsRouter);

describe('petsRouter', () => {
    beforeEach(() => {
        jest.clearAllMocks(); // Clear mocks before each test
    });

    it('should return 404 for invalid species', async () => {
        const response = await request(app).get('/pets/invalidSpecies');
        expect(response.status).toBe(404);
        expect(response.body.error).toBe('Species not found');
    });

    it('should route to dogsRouter for species "dogs"', async () => {
        const response = await request(app).get(`/pets/${Species.Dogs}`);
        expect(response.status).toBe(200); // Expecting successful response
        expect(response.body).toEqual(dogs); // Expecting mocked dog data
    });

    it('should route to catsRouter for species "cats"', async () => {
        const response = await request(app).get(`/pets/${Species.Cats}`);
        expect(response.status).toBe(200); // Expecting successful response
        expect(response.body).toEqual(cats); // Expecting mocked cat data
    });
});
