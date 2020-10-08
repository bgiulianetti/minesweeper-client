var express = require('express')
const https = require('https');
const request = require('request');

const BASE_URL = "https://bgiulianetti-minesweeper.herokuapp.com/minesweeper";
var querystring = require('querystring');
var http = require('http');
var fs = require('fs');


var app = express();


app.get('/', function(req, res){
    res.send('get');
});

//Get all games
app.get('/games', function(req, res){

    let data = '';
    https.get(BASE_URL + '/games', (resp) => {
        resp.on('data', (chunk) => {data += chunk;});
        resp.on('end', () => {console.log(JSON.parse(data));});
      }).on("error", (err) => {
        console.log("Error: " + err.message);
      });
    res.send('Retrieve all games ok');
});

//Get all games from a user
app.get('/users/:user_id/games', function(req, res){
    
    path = "/users/" + req.params.user_id + "/games";
    https.get(BASE_URL + path , (resp) => {
        let data = '';
        resp.on('data', (chunk) => {data += chunk;});
        resp.on('end', () => {console.log(JSON.parse(data));});
      }).on("error", (err) => {
        console.log("Error: " + err.message);
      });
    
    res.send('Get games from user ok');
});


//Get a single game from a user
app.get('/users/:user_id/games/:game_id', function(req, res){
    
    path = "/users/" + req.params.user_id + "/games/" + req.params.game_id;
    https.get(BASE_URL + path , (resp) => {
        let data = '';
        resp.on('data', (chunk) => {data += chunk;});
        resp.on('end', () => {console.log(JSON.parse(data));});
      }).on("error", (err) => {
        console.log("Error: " + err.message);
      });
    
    res.send("Get a single game from user ok");
});


//Create a new game
app.post('/users/:user_id/games', function(req, res){
   
    const options = {
      url: BASE_URL + '/users/' + req.params.user_id + '/games',
      json: true,
      body: {
          columns: Number(req.query.cols),
          rows: Number(req.query.rows),
          mines: Number(req.query.mines)
      }
    };
  
    request.post(options, (err, res, body) => {
        if (err) {
            return console.log(err);
        }
        console.log(`Status: ${res.statusCode}`);
        console.log(body);
    });
  
res.send("Game created ok");

});

//flag a cell
app.post('/users/:user_id/games/:game_id/flag', function(req, res){

    const options = {
      url: BASE_URL + '/users/' + req.params.user_id + '/games/' + req.params.game_id + '/flag',
      json: true,
      body: {
          column: Number(req.query.cols),
          row: Number(req.query.rows),
          flag: req.query.flag
      }
    };
  
    request.post(options, (err, res, body) => {
        if (err) {
            return console.log(err);
        }
        console.log(`Status: ${res.statusCode}`);
        console.log(body);
    });

    res.send("Flag cell ok");
});

//reveal
app.post('/users/:user_id/games/:game_id/reveal', function(req, res){

  const options = {
    url: BASE_URL + '/users/' + req.params.user_id + '/games/' + req.params.game_id + '/reveal',
    json: true,
    body: {
        column: Number(req.query.cols),
        row: Number(req.query.rows)
    }
  };

  request.post(options, (err, res, body) => {
      if (err) {
          return console.log(err);
      }
      console.log(`Status: ${res.statusCode}`);
      console.log(body);
  });

  res.send("Reveal cell ok");

});

app.listen(3000);

