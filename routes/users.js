'use strict';
var express = require('express');
var router = express.Router();
var aut = require('../aut')

/* GET users listing. */
router.get('/', aut.protect(), function (req, res) {
    res.send({status: 0, user: 'a good one'});
});

module.exports = router;
