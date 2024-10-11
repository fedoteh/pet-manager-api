import { Transaction } from 'sequelize';
import request from 'supertest';
import app from '../../../src/app';
import sequelize from '../../../src/util/db/sequelize';

const apiVersion = 'v1';
const apiPath = `/api/${apiVersion}`;
const dogsPath = '/pets/dogs';

describe('GET /dogs', () => {
    let transaction: Transaction;

    beforeAll(async () => {
        await sequelize.sync();
    });

    beforeEach(async () => {
        transaction = await sequelize.transaction();
    });

    afterEach(async () => {
        await transaction.rollback();
    });

    afterAll(async () => {
        await sequelize.close();
    });

    it('should return all dogs', async () => {
        const response = await request(app).get(apiPath + dogsPath);
        expect(response.status).toBe(200);
        expect(Array.isArray(response.body)).toBe(true);
        expect(response.body.length).toBeGreaterThan(0);
    });
});
