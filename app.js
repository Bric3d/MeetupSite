/**
 * Created by Bric3d on 30-Dec-16.
 */

var express = require('express');
var app = express();

/** Setup of the view engine **/
app.set('views', './views');
app.set('view engine', 'pug');

/** Load Routes **/
var index = require('./routes/index.js'),
		notifications = require('./routes/notifications.js'),
		search = require('./routes/search.js'),
		users = require('./routes/users.js');

/** Tells app to use the correct routes **/
app.use('/', index);
app.use('/users', users);
app.use('/notifications', notifications);
app.use('/search', search);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
		var err = new Error('Not Found');
		err.status = 404;
		next(err);
});

var server = app.listen(3000, function () {
		var address = server.address().address,
				port = server.address().port;
		console.log('Matcha started on ' + address + ' port ' + port);
});