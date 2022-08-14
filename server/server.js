require('dotenv').config({path: __dirname + '/.env'})
const express = require("express");
const mongoose = require("mongoose");
const authRoute = require("./routes/auth/auth");
const cors = require("cors");

const port = 8080;
const dbUrl = process.env['MONGO_DB'];


const app = express();

// middleware
app.use(express.static("public"));
app.use(cors({
    origin: "http://localhost:3001"
}));

// mongoDB connection
mongoose.connect(dbUrl, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(response => console.log(response))
    .catch(error => console.log(error))

// routes initialisation
app.use(authRoute);

// listening on port
app.listen(port, () => {
    // display some info about server
    console.log(process.env['MONGO_DB']);
    console.log("SUCCESS: server started");
});