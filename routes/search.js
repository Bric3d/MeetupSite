/**
 * Created by Bric3d on 30-Dec-16.
 */
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/search', function(req, res, next) {
		res.render('search', { title: 'Search' });
});

module.exports = router;