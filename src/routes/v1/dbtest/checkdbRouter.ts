// import express, { NextFunction, Request, Response } from "express";
// import pool from "../../util/db/pool";

// const dbtestRouter = express.Router();

// dbtestRouter.get('/', async (req: Request, res: Response, next: NextFunction) => {
//     try {
//         const result = await pool.query('SELECT NOW()');
//         res.json(result.rows);
//       } catch (err) {
//         console.error('Error executing query', (err as Error).stack);
//         res.status(500).send('Server error');
//       }
// });

// export default dbtestRouter;
