
require('./configs/dbConfig');

const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const cors = require('cors');
// const TelegramBot = require('node-telegram-bot-api');

// const index = require('./routes/index');
// const users = require('./routes/users');

const app = express();
// console.log('APP :::; ', app);

// const io = require('socket.io')(app)
// console.log('io.www ::; ', io);

// io.on('connection', function(socket){
//   console.log('um usuario conectou');
//   socket.on('disconnect', function(){
//     console.log('usuario desconectou');
//   });
//   socket.on('chat message', function(msg){
//     console.log('message: ' + msg);
//   });
// });
// const io = require('socket.io')(socket)
// console.log('ioAPP ::; ', io);
//
// io.on('connection', function (socket) {
//   socket.on('message', function (name, fn) {
//     fn('woot');
//   });
// });

// io.on('connection', function () {
//   socket.on('message', function (msg) { console.log(msg);});
//   socket.on('disconnect', function () { });
// });

// const token = 'YOUR_TOKEN';
// // Setup polling way
// const bot = new TelegramBot(token, {polling: true});
// //
// // Matches "/echo [whatever]"
// bot.onText(/\/echo (.+)/, (msg, match) => {
//   // 'msg' is the received Message from Telegram
//   // 'match' is the result of executing the regexp above on the text content
//   // of the message
//
//   const chatId = msg.chat.id;
//   // console.log(match);
//   const resp = match[1]; // the captured "whatever"
//
//   // send back the matched "whatever" to the chat
//   bot.sendMessage(chatId, resp);
// });
//
// // Listen for any kind of message. There are different kinds of
// // messages.
// bot.on('message', (msg) => {
//   const chatId = msg.chat.id;
//
//   // send a message to the chat acknowledging receipt of their message
//   bot.sendMessage(chatId, 'Received your message');
// });

// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
app.use(favicon(path.join(__dirname, 'bin', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(cors());

// API ROUTES
// User API Route
app.use('/api', require('./modules/User/userRoutes'));

// app.use('/', index);
// app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
