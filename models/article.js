var mongodb = require('./mongodb');
var Schema = mongodb.mongoose.Schema;

var articleScheMa = new Schema({
	id: String,
	title: String,
	content: String,
	date: Date,
	updateDate: Date
});	
module.exports = mongodb.mongoose.model('article', articleScheMa);
