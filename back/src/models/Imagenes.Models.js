const mongoose = require("mongoose");

const ImagenSchema = new mongoose.Schema({

    idImagen: {
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

const Imagen = mongoose.model("Imagen", ImagenSchema);

module.exports = { Mecanico };