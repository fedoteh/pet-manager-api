import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';
import apiRouterV1 from './routes/v1/apiRouter';

// Setup express
const app = express();
const PORT = process.env.PORT || 3000;

// Setup middleware libraries
app.use(cors());
app.use(bodyParser.json());

// Setup routes
app.use('api/v1', apiRouterV1);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});