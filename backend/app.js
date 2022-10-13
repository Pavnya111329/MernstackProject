const express = require('express');

const app = express();

app.use(express.json())

const errorMiddelWare = require("./middleware/error")

const product = require("./routes/productRoute")

app.use("/api/v1",product)

//Error middleware 
app.use(errorMiddelWare)

module.exports = app;