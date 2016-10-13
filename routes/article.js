var express = require('express');
var router = express.Router();
var moment = require('moment');

var Article = require('../models/article')

router.get('/', function(req, res, next) {

	var obj = new Article({
					title:'jayone',
					content:'hello world hahaha',
					date: new Date()
				})

	//obj.save()

	Article.find(function (err, articles) {
	  if (err) return console.error(err);
	  console.log(articles);

	  for (var i = articles.length - 1; i >= 0; i--) {
	  	articles[i].date2 = moment(articles[i].date).format('YYYY-MM-DD HH:mm:ss');
	  }

	  res.render('article', { title: 'scorpion',articles:articles });
	})
});

module.exports = router;
