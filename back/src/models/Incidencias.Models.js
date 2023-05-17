const mongoose = require("mongoose");

const IncidenciaSchema = new mongoose.Schema({

    idIncidencia: {
        type: Number,
        required: true
    }, 
    idMecanico: {
        type: Number,
        required: true
    }, 
    estatus: {
        type: String,
        required: true
    },
    descripcion: {
        type: String,
        required: true
    },
    imagen: {
        type: String,
        required: false
    },
    archivo: {
        type: String,
        required: false
    },
    comentario: {
        type: String,
        required: false
    },
    isCheckWa: {
        type: Boolean,
        required: true,
        default: false
    },
    fecha: {
        type: Date,
        required: true
    }
  },
);

const Incidencia = mongoose.model("Incidencia", IncidenciaSchema);

module.exports = { Incidencia };