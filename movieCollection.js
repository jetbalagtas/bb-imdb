var Backbone = require('backbone');
var MovieModel = require('./movieModel');

module.exports = Backbone.Collection.extend({
  url: 'http://tiny-tiny.herokuapp.com/collections/bbjetchs2015',
  model: MovieModel,
  initialize: function () {

  }
});
