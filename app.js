var routes = require('./routes');
var express = require('express');
var ejs = require('ejs');
var path = require('path');

var app = express();
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.get('/', routes.index);
app.get('/lista', routes.lista);
app.use(express.static(path.join(__dirname, 'public')));
app.listen(process.env.VCAP_APP_PORT || 8080);
