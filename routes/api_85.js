var express = require('express');
var router = express.Router();
const apiCrown2Controller_85 = require('../controllers/apiCrown2Controller_85');

/* GET home page. */
router.get('/category_85', apiCrown2Controller_85.getCategories);

module.exports = router;
