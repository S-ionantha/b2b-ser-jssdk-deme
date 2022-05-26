var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var API = require('./routes/routes');
var redis = require('redis');
var session = require('express-session');
var connectRedis = require('connect-redis');

var app = express();

const RedisStore = connectRedis(session);

// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'dist')));

app.use(
    session({
        secret: 'b2b_ser_jssdk_deme',
        name: 'b2b_ser_jssdk_deme_session',
        cookie: {
            path: '/',
            httpOnly: true,
            maxAge: 1728e5
        },
        store: new RedisStore({
            client: redis.createClient(6379, '127.0.0.1')
        }),
        resave: false,
        saveUninitialized: false
    })
);

// 注册路由
API.forEach(item => {
    app.use(item.path, item.router);
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

// error handler
app.use(function (err, req, res) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    // res.render('error');
});

module.exports = app;
