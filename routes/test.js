var express = require('express');
var router = express.Router();
var http = require('http');

router.get('/', function(req, res, next) {

	// 用于请求的选项http://m.maoyan.com/movie/list.json?type=hot&offset=0&type=hot
	var options = {
	   host: 'm.maoyan.com',
	   port: 80, 
	   path: '/movie/list.json?type=hot&offset=0&type=hot&limit=1000'  
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
	      console.log(body);
 		  res.render('test', { data: JSON.parse(body) });
	   });


	}
	// 向服务端发送请求
	var req = http.request(options, callback);
	req.end();


  
});

router.get('/json', function(req, res, next) {

	// 用于请求的选项http://m.maoyan.com/movie/list.json?type=hot&offset=0&type=hot
	var options = {
	   host: 'm.maoyan.com',
	   port: 80, 
	   path: '/movie/list.json?type=hot&offset=0&type=hot&limit=1000'  
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
	      console.log(body);
 		  res.send(JSON.parse(body) );
	   });


	}
	// 向服务端发送请求
	var req = http.request(options, callback);
	req.end();


  
});

module.exports = router;
