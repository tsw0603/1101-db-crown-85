var express = require('express');
var router = express.Router();
const crown2Controller_85 = require('../controllers/crown2Controller_85');

/* GET home page. */
router.get('/', crown2Controller_85.getCategories);

module.exports = router;
