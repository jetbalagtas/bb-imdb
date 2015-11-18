var Backbone = require('backbone');
var _ = require('underscore');
var $ = require('jquery');
Backbone.$ = $;
var MoviesView = require('./movieModelView');

module.exports = Backbone.View.Extend({

  el: '#movie-covers',
  events: {
    'click .showForm': 'doSomething',
    // 'submit form': 'submitForm'
  },

  submitForm: function () {
    $('.userform').on('submit', function(event) {
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
  });
  },

  doSomething: function () {

  },

  initialize: function () {

  },

  addOne: function (movieModel) {
    var moviesView = new MoviesView({model: movieModel});
    this.$el.append(moviesView.render().el);
  },

  addAll: function () {
    _.each(this.collection.models, this.addOne, this);
  }

});
