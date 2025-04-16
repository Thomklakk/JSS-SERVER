var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {title: "Parts for your needs"});
});

router.get('/login', function(req, res, next) {
  res.render('login', {title: "login"});
});
router.get('/signup', function(req, res, next) {
  res.render('signup', {title: "login"});
});


module.exports = router;
