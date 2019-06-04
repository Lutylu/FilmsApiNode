var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	console.log("Ici c'est l'index");
  res.render('index', { title: 'BORDEAUX' });
});

router.get('/film', function(req, res, next) {
	console.log("Ici c'est le film");
  res.render('index', { title: 'Film' });
});

router.get('/contact', function(req, res, next) {
	console.log("Ici c'est le contact");
  res.render('index', { title: 'Contact' });
});

module.exports = router;
