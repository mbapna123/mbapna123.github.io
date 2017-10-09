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

// condatabase.connect(function(err) {
//   if (err) throw err;
//   console.log("Connectedd!");
//   var sql = "CREATE TABLE pokedata (id INT AUTO_INCREMENT PRIMARY KEY, pokemon VARCHAR(255), imagelink VARCHAR(2080), height INT, upvote INT DEFAULT 0)";
//   condatabase.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log("Table created");
//   });
// });

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'Dirtysouth1!',
  database: 'PokeAIDatabase',
  charset: 'utf8'
});

var reo ='<html><head><title></title></head><body><h1></h1>{${table}}</body></html>';

function setResHtml(sql, cb){
  pool.getConnection((err, con)=>{
    if(err) throw err;
    condatabase.query(sql, (err, res, cols)=>{
      if(err) throw err;
      var table ='';
      for(var i=0; i<res.length; i++){
        table +='<tr><td>'+ res[i].pokemon +'</td><td>'+ "<img src= '"+ res[i].imagelink+ "' alt='Photo of human'> </img>" + '</td><td>'+ res[i].height +  '</td><td>'+ "<button> Click </button>" + '</td></tr>';
      }
      table ='<table border="1"><tr> <th>Pokemon</th> <th>Image</th> <th>Height</th><th>Submit this info</th> </tr>'+ table +'</table>';
      con.release();
      return cb(table);
    });
  });
}

let sql ='SELECT * FROM pokedata WHERE id>((SELECT max(id) FROM pokedata)-5)';
// WHERE id>(SELECT (max(id)-5) FROM TABLE)
app.get('/', function (req, res) {
  var q = url.parse(req.url, true).query;
   var imagee=q.imageis;
   var pokemone=q.pokemonis;
  var heighte=q.heightis;
  var sql2="INSERT INTO pokedata(pokemon,imagelink,height,upvote) VALUES ('"+ pokemone +"','"+ imagee +"','"+ heighte +"',0)";
  condatabase.query(sql2,function(err,result){
    if (err) throw err;
    console.log("BETH IS BEAUTIFUL")})
    setResHtml(sql, resql=>{
      reo = reo.replace('{${table}}', resql);
      res.writeHead(200, {'Content-Type':'text/html; charset=utf-8'});
      res.write(reo, 'utf-8');
      res.end();
    });
  })

var server = app.listen(8080, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("Example app listening at http://%s:%s", host, port)
})
