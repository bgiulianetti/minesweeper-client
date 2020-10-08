## Minesweeper API Client

This is the Client of the [minesweeper API](https://github.com/bgiulianetti/minesweeper) hosted in [heroku.com](https://heroku.com)
## Decisions made
- The project was developed in Node.js with Express.js
- It consumes all of the endpoints of the minesweeper API, and for simplicity logs all the responses.

## Endpoints

Get all games:
 ``` 
  GET /games
 ```
Get all games from a user: 
 ``` 
  GET /users/{user_id}/games
 ```
Get a single game from a user: 
 ``` 
  GET /users/{user_id}/games/{game_id}
 ```
Create a new game
 ``` 
  POST /users/{user_id}/games?rows={row_count}&cols={col_count}&mines={mines_count}
 ```
 Flag a cell
 ``` 
  POST /users/{user_id}/games/{game_id}/flag?rows={row_count}&cols={col_count}&flag={flag_type}
 ```
  Reveal a cell
 ``` 
  POST /users/{user_id}/games/{game_id}/reveal?rows={row_count}&cols={col_count}
 ```
 
## Set up and run the project
 - In order to be able to run the project first you must install [node.js](https://nodejs.org/es/).
 - Once you have install node.js, you must run the following command in the root of the project:
  `$ npm install`
  - This will install all the dependencies specified in the package.json file. When this process is finish you will notice that a new folder is created (node_modules) with contains all the libraries and dependencies.
  - To run the application run the following command in the root of the project: `$ node app.js`
