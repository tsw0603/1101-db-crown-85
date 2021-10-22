var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('crown_85', {
        title: 'Express', 
        name: ' Shih-Wei Tang', 
        id: `209410785` ,
    });
});

module.exports = router;
