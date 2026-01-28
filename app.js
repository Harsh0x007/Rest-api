const express = require("express");
const bodyParser = require('body-parser')
const feedRoutes = require('./routes/feed');

const app = express();

app.use(bodyParser.json());
// app.use(bodyParser.urlencoded())
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
})
app.use('/feed', feedRoutes)


app.get('/', (req, res) => {
    res.send('Api is running');
})
app.use((req, res) => {
    res.status(404).json({ message: "NO PAGE FOUND" })
})
app.listen(8080, () => {
    console.log("Server running on port 8080");
});