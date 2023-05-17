const mongoose = require("mongoose");

const ArchivoSchema = new mongoose.Schema({

    idArchivo: {
        type: Number,
        required: true
    }, 
    idIncidencia: {
        type: Number,
        required: true
    }, 
    url: {
        type: String,
        required: true
    }
  },
);

const Archivo = mongoose.model("Archivo", ArchivoSchema);

module.exports = { Archivo };