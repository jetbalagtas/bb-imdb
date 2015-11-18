var Backbone = require('backbone');
var MovieModel = require('./movieModel');

module.exports = Backbone.Collection.extend({
  url: 'http://tiy-fee-rest.herokuapp.com/collections/imdbjetchs2015',
  model: MovieModel,
  initialize: function () {

  }
});
