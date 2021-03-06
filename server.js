﻿var express = require('express');
var app = express();
var port = process.env.PORT || 3030;
var mongoose = require('mongoose');
var passport = require('passport');
var flash = require('connect-flash');

var configDB = require('./config/database.js');

mongoose.connect(configDB.url);

app.configure(function() {

    app.use(express.logger('dev'));
    app.use(express.cookieParser());
    app.use(express.bodyParser());

    app.set('view engine', 'ejs');

    app.use(express.session({ secret: 'ilovescotchwhisky'}));
    app.use(passport.initialize());
    app.use(passport.session());
    app.use(flash());

});

//test


require('./routes.js')(app, passport);


app.listen(port);
console.log('The magic happens on port' + port);
