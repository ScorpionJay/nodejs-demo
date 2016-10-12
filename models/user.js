var mongoose = require("mongoose");	
var Schema = mongoose.Schema;	
var userScheMa = new Schema({
	name: String
});	
module.exports = mongoose.model('users', userScheMa);
