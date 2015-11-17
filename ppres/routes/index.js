var express = require('express');
var router = express.Router();

/* Initialize our SQLite database. */
var sqlite3 = require('sqlite3');
var db = new sqlite3.Database("slideshows.db");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/listslideshows', function(req, res, next) {
	db.all("SELECT id, name FROM slideshows", function(err, rows) {
		res.send(rows);
	});
});

module.exports = router;
