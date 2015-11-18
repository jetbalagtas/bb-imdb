var Backbone = require('backbone');
var _ = require('underscore');
var $ = require('jquery');
Backbone.$ = $;
var MoviesView = require('./movieModelView');
var MovieCollection = require('./movieCollection');
var MovieModelView = require('./movieModelView');
var MovieModel = require('./movieModel');


module.exports = Backbone.View.extend({

  el: '#movie-covers',
  events: {
    'click .addThisMovie': 'addMovie',
    // 'submit form': 'submitForm'
  },

  addMovie: function (event) {
    event.preventDefault();
    var newMovie = {
      cover: ('input[name="cover"]').val(),
      title: ('input[name="title"]').val(),
      releaseyear: ('input[name="releaseyear"]').val(),
      plot: ('input[name="plot"]').val(),
      rating: ('input[name="rating"]').val()
    };
    var newModel = new MovieModel(newMovie);
    newModel.save();
    this.collection.add(newModel);
    this.addOne(newModel);

    $('input[name="cover"]').val("");
    $('input[name="title"]').val("");
    $('input[name="releaseyear"]').val("");
    $('input[name="plot"]').val("");
    $('input[name="rating"]').val("");
  },

  addOne: function (movieModel) {
    var moviesView = new MoviesView({model: movieModel});
    this.$el.append(moviesView.render().el);
  },

  addAll: function () {
    _.each(this.collection.models, this.addOne, this);
  },

  initialize: function () {

  }

});
