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

router.get('/slideshow/:id', function (req, res) {
	db.get("SELECT name, font, contents FROM slideshows WHERE id=" + req.params.id, function(err, row) {
		// We need to do some magic to turn the contents back into HTML.
		var html = row.contents.toString();
		row.contents = html;
		res.send(row);
	});
});

module.exports = router;
