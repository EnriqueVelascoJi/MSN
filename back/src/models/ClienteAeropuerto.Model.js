const mongoose = require("mongoose");

const ClienteAeropuertoSchema = new mongoose.Schema({

    idClienteAeropuerto: {
        type: Number,
        required: true
    }, 
    idCliente: {
        type: Number,
        required: true
    }, 
    idAeropuerto: {
        type: Number,
        required: true
    }
  },
);

const ClienteAeropuerto = mongoose.model("ClienteAeropuerto", ClienteAeropuertoSchema);

module.exports = { ClienteAeropuerto };