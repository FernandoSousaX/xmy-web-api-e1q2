'use strict';
 var mongoose = require('mongoose');
 var Schema = mongoose.Schema; 

 var clientesSchema = new Schema({}, { strict: false });

 module.exports = mongoose.model('clientes', clientesSchema); 