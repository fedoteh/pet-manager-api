import "@util/monitoring/instrument";
import * as dotenv from 'dotenv';
import express, { NextFunction, Request, Response } from 'express';
import * as Sentry from "@sentry/node";
import bodyParser from 'body-parser';
import cors from 'cors';
import apiRouterV1 from './routes/v1/apiRouter';
// import 'module-alias/register';

// Load environment variables
const envFile = process.env.NODE_ENV !== 'production' ? '.env.local' : '.env';
console.log(`Loading environment variables from: ${envFile}`);
dotenv.config({ path: envFile });

// Setup express
const app = express();
const PORT = process.env.PORT || 3000;

// Setup middlewares
app.use(cors());
app.use(bodyParser.json());

// Setup routes
app.use('/api/v1', apiRouterV1);
app.get("/debug-sentry", function mainHandler(req, res) {
    throw new Error("My first Sentry error!");
});

// Setup error handling middlewares
Sentry.setupExpressErrorHandler(app);

app.use(function onError(err: any, req: Request, res: Response, next: NextFunction) {
    // The error id is attached to `res.sentry` to be returned
    // and optionally displayed to the user for support.
    res.statusCode = 500;
    res.end((res as any).sentry + "\n");
});


if (process.env.NODE_ENV !== 'test') {
    console.log(`DB_SSL: ${process.env.DB_SSL}`)
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
}

export default app;