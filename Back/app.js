const express = require('express');
const cors =  require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app       = express();
const router    = express.Router();

const port      = process.env.PORT || 4000;

const MONGODB_URI = process.env.MONGODB_URI;

app.set('port', port)

app.use(bodyParser.json(), cors());

app.use(require('./src/routes/basic'));

//Check if app listening on port
app.listen(port, () => {
    console.log(`listening on ${port}`)
})