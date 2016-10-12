// DB Connection
var mongoose = require('mongoose');
mongoose.connect('mongodb://jay:jay@localhost:27017/admin');
exports.mongoose = mongoose;




