var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
  res.render('chat');
});

io.on('connection', function(socket){
  console.log('a user connected');
  socket.broadcast.emit('hi');
});

io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    console.log('message: ' + msg);
	 io.emit('chat message', msg);
  });
});

module.exports = router;