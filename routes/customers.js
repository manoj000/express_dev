var express = require('express');
var router = express.Router();

/* GET Customers listing. */
router.get('/', function(req, res, next) {
  res.send('response from customers');
});

module.exports = router;
