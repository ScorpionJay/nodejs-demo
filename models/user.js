// var mongoose = require("mongoose");	
// var Schema = mongoose.Schema;	

var mongodb = require('./mongodb');
var Schema = mongodb.mongoose.Schema;

var userScheMa = new Schema({
	name: String
});	
module.exports = mongodb.mongoose.model('users', userScheMa);
