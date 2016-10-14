var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
var home = require('./routes/home');
var users = require('./routes/users');
var test = require('./routes/test');
var chat = require('./routes/chat');
var article = require('./routes/article');
var about = require('./routes/about');

var gallery = require('./routes/gallery');
var music = require('./routes/music');

 var app = express();
// var http = require('http').Server(app);
// var io = require('socket.io')(http);


// io.on('connection', function(socket){
//   console.log('a user connected');
//   socket.broadcast.emit('hi');
// });

// io.on('connection', function(socket){
//   socket.on('chat message', function(msg){
//     console.log('message: ' + msg);
//    io.emit('chat message', msg);
//   });
// });

// view engine setup
app.set('views', path.join(__dirname, 'views'));
//设置模板的后缀是html
app.engine('html', require('ejs').renderFile);
//指定总模板
app.set('view engine', 'html');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/home', home);
app.use('/users', users);
app.use('/test', test);
app.use('/gallery', gallery);
app.use('/music', music);
app.use('/chat', chat);
app.use('/article', article);
app.use('/about', about);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
