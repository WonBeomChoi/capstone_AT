var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log("asdf");
  res.render('write',{title:"으아아아아아"});
});
router.post('/', (req,res) => {
  console.log("asdf");
  return res.status(200).end();
  
});

module.exports = router;
