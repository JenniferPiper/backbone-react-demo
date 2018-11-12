var Backbone = require('backbone');

var AppView = require('./app.view');

var React = require('react');
var ReactDOM = require('react-dom');

require('./styles/main.scss');

Backbone.$(function () {
  new AppView();
});