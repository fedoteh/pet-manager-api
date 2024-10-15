import "../../src/util/monitoring/instrument"; // Ensure Sentry is initialized
import * as Sentry from "@sentry/node";
import express from 'express';
import request from 'supertest';
import petsRouter from '../../src/routes/v1/pets/petsRouter';

// Mock Sentry to avoid real data submission
jest.mock('@sentry/node', () => ({
    init: jest.fn(),
    captureException: jest.fn(),
    setupExpressErrorHandler: jest.fn(),  // Mock this function
  }));

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
