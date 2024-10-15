import "@util/monitoring/instrument";
import * as dotenv from 'dotenv';
import * as Sentry from "@sentry/node";
import bodyParser from 'body-parser';
import cors from 'cors';
import express, { NextFunction, Request, Response } from 'express';
import apiRouterV1 from './routes/v1/apiRouter';
// import 'module-alias/register';

// Load environment variables
const envFile = process.env.NODE_ENV !== 'production' ? '.env.local' : '.env';
dotenv.config({ path: envFile });

// Setup express
const app = express();
const PORT = process.env.PORT || 3000;

// Setup routes
app.use('/api/v1', apiRouterV1);
app.get("/debug-sentry", function mainHandler(req, res) {
    throw new Error("My first Sentry error!");
});
// Setup middleware libraries
Sentry.setupExpressErrorHandler(app);
app.use(cors());
app.use(bodyParser.json());


// Error handling middleware
app.use(function onError(err: any, req: Request, res: Response, next: NextFunction) {
    // The error id is attached to `res.sentry` to be returned
    // and optionally displayed to the user for support.
    res.statusCode = 500;
    res.end((res as any).sentry + "\n");
});


if (process.env.NODE_ENV !== 'test') {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
}

export default app;