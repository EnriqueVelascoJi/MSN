const mongoose = require("mongoose");

const RefaccionesSchema = new mongoose.Schema({

    idRefacciones: {
        type: Number,
        required: true
    }, 
    costo: {
        type: Number,
        required: true
    }, 
    fechaCosto: {
        type: Date,
        required: true
    },
    venta: {
        type: Number,
        required: true
    },
    fechaVenta: {
        type: Date,
        required: true
    },
    proveedor: {
        type: String,
        required: false
    }
  },
);

const Refacciones = mongoose.model("Refacciones", RefaccionesSchema);

module.exports = { Refacciones };