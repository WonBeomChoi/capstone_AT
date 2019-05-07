var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/:게시글번호', function(req, res, next) {
  var board_no = req.params.게시글번호;
  res.render('product', { title: 'Express' });
});

module.exports = router;
