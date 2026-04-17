const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const movieModel = require('./movie-model.js');

const app = express();
const movies = movieModel.movies;

// Parse urlencoded bodies
app.use(bodyParser.json());

// Serve static content in directory 'files'
app.use(express.static(path.join(__dirname, 'files')));

// Configure a 'get' endpoint for all movies..
app.get('/movies', function (req, res) {
  // Part 1: Remove the next line and replace with your code
  res.json(
    movies
  )
})

// Configure a 'get' endpoint for a specific movie
app.get('/movies/:imdbID', function (req, res) {
  /* Task 2.1. Remove the line below and add the 
    functionality here */
  const imdbID = req.params['imdbID'];
  const movie = movieModel.movies[imdbID];
  if (!movie) {
    return res.sendStatus(404)
  }
  res.json(movie);
})

/* Task 3.1 and 3.2.
   - Add a new PUT endpoint
   - Check whether the movie sent by the client already exists 
     and continue as described in the assignment */

app.listen(3000)

console.log("Server now listening on http://localhost:3000/")

