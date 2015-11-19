var Backbone = require('backbone');
var $ = require('jquery');
Backbone.$ = $;
var _ = require('underscore');
var tmpl = require('./templates');
var MovieModel = require('./movieModel');

module.exports = Backbone.View.extend({
  className: 'addMovie',
  model: null, // just here as placeholder, but need a model up on instantiation
  events: {
    'submit form': 'onAddMovie'
  },
  initialize: function () {
    if(!this.model) {
      this.model = new MovieModel();
    }
  },
  onAddMovie: function (evt) {
    evt.preventDefault();
    var newMovie = {
      title: this.$el.find('input[name="title"]').val(),
      releasedate: this.$el.find('input[name="releasedate"]').val(),
      cover: this.$el.find('input[name="coverPhoto"]').val(),
      rating: this.$el.find('input[name="rating"]').val(),
      plot: this.$el.find('textarea[name="plot"]').val()
    };
    this.model.set(newMovie);
    this.model.save();
    this.$el.find('input, textarea').val('');

  },
  template: _.template(tmpl.form),
  render: function () {
    var markup = this.template(this.model.toJSON());
    this.$el.html(markup);
    // in order to call .el off of render we need to return this
    // movieViewInstance.render().el - yields all markup and data from model
    return this;
  }
});
