const mongoose = require("mongoose");

const RefaccionesIncidenciasSchema = new mongoose.Schema({

    idRefaccionesIncidencias: {
        type: Number,
        required: true
    }, 
    idRefaccion: {
        type: Number,
        required: true
    },
    idIncidencia: {
        type: Number,
        required: true
    },
    noPiezas: {
        type: Number,
        required: true
    },
    costo: {
        type: Number,
        required: true

    },
    precioVenta: {
        type: Number,
        required: true
    }
    
  },
);

const RefaccionesIncidencias = mongoose.model("RefaccionesIncidencias", RefaccionesIncidenciasSchema);

module.exports = { TipoEquipo };