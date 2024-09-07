const express = require('express');
const app = express();

module.exports = app; // find out why this line is necessary

const PORT = process.env.PORT || 4001;

/* middleware necessary for handling CORS requests from our frontend
const cors = require('cors');
app.use(cors());
*/

// Add middware for parsing request bodies here:
const bodyParser = require('body-parser');
app.use(bodyParser.json());

// Mount the existing API router
const apiRouter = require('./server/api');

apiRouter.get('/', (req, res, next) => {
    res.send('Pet Manager is live. The request is ' + req.url);
});

app.use('/api', apiRouter);

app.listen(PORT, () => {
    console.log('Running on port ' + PORT);
});