var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors=require('cors');

var product_router=require('./routes/product_routes');
var stock_router=require('./routes/stock_routes');
var color_router=require('./routes/color_routes');
var size_router=require('./routes/size_routes');
var delete_product=require('./routes/delete_routes');
var supplier_router=require('./routes/supplier_routes');
var delete_supplier=require('./routes/delete_supplier_routes');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());
app.use('/', indexRouter);
app.use('/users', usersRouter);

app.use('/product',product_router);
app.use('/delete',delete_product);
app.use('/stock',stock_router);
app.use('/color',color_router);
app.use('/size',size_router);
app.use('/supplier',supplier_router);
app.use('/delete_supplier',delete_supplier);
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
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
