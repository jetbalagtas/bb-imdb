// this file contains markup for the template

var Backbone = require('backbone');
var _ = require('underscore');
var $ = require('jquery');
Backbone.$ = $;
var MovieModel = require('./movieModel');

module.exports = Backbone.View.extend({
  tagName: 'article',
  className: 'movie',
  template: _.template($('#movieTmpl').html()),
  events: {
    'click span': 'onArticleClick',
  },

  onSubmitNewMovie: function () {

  },

  onArticleClick: function () {
    alert('your movie trailer will play shortly!');
  },

  render: function () {
    var markup = this.template(this.model.toJSON());
    this.$el.html(markup);
    return this;
  },

  initialize: function () {}


});
