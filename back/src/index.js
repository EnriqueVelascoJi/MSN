//Packages
const express = require('express');
const mongoose = require("mongoose");

//Import DB Connection
require('./DB')

//Init server
const app = express();

const PORT = process.env.PORT || 3000;

//Middlewares
app.use(express.json())


//Running server
app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`)
})

