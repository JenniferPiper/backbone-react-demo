// Import Underscore for templating
//import _ from 'underscore';
var _ = require('underscore');
// Import Backbone and its dependencies
//import Backbone from 'backbone';
var Backbone = require('backbone');
//import React from 'react';
var React = require('react');
//import ReactDOM from 'react-dom';
var ReactDOM = require('react-dom');
//import createReactClass from 'create-react-class';
var createReactClass = require('create-react-class');

var FormContainer = require('./js/components/container/FormContainer').default;

//import FormContainer from './js/components/container/FormContainer';
// class FormContainer extends React.Component {
//   render() {
//     return <h2>This text comes from Local FormContainer.</h2>;
//   }
// }

class MyComponent extends React.Component {
  render() {
    return <h2>This text comes from MyComponent.</h2>;
  }
}
class AnotherComponent extends React.Component {
  render() {
    return <h2>This text comes from AnotherComponent.</h2>;
  }
}

// Import the template
var rawTemplate = require('./app.view.tpl');
var viewOptions = {
  el: 'body',

  initialize: function () {
    // Compile the template
    this.template = _.template(rawTemplate);

    // Render the view
    this.render();
  },

  render: function () {
    // Render the template
    var renderedHtml = this.template( { message: 'App Ready, Now With Templates!' });

    // Update the DOM
    this.$el.html(renderedHtml);  
    const wrapper = document.getElementById('createArticleForm');

   // wrapper.textContent += ' Eventually.';
   
   
   
   // ReactDOM.render(<FormContainer />, wrapper);
  
   ReactDOM.render(<div><MyComponent /><AnotherComponent /><FormContainer /></div>, wrapper);

  }
};

// Export our extended view
//export default Backbone.View.extend(viewOptions);
module.exports = Backbone.View.extend(viewOptions);



// const wrapper = document.getElementById('create-article-form');
// // wrapper ? ReactDOM.render(<FormContainer />, wrapper) : false;
// ReactDOM.render(<FormContainer />, wrapper);
