var http = require('http');
var url = require('url');
var mysql = require('mysql');
var sqltestl=0;

var express = require('express');
var cors=require('cors');
var app = express();
app.use(cors());
//
// var con = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "Dirtysouth1!"
// })
//
// con.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
//   con.query("CREATE DATABASE PokeAIDatabase", function (err, result) {
//     if (err) throw err;
//     console.log("Database created");
//   });
// })

var condatabase=mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Dirtysouth1!",
  database: "PokeAIDatabase"
})

condatabase.connect(function(err) {
  if (err) throw err;
  console.log("Connectedd!");
  // var sql = "CREATE TABLE pokedatabase (pokemon VARCHAR(255), imagelink VARCHAR(2080), height INT, upvote INT DEFAULT 0)";
  // condatabase.query(sql, function (err, result) {
  //   if (err) throw err;
  //   console.log("Table created");
  // });
});

app.get('/', function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  var q = url.parse(req.url, true).query;
   var imagee=q.imageis;
   var pokemone=q.pokemonis;
  var heighte=q.heightis;
  var sql="INSERT INTO pokedatabase(pokemon,imagelink,height,upvote) VALUES ('"+ pokemone +"','"+ imagee +"','"+ heighte +"',0)";
  condatabase.query(sql,function(err,result){
    if (err) throw err;
    console.log("BETH IS BEAUTIFUL")
  })
  res.end("hi");
})

var server = app.listen(8080, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("Example app listening at http://%s:%s", host, port)
})
