'use strict';

const Movies = require('../models/movies');

exports.createMovie = function (req, res, next) {
  const name = req.body.name;
  const year = req.body.year;
  const imdb = req.body.imdb;

  if (!name) {
    return res.status(422).send({ error: 'You must enter a name!' });
  }

  if (!year) {
    return res.status(422).send({ error: 'You must enter release year!' });
  }

  if (!imdb) {
    return res.status(422).send({ error: 'You must enter a IMDb url!' });
  }

  let movie = new Movies({
    name: name,
    year: year,
    imdb: imdb
  });

  movie.save(function (err, user) {
    if (err) { return next(err); }

    res.status(200).json({ message: "Thanks! Your request was submitted successfuly!" });
    next();
  })
}

exports.getMovie = function (req, res, next) {

  var movies = {
    __v: false,
    updatedAt: false,
    createdAt: false,
  };

  Movies.find({}, movies, function (err, message) {
    if (err) throw err;

    res.status(200).json(message);
    console.log('Movies have been successfully fetched')
  })
};

exports.deleteMovie = function (req, res, next) {

  var id = req.body._id;

  Movies.remove({ "_id": id }, function (err) {
    if (err) throw err;

    console.log('Movie successfully deleted!');
  });
};


