var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var lodash = require('lodash');

require('./config/database');
require('./config/global');


var app = express();

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

//console.log('secret',require('crypto').randomBytes(64).toString('hex'))
app.listen(process.env.PORT || 3000, function(){
  console.log(`Server started on port ${process.env.PORT || 3000}`);
});
module.exports = app;
