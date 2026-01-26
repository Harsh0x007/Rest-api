const express = require("express");
const bodyParser = require('body-parser')
const feedRoutes = require('./routes/feed');

const app = express();

// app.use(bodyParser.urlencoded())
app.use(bodyParser.json());
app.use('/feed', feedRoutes) 

app.listen(5000, () => {
    console.log("Server running on port 3000");
});