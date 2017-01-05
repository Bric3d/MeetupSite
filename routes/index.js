/**
 * Created by Bric3d on 30-Dec-16.
 */
var express = require('express');
var router = express.Router();
var User = require('../classes/User.js');

/* GET home page. */
router.get('/', function(req, res, next) {
		var user = new User({
				username: 'Johnjohn',
				email: 'john@mail.com',
				password: 'kk',
				sex: 'male',
				orientation: 'all',
				age: '160',
				localisation: 'Toulouse',
				lastSeen: 'Yesterday'
		});

		console.log(user.showData(['sex', 'orientation']));
		res.render('index', { title: "Welcome on Matcha", content: "Hello World", user: user});
});

module.exports = router;