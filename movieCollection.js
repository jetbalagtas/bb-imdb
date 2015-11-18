var Backbone = require('backbone');
var _ = require('underscore');
var MovieModel = require('./movieModel');

module.exports = Backbone.Collection.extend({
  url: 'http://tiy-fee-rest.herokuapp.com/collections/imdbjetchs2015',
  model: MovieModel
  });

  // config: function () {
  //
  // },
  //
  // buildImgUrl: function (obj) {
  //
  // },
  //
  // parse: function (data) {
  //
  // },
  //
  // initialize: function () {
  //
  // }
