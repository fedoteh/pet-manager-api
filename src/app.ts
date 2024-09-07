import express from 'express';
import apiRouter from './routes/api';

const app = express();
const PORT = process.env.PORT || 3000;

// const cors = require('cors');
// app.use(cors());

// Add middware for parsing request bodies here:
// const bodyParser = require('body-parser');
// app.use(bodyParser.json());


app.use('/api', apiRouter);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});