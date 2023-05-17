const mongoose = require("mongoose");

const TipoEquipoSchema = new mongoose.Schema({

    idTipoEquipo: {
        type: Number,
        required: true
    }, 
    nombre: {
        type: String,
        required: true
    }, 
    silas: {
        type: String,
        required: true
    }
  },
);

const TipoEquipo = mongoose.model("TipoEquipo", TipoEquipoSchema);

module.exports = { TipoEquipo };