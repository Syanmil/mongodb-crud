var express = require('express');
var router = express.Router();
var books = require('../models/book.js')
var costumers = require('../models/costumer.js')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('test');
});

module.exports = router;
