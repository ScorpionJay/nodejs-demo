var express = require('express');
var router = express.Router();
var http = require('http');


router.get('/', function(req, res, next) {
	res.render('gallery', { title: 'gallery' });
});

// 分类
router.get('/classify', function(req, res, next) {

	var options = {
	   host: 'www.tngou.net',
	   path: '/tnfs/api/classify'  
	};

	// 处理响应的回调函数
	var callback = function(response){
	   // 不断更新数据
	   var body = '';
	   response.on('data', function(data) {
	      body += data;
	   });
	   response.on('end', function() {
	      // 数据接收完成
	      // console.log(body);
 		  res.send(JSON.parse(body) );
	   });
	}
	// 向服务端发送请求
	var req = http.request(options, callback);
	req.end();
});

// 列表数据
router.get('/list/:id', function(req, res, next) {
	var options = {
	   host: 'www.tngou.net',
	   path: '/tnfs/api/list?page=1&rows=10&id=' + req.params.id  
	};

	// 处理响应的回调函数
	var callback = function(response){
	   // 不断更新数据
	   var body = '';
	   response.on('data', function(data) {
	      body += data;
	   });
	   response.on('end', function() {
	      // 数据接收完成
 		  res.send(JSON.parse(body) );
	   });
	}
	// 向服务端发送请求
	var req = http.request(options, callback);
	req.end();
});

module.exports = router;
