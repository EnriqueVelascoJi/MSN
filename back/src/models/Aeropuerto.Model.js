const mongoose = require("mongoose");

const AeropuertoSchema = new mongoose.Schema({

    idAeropuerto: {
        type: Number,
        required: true
    }, 
    nombre: {
        type: String,
        required: true
    }, 
    siglas: {
        type: String,
        required: true
    }
  },
);

const Aeropuerto = mongoose.model("Aeropuerto", AeropuertoSchema);

module.exports = { Aeropuerto };