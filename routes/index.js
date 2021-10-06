var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express', name: 'Tang Shih-Wei', id: `209410785` });
});

module.exports = router;
