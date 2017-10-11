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


// var con = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "Dirtysouth1!"
// })
//
// con.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
//   con.query("CREATE DATABASE PokeL", function (err, result) {
//     if (err) throw err;
//     console.log("Database created");
//   });
// })

var condatabase=mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Dirtysouth1!",
  database: "PokeL"
})
//
// condatabase.connect(function(err) {
//   if (err) throw err;
//   console.log("Connectedd!");
//   var sql = "CREATE TABLE pokedata (id INT AUTO_INCREMENT PRIMARY KEY, pokemon VARCHAR(255), imagelink VARCHAR(2080), height INT, upvote INT DEFAULT 0)";
//   condatabase.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log("Table created");
//   });
// });

// const pool = mysql.createPool({
//   host: 'localhost',
//   user: 'root',
//   password: 'Dirtysouth1!',
//   database: 'PokeL',
//   charset: 'utf8'
// });

var reo ='<html><head><title></title></head><body><h1></h1>{${table}}</body></html>';
let sql1 ='SELECT * FROM pokedata WHERE id>((SELECT max(id) FROM pokedata)-5)';

// function setResHtml(sql){
//     condatabase.query(sql, function(err,result,fields){
//       if(err){
//       console.log("functionerr");
//       throw err;
// //     }
//       var table ='';
//       for(var i=0; i<result.length; i++){
//         table +='<tr><td>'+ result[i].pokemon +'</td><td>'+ "<img src= '"+ result[i].imagelink+ "' alt='Photo of human'> </img>" + '</td><td>'+ result[i].height +  '</td><td>'+ "<button> ! </button>" + '</td></tr>';
//       }
//       table ='<table border="1"><tr> <th>Pokemon</th> <th>Image</th> <th>Height</th><th>Submit!</th> </tr>'+ table +'</table>';
// //       // con.release()
//       console.log(table)
//       return (table);
//     })};

// WHERE id>(SELECT (max(id)-5) FROM TABLE)
app.get('/', function (req, res) {
  var q = url.parse(req.url, true).query;
  var datee=q.dateis;

if (datee==3){
   var imagee=q.imageis;
   var pokemone=q.pokemonis;
   var heighte=parseInt(q.heightis);
  let sql2="INSERT INTO pokedata(pokemon,imagelink,height,upvote) VALUES ('"+ pokemone +"','"+ imagee +"','"+ heighte +"',0)";
  condatabase.connect(function(err){
  condatabase.query(sql2,function(err,result){
    if (err) {
    console.log("date-3erro");
      throw err;
    }})
    condatabase.connect(function(err){
  condatabase.query(sql1,function(err,result){
      res.writeHead(200, {'Content-Type':'text/html; charset=utf-8'});
      console.log(result);
      res.write(JSON.stringify(result));
      res.end();
    })})})
  }

else if(datee==4) {
  condatabase.connect(function(err){
condatabase.query(sql1,function(err,result){
    res.writeHead(200, {'Content-Type':'text/html; charset=utf-8'});
    console.log(result);
    res.write(JSON.stringify(result));
    res.end();
  })})
    }

else if(datee==5){
  var pokemone=q.pokemonis;
  let sql3="SELECT * FROM pokedata WHERE pokemon= '"+pokemone+"' order by id desc limit 5";
condatabase.connect(function(err){
condatabase.query(sql3,function(err,result){
    res.writeHead(200, {'Content-Type':'text/html; charset=utf-8'});
    console.log(result);
    res.write(JSON.stringify(result));
    res.end();
  })})
}
})


var server = app.listen(8080, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("Example app listening at http://%s:%s", host, port)
})
