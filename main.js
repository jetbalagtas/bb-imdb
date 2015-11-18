var $ = require('jquery');
var MovieCollection = require('./movieCollection');
var MovieCollectionView = require('./movieCollectionView');

$(function () {
  var movies = new MovieCollection();

  movies.fetch().then(function(data) {
    console.log("these are the movies: ", movies);
    new MovieCollectionView({collection: movies});

  });
});
