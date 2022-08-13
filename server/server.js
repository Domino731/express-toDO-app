require('dotenv').config({path: __dirname + '/.env'})
const express = require("express");
const mongoose = require("mongoose");

const app = express();

const dbUrl = process.env['MONGO_DB'];
mongoose.connect(dbUrl, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(response => console.log(response))
    .catch(error => console.log(error))


app.listen("3000", () => {
    console.log(process.env['MONGO_DB']);
    console.log("server started");
});