var express = require('express');
var router = express.Router();
var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'dnjs2310!@',
  port     : 3306,
  database : 'capstone'
});
connection.connect();
/* GET home page. */
router.get('/', function(req, res, next) {
  var query = connection.query('select * from 게시판', function(err,rows){
    if(err) console.log(err)
    console.log('rows:'+ rows);
    res.render('index',{rows:rows});
  })
  // res.render('index', { title: 'Express' });
});

module.exports = router;
