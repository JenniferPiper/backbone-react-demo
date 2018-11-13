'use strict';

var Backbone = require('backbone');
var AppView = require('./app.view');

require('./styles/main.scss');

Backbone.$(function () {
  new AppView();
});