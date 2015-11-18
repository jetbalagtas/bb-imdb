// this file contains the shape of our data

var Backbone = require('backbone');

module.exports = Backbone.Model.extend({
  urlRoot: 'http://tiy-fee-rest.herokuapp.com/collections/imdbjetchs2015',
  idAttribute: '_id',
  defaults: {
    cover: "cover image not provided",
    title: "title needed",
    releaseyear: "release year not provided",
    plot: "plot not provided",
    rating: "not rated"
  },
  initialize: function () {

  }
});
