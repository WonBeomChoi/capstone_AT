var express = require('express');
var app = express()
var router = express.Router();
var mysql = require('mysql')
var ejs = require('ejs')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('write', { title: 'Express' });
});

// 강재희 0430 추가

router.get('/write', function(req, res, next){
  res.render('create');
});

var client  = mysql.createConnection({
  user: "root",
  password: "",
  database: "게시판"
})

router.post('/write', function(req, res, next) {
  client.query("INSERT INTO 게시판 (게시글제목, 회원번호, 게시글내용) values (?, ?, ?)",[body.게시판제목, body.회원번호, body.게시글내용],
  function(){
    res.redirect("/write");
  });
});

// https://victorydntmd.tistory.com/25 참고




module.exports = router;



