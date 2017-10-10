var http = require('http');
var url = require('url');
var mysql = require('mysql');
var sqltestl=0;
var express = require('express');
var cors=require('cors');
var app = express();
var pokemone;
var imagee;
var heighte=0;
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
  password: "l!",
  database: "PokeAIDatabase"
})

condatabase.connect(function(err) {
  // if (err) throw err;
  // console.log("Connectedd!");
  // var sql = "CREATE TABLE pokedata (id INT AUTO_INCREMENT PRIMARY KEY, pokemon VARCHAR(255), imagelink VARCHAR(2080), height INT, upvote INT DEFAULT 0)";
  // condatabase.query(sql, function (err, result) {
  //   if (err) throw err;
  //   console.log("Table created");
  // });
});

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'D1!',
  database: 'PokeAIDatabase',
  charset: 'utf8'
});

var reo ='<html><head><title></title></head><body><h1></h1>{${table}}</body></html>';
let sql ='SELECT * FROM pokedata WHERE id>((SELECT max(id) FROM pokedata)-5)';

function setResHtml(sql, cb){
  pool.getConnection((err, con)=>{
    if(err) throw err;
    condatabase.query(sql, (err, rest, cols)=>{
      if(err) throw err;
      var table ='';
      for(var i=0; i<rest.length; i++){
        table +='<tr><td>'+ rest[i].pokemon +'</td><td>'+ "<img src= '"+ rest[i].imagelink+ "' alt='Photo of human'> </img>" + '</td><td>'+ rest[i].height +  '</td><td>'+ "<button> ! </button>" + '</td></tr>';
      }
      table ='<table border="1"><tr> <th>Pokemon</th> <th>Image</th> <th>Height</th><th>Submit!</th> </tr>'+ table +'</table>';
      con.release();
      return cb(table);
    })})};

// WHERE id>(SELECT (max(id)-5) FROM TABLE)
app.get('/', function (req, res) {
  var q = url.parse(req.url, true).query;
  var datee=q.dateis;

if (datee==3){
   var imagee=q.imageis;
   var pokemone=q.pokemonis;
   var heighte=parseInt(q.heightis);
  let sql2="INSERT INTO pokedata(pokemon,imagelink,height,upvote) VALUES ('"+ pokemone +"','"+ imagee +"','"+ heighte +"',0)";
  condatabase.query(sql2,function(err,result){
    if (err) throw err;
    console.log("BETH IS BEAUTIFUL");
    setResHtml(sql, resql=>{
      console.log("hi")
      reo = reo.replace('{${table}}', resql);
      res.writeHead(200, {'Content-Type':'text/html; charset=utf-8'});
      res.write(reo, 'utf-8');
      res.end();
    })
  })}

else if(datee==4) {
    console.log("afd")
      setResHtml(sql, resql=>{
        console.log("hi")
        reo = reo.replace('{${table}}', resql);
        res.writeHead(200, {'Content-Type':'text/html; charset=utf-8'});
        res.write(reo, 'utf-8');
        res.end();
      })
    }

else if(datee==5){
  var pokemone=q.pokemonis;
  let sql3="SELECT * FROM pokedata WHERE pokemon= '"+pokemone+"'";
  console.log(pokemone)
  condatabase.query(sql3,function(err,result){
    if (err) throw err;
    console.log("BETH IS pretty");
    setResHtml(sql3, resql=>{
      console.log("hi")
      reo = reo.replace('{${table}}', resql);
      res.writeHead(200, {'Content-Type':'text/html; charset=utf-8'});
      res.write(reo, 'utf-8');
      res.end();
    })
  })
}})


var server = app.listen(8080, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("Example app listening at http://%s:%s", host, port)
})
