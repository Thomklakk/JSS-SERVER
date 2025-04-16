var express = require('express');
var router = express.Router();


router.get('/edit', function (req, res, next) {
	res.render("part_edit", {title: "Edit part", heading:"Edit the part"})
});


module.exports = router;
