var express = require('express');
var router = express.Router();
var http = require('http');

router.get('/', function(req, res, next) {
	res.render('music');
});


// 列表数据
router.get('/data/:keyword', function(req, res, next) {
	console.log(req.params.keyword )
	var options = {
	   host: 'mobilecdn.kugou.com',
	   path: '/api/v3/search/song?keyword=' + encodeURI(req.params.keyword)  
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
	      console.log(body)
 		  res.send(JSON.parse(body) );
	   });
	}
	// 向服务端发送请求
	var req = http.request(options, callback);
	req.end();
});

  
//songInfo
router.get('/songInfo/:hash', function(req, res, next) {
	console.log(req.params.keyword )
	var options = {
	   host: 'm.kugou.com',
	   path: '/app/i/getSongInfo.php?cmd=playInfo&hash=' + req.params.hash  
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
	      console.log(body)
 		  res.send(JSON.parse(body) );
	   });
	}
	// 向服务端发送请求
	var req = http.request(options, callback);
	req.end();
});


module.exports = router;
