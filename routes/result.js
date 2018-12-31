'use strict';
var express = require('express');
var router = express.Router();

/* POST action for result */
router.post('/', function (req, res) {
    var age = (new Date).getFullYear() - Number(req.body.year)
    res.send('Hello ' + req.body.title + ' ' + req.body.personName + ' aged ' + age);
});

module.exports = router;