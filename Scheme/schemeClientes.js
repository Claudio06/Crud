

const mongoose = require('mongoose');
const clientesSchema = new mongoose.Schema({
 _id: String,
 name: String,
});
const clienteModel = mongoose.model('clientes', clientesSchema);
module.exports = clienteModel;