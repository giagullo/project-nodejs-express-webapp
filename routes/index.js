'use strict';
var express = require('express');
var router = express.Router();

/* GET home page. */
var db = require('../db')
router.get('/', function (req, res, next) {
    db.do_query("select id, location_name from location where username = $1",
        ['user'], (err, rset) => {
            if (err) {
                console.log('DB error: ' + err.message)
                next (err)
            } else {
                console.log(rset.rows)
                res.render('index', { lastLocations: rset.rows });
            }
                
        });
})

module.exports = router;
