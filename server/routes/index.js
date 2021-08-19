var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

var count = 0;

router.get('/counter', function(req, res) {
  res.send({counter: count});
});

router.get('/counterIncrease', function(req, res) {
  res.send({counter: ++count});
});

router.get('/counterDecrease', function(req, res) {
  res.send({counter: --count});
});

module.exports = router;
