var express = require('express');
var router = express.Router();

var User = require('../models/user')

/* GET home page. */
router.get('/', function(req, res, next) {

	// var db = mongoose.connection;
	// db.on('error', console.error.bind(console, 'connection error:'));
	// db.once('open', function () {
	//   console.log('we re connected')
	// });
	
	//var obj = new User({name:'jayone'})

	// obj.save()

	User.find(function (err, users) {
	  if (err) return console.error(err);
	  console.log(users);
	  res.render('home', { title: 'scorpion',users:users });
	})

  	
});



module.exports = router;
