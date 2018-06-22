var createError = require('http-errors');
var express = require('express');
var path = require('path');
var sassMiddleware = require('node-sass-middleware');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index.js');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'public/view'));
app.set('view engine', 'ejs');

// sass dependency
app.use(sassMiddleware({
    src: path.join(__dirname, 'public/css'),
    dest: path.join(__dirname, 'public/css'),
    indentedSyntax: false, // true = .sass and false = .scss
    sourceMap: false,
    prefix: '/css',
    debug: true,
    // outputStyle: 'compressed',
}));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);

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
    res.render('error.html');
});

module.exports = app;
