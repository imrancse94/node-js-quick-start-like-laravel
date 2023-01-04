var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var lodash = require('lodash');


require('./config/global');
require('./config/database');



var app = express();
var fs = require('fs');
var http = require('http');
var https = require('https');

var credentials = {}

if(process.env.SSL_CERTIFICATE_KEY_PATH && process.env.SSL_PRIVATE_KEY_PATH) {
  var privateKey = fs.readFileSync(process.env.SSL_PRIVATE_KEY_PATH, 'utf8');
  var certificate = fs.readFileSync(process.env.SSL_CERTIFICATE_KEY_PATH, 'utf8');
  credentials = {key: privateKey, cert: certificate};
}

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true  }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

lodash.forEach(require('./routes/routes'), (value, key) => {
  app.use(key, value);
})

app.get('*',(req,res)=>{
  res.json({
    message:"Page not found"
  });
})
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  //res.status(err.status || 500);
  sendApiErrorResponse(res,err.status || 500,err.message,{})
  
});

var httpServer = http.createServer(app);

httpServer.listen(process.env.PORT || 3000, function(){
  console.log(`Server started on port ${process.env.PORT || 3000}`);
});
console.log('dddd',!lodash.isEmpty(credentials))
if(!lodash.isEmpty(credentials)) {
  var httpsServer = https.createServer(credentials, app);
  httpsServer.listen(process.env.PORT || 8080, function(){
    console.log(`Server started on port ${process.env.PORT || 8080}`);
  });
}

module.exports = app;
