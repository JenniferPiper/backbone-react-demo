var Backbone = require('backbone');

var AppView = require('./app.view');

var React = require('react');
var ReactDOM = require('react-dom');

//var FormContainer = require('./js/components/container/FormContainer');

Backbone.$(function () {
  new AppView();
});

//const wrapper = document.getElementById('create-article-form');
//ReactDOM.render(<FormContainer />, wrapper);