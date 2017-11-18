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

// var nodeMachineId = require('node-machine-id');
console.log('hi');
// var con = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "Dirtysouth1!"
// })
//
// con.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
//   con.query("CREATE DATABASE heroku_88c51e6c2ac50c3", function (err, result) {
//     if (err) throw err;
//     console.log("Database created");
//   });
// })
var condatabase={
  host: "us-cdbr-iron-east-05.cleardb.net",
  user: "b3f6181b95101f",
  password: "6079974d",
  database: "heroku_88c51e6c2ac50c3"
}

var connection;

function handleDisconnect() {
  connection = mysql.createConnection(condatabase); // Recreate the connection, since                                              // the old one cannot be reused.
  connection.connect(function(err) {              // The server is either down
    if(err) {                                     // or restarting (takes a while sometimes).
      console.log('error when connecting to db:', err);
      setTimeout(handleDisconnect, 2000); // We introduce a delay before attempting to reconnect,
    }                                     // to avoid a hot loop, and to allow our node script to
  });                                     // process asynchronous requests in the meantime.                                    // If you're also serving http, display a 503 error.
  connection.on('error', function(err) {
    console.log('db error', err);
    if(err.code === 'PROTOCOL_CONNECTION_LOST') { // Connection to the MySQL server is usually
      handleDisconnect();                         // lost due to either server restart, or a
    } else {                                      // connnection idle timeout (the wait_timeout
      throw err;
    }
  });
}

handleDisconnect();
// console.log("hi");
// console.log("asdf");
// let r= nodeMachineId.machineIdSync(true);
// console.log(r)
// var rarray={ris: r}
// console.log('there');

//
// condatabase.connect(function(err) {e
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
//   database: 'heroku_88c51e6c2ac50c3',
//   charset: 'utf8'
// });

var reo ='<html><head><title></title></head><body><h1></h1>{${table}}</body></html>';
let sql1 ='SELECT * FROM pokedata WHERE id>((SELECT max(id) FROM pokedata)-50)';

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
app.set('port', (process.env.PORT || 5000))

app.get('/', function (req, res) {
  var q = url.parse(req.url, true).query;
  var datee=q.dateis;

  if (datee==3){
     var imagee=q.imageis;
     var pokemone=q.pokemonis;
     var heighte=parseFloat(q.heightis);
     var rand=parseInt(q.randis);
     console.log(rand)
    let sql2="INSERT INTO pokedata(pokemon,imagelink,height,upvote,machID) VALUES ('"+ pokemone +"','"+ imagee +"','"+ heighte +"',0,'"+rand+"')";
    // connection.connect(function(err){
    connection.query(sql2,function(err,result){
      if (err) {
      console.log("date-3erro");
      }
    })
      // connection.connect(function(err){
    connection.query(sql1,function(err,result){
        res.writeHead(200, {'Content-Type':'text/html; charset=utf-8'});
        res.write(JSON.stringify(result));
        res.end();
      })
    // })})
    }

else if(datee==4) {

connection.query(sql1,function(err,result){
    res.writeHead(200, {'Content-Type':'text/html; charset=utf-8'});
    console.log(result);
    res.write(JSON.stringify(result));
    res.end();
  })}

else if(datee==5){
  var pokemone=q.pokemonis;
  let sql3="SELECT * FROM (SELECT * FROM pokedata WHERE pokemon= '"+pokemone+"' order by id desc limit 5) aliasT ORDER BY id ASC";
connection.query(sql3,function(err,result){
    res.writeHead(200, {'Content-Type':'text/html; charset=utf-8'});
    console.log(result);
    res.write(JSON.stringify(result));
    res.end();
  })
}
})


var server = app.listen(app.get('port'), function () {
   var port = process.env.PORT
   console.log("Example app listening at",app.get(port))
})
