var Backbone = require('backbone');
var _ = require('underscore');
var $ = require('jquery');
Backbone.$ = $;
var MovieView = require('./movieModelView');

module.exports = Backbone.View.extend({
  el: '.content',
  collection: null, // just a placeholder
  initialize: function () {
    // console.log(this.collection);
    this.addAll();
  },
  addOne: function (movieModel) {
    console.log("movie model", movieModel);
    var movieView = new MovieView({model: movieModel});
    this.$el.append(movieView.render().el);
  },
  addAll: function () {
    _.each(this.collection.models, this.addOne, this);
  }
});
