var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
	data = []
	res.render('parts',{title: "Cparts - Parts", parts:data, heading:"Current parts"});
});

module.exports = router;
