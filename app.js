var express = require('express')
const https = require('https');
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
app.post('/users/:user_id/games/:game_id', function(req, res){
    res.send("userid: " + req.params.user_id + ". gameID: " + req.params.game_id + ". mines: " + req.query.mines + ". rows: " + req.query.rows + ". cols: " + req.query.rows);

});

//flag
app.post('/users/:user_id/games/:game_id/flag', function(req, res){
    res.send("userid: " + req.params.user_id + ". gameID: " + req.params.game_id + ". row: " + req.query.row + ". col: " + req.query.col + " flag:" + req.query.flag);
    //game frm a user
});

//reveal
app.post('/users/:user_id/games/:game_id/reveal', function(req, res){
    res.send("userid: " + req.params.user_id + ". gameID: " + req.params.game_id + ". row: " + req.query.row + ". col: " + req.query.col);
    //game frm a user
});

app.listen(3000);

